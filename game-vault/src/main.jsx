import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Busqueda } from "./pages/Busqueda";
import { Publishers } from "./pages/Publishers";
import { GamePlat } from "./pages/GamePlat.jsx";
import { Generos } from "./pages/Generos.jsx";
import { Tags } from "./pages/Tags.jsx";

import { loader as detallesLoader } from "./pages/Detalles.jsx";
import { loader as publisherLoader } from "./pages/PublisherDetails.jsx";
import { loader as plataformasLoader } from "./pages/GamePlat.jsx";
import { loader as tagsLoader } from "./pages/PublisherDetails.jsx";

import Detalles from "./pages/Detalles.jsx";
import PublisherDetails from "./pages/PublisherDetails.jsx";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import { Provider } from "react-redux";
import { store } from "./store"; // Asegúrate de importar el store correctamente


import "./App.css";

function AppLayout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/busqueda",
				element: <Busqueda />,
			},
			{
				path: "/detalles/:id",
				element: <Detalles />,
				loader: detallesLoader,
			},
			{
				path: "/publishers",
				element: <Publishers />,
			},
			{
				path: "/publisher/:id",
				element: <PublisherDetails />,
				loader: publisherLoader,
			},
			{
				path: "/plataforma/:id",
				element: <GamePlat />,
				loader: plataformasLoader,
			},
			{
				path: "/genero/:id",
				element: <Generos />,
				loader: plataformasLoader,
			},
			{
				path: "/tag/:id",
				element: <Tags />,
				loader: tagsLoader,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
