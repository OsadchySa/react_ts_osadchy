import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";



export let router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <h1>404 Error</h1>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts/:id', element: <PostPage/>}
        ]
    }
])