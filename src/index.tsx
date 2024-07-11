import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import MyErrorLayout from "./layouts/MyErrorLayout";
import UserPage from "./pages/UserPage";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let myRouter = createBrowserRouter([
    {path:'/',
        element: <MainLayout/>,
        errorElement:<MyErrorLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]},
])

root.render(
    <RouterProvider router={myRouter}/>
);
