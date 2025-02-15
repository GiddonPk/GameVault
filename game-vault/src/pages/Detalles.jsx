import React from "react";

import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getById } from "../services/fetch";

export async function loader({ params }) {
	const id = params.id;
	return { id };
}

function Detalles() {
	const [juego, setJuego] = useState([]);
	const { id } = useLoaderData();

	useEffect(() => {
		const fetchJuego = async () => {
			try {
				const post = await getById(id);
				setJuego(post);
			} catch (error) {
				console.error(error);
			}
		};
		fetchJuego();
	}, []);

	return (
		<>
			<main className='bg-stone-900 text-white w-full p-4 font-bold'>
				<div className='group relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
					<div className='relative h-80 w-full'>
						<img
							src={juego["background_image"] || "/placeholder.svg"}
							alt={juego["name"]}
							className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70'></div>
					</div>

					<div className='absolute bottom-0 left-0 right-0 p-4'>
						<h1 className='text-3xl sm:text-4xl font-bold text-white transition-all duration-300 group-hover:translate-y-[-4px] line-clamp-2'>
							{juego["name"]}
						</h1>
						<div className='mt-2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></div>
					</div>
				</div>

				<div className='flex gap-4 mt-4 border p-5 rounded border-white'>
					<p>Plataformas:</p>
					{juego["platforms"]?.map((platform) => (
						<div key={platform.platform.id} className='flex items-center'>
							<p className='ml-2 text-sm text-amber-200'>{platform.platform.name}</p>
						</div>
					))}
				</div>

				<div className='mt-6 text-justify text-1xl text-amber-200 border p-5 rounded border-white'>
					<p className="mb-5">
						<strong className="text-white">Lanzamiento: </strong> {juego["released"]}
					</p>

					<p className="mb-5">
						<strong className="text-white">Género: </strong> {juego["genres"]?.map((genre) => genre.name).join(", ")}
					</p>

					<p className="mb-10">
						<strong className="text-white">Descripción: </strong> {juego["description_raw"] || "Sin descripción disponible"}
					</p>

					<a
						href={juego["website"] || "#"}
						target='_blank'
						rel='noopener noreferrer'
						className=' bg-amber-600 hover:bg-white hover:text-amber-500 text-white font-bold py-1.5 px-4 rounded-sm transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-50'
					>
						Página Oficial
					</a>
				</div>
			</main>
		</>
	);
}

export default Detalles;
