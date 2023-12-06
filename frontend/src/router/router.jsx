import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Calling from "../BookCategory/Calling";
import SingleBook from "../singleDesc/SingleBook";
import MoreInfo from "../singleDesc/MoreInfo";

import DashboardLayout from "../dashborad/DashboardLayout";
import Dashboard from "../dashborad/Dashborad";
import ManageBooks from "../dashborad/ManageBooks";
import EditBooks from "../dashborad/EditBooks";
import Upload from "../dashborad/Upload";
import Delete from "../dashborad/Delete";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    //   rendering inside the app components
    // if want to call a specific components inside another component of app then write path&element as a children of that component
      children:[
            {
                path:"/",
                element:<Home/>,
                
            },
            {
                path:"/shop",
                element:<Shop/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            // {
            //     path:"/blog",
            //     element:<Blog/>,
            // },
            {
                path:"/book/:category",
                element:<Calling/>,
                // can also use loader
                // loader:({params})=>{fetch("address of server${params.id}")}
            },
            {
                path:'/name/:name',
                element:<SingleBook/>
            },
            {
                path:'/:id',
                element:<MoreInfo/>
            },
            
        ],
    },

    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/admin/dashboard/upload',
                element:<Upload/>
            },
            {
                path:'/admin/dashboard/manage-book',
                element:<ManageBooks/>
            },
            {
                path:'/admin/dashboard/edit-book/:id',
                element:<EditBooks/>
            },
            {
                path:'/admin/dashboard/delete/:id',
                element:<Delete/>
            },
        ]
    },
    // {
    //     path:"/sign-up",
    //     element:<Signup/>
    // },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"logout",
        element:<Logout/>

    }
  ]);

  export default router;
