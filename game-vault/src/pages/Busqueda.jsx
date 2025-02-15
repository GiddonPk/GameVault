import React from "react";

import { getBest, getFilter } from "../services/fetch";
import { useEffect, useState } from "react";
import { Game } from "../components/Game";

export const Busqueda = () => {
	const [juegos, setJuegos] = useState([]);
	const [filtro, setFiltro] = useState("");
	const [game, setGame] = useState([]);
	const [buscando, setBuscando] = useState(false);

	// Cargar todos los juegos
	useEffect(() => {
		const fetchJuegos = async () => {
			try {
				const post = await getBest();
				setJuegos(post["results"]);
			} catch (error) {
				console.error(error);
			}
		};
		fetchJuegos();
	}, []);

	// Filtrar juegos
	const buscarJuegos = async () => {
		if (filtro.length < 3) {
			alert("Escribe al menos 3 caracteres para buscar.");
			return;
		}

		const formateo = filtro.replace(/ /g, "-");

		try {
			setBuscando(true);
			const post = await getFilter(formateo);
			setGame(post["results"]);
		} catch (error) {
			console.error("Error al filtrar juegos:", error);
			setGame(null);
		}
	};

	const handleInputChange = (e) => {
		const valor = e.target.value;
		setFiltro(valor);

		if (valor === "") {
			setBuscando(false);
			setGame(null);
		}
	};

	return (
		<>
			<main className='bg-stone-900 text-white w-full p-4 font-bold'>
				<div className='max-w-2xl mx-auto p-6'>
					<h1 className='text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white'>
						Busca tu juego favorito
					</h1>
					<div className='relative flex items-center'>
						<input
							value={filtro}
							onChange={handleInputChange}
							type='text'
							placeholder='Escribe el título del juego...'
							className='w-full px-4 py-3 pl-12 pr-20 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:border-transparent transition duration-300 ease-in-out dark:bg-stone-800 dark:text-gray-200 dark:border-white dark:focus:ring-amber-500'
						/>
						<button
							onClick={buscarJuegos}
							className='absolute right-2 bg-amber-600 hover:bg-white hover:text-amber-500 text-white font-bold py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-50'
						>
							Buscar
						</button>
					</div>
				</div>

				{!buscando && (
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
						{juegos.map((juego) => (
							<Game key={juego.id} id={juego.id} titulo={juego.name} foto={juego.background_image} />
						))}
					</div>
				)}

				{buscando && game && (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
						{game.map((juego) => (
							<Game key={juego.id} id={juego.id} titulo={juego.name} foto={juego.background_image} />
						))}
					</div>
				)}

				{buscando && game === null && (
					<div className='mt-4 p-4 bg-red-800 text-white rounded-lg shadow-lg text-center'>
						<p>No se encontró ningún juego con ese título. Intenta con otro nombre.</p>
					</div>
				)}
			</main>
		</>
	);
};
