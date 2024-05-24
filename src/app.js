import {createRoot} from "react-dom/client"
import React from "react";
import Applayout from  "./components/Applayout";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import EmployeeAdd from "./components/EmployeeAdd";
import UpdateEmployee from "./components/UpdateEmployee";
import ErrorPage from "./components/Error";

const rootElement = document.getElementById("root");

const appLayout= createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/add",
                element:<EmployeeAdd/>
            },
            {
                path:"/update/:id",
                element:<UpdateEmployee/>
            }
        ]
    },
    
])
const  root = createRoot(rootElement);

root.render(<RouterProvider router={appLayout}/>);




