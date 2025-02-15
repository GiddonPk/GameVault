import React from "react";

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Detalles from "./pages/Detalles";
import { Home } from "./pages/Home";
import { Busqueda } from "./pages/Busqueda";
import {loader as detallesLoader} from './pages/Detalles.jsx'

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";


import './App.css' 


function AppLayout() {
  return <>
    <Nav />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/busqueda",
      element: <Busqueda />,
    },
    {
      path: "/detalles/:id",
      element: <Detalles/>,
      loader: detallesLoader
    }]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
