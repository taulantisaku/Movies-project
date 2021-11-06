import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import AuthenticatedUser from "./components/auth/AuthenticatedUser";
import PublicRoute from "./components/auth/PublicRoute";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./lib/context/AuthContext";
import jwtDecode from "jwt-decode";

import "./App.css";
import setAuthorizationToken from "./lib/helpers/setAuthorizationToken";

const localStorageKey = "movies-project";

export default function App() {
  const [user, setUser] = useState(null);
  const [registerUser, setRegisterUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(localStorageKey);
    if (token) {
      const response = jwtDecode(token);
      setUser(response.user);
      setAuthorizationToken(token);
    }
  }, []);

  const handleSetLoggedInUser = (token) => {
    const response = jwtDecode(token);
    setUser(response.user);
    localStorage.setItem(localStorageKey, token);
    setAuthorizationToken(token);
  };

  const handleLogout = (token) => {
    setUser(null);
    localStorage.removeItem(localStorageKey);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isAdmin: user && user.role === "admin",
        isUser: user && user.role === "user",
        setLoggedInUser: handleSetLoggedInUser,
        logout: handleLogout,
      }}
    >
      <Container className="App">
        <AuthenticatedUser />
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </AuthContext.Provider>
  );
}
