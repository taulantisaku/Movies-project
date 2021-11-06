import RegisterForm from "../components/auth/RegisterForm";
import API from "../api/index";

export default function Register(props) {
  const handleOnSubmit = ({ email, password, passwordConfirmation }) => {
    API.users.register(email, password, passwordConfirmation).then(() => {
      props.history.push("/login");
    });
  };

  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}
