

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Naavbar/Navbar"
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";




import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Contact",
        element: <Contact/>
    },
    {
        path: "/About",
        element: <About/>
    }
])

root.render(<RouterProvider router={router}/>)