# Movies-project

<h3> This project is a movie site created with MERN stack, mainly focused on the client side with React JS.
It has integrated authorization with JWT(JSON Web Token), whereas an admin can  Delete or Edit a movie.
We can also add new users by registering them. </h3>

-Main React features used: 
* React Hooks; such as useState,useEffect, useContext, custom Hooks
* React Router library, for navigating on the pages
* React-slick slider, for showing movie slider on Home page
* Axios, for fetching the movies from database 
---
Some application screenshots: 

-Movies page

![Movies page](https://user-images.githubusercontent.com/44265863/140621318-4f1f8f6e-ef6f-459c-809c-e6a9794bbf5b.jpg)

-Home page - movies slider

![Home page - movies slider](https://user-images.githubusercontent.com/44265863/140621373-65f6b3ff-8339-4200-a731-e41450ca6742.jpg)


-In order to make changes, user must be logged in (as admin)

![Login page](https://user-images.githubusercontent.com/44265863/140621419-34c92d73-c411-42e5-b4c7-4ff9eab1f5e9.jpg)

-After logging in as admin, user permissions change. As we can see below, now we can Edit or Delete a movie.

![Admin-logged-in](https://user-images.githubusercontent.com/44265863/140621487-7d49ff90-36a6-4007-bb44-3e5f52ca6a00.jpg)
--- 
#Code review

Since we need to fetch movies in two different pages(components), Home page (for slider) and Movies page, I used a custom hook called useFetchMovies to fetch the movies from the database: 

![CustomHook](https://user-images.githubusercontent.com/44265863/140739211-158a8d95-a934-430f-bbcd-37d66baa0f5f.jpg)

In this function, we make a call using the API object created for api calls. Inside this object we have a property called movies which makes the api call: 
![getMoviesAPI-Call](https://user-images.githubusercontent.com/44265863/140739875-06677131-7b27-4f0f-be6e-3a99d58e3e00.jpg)

axiosInstance represents the base URL "http://localhost:4000/api". 

In similar way we make other api calls like add, update or delete movie using the routes created in server (nodejs): 
![Routes](https://user-images.githubusercontent.com/44265863/140740192-4347a164-011e-4588-82b5-443079cf69bd.jpg)


