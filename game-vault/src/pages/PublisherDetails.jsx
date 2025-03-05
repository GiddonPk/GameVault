import React from "react";

import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getPublisherDetails } from "../services/fetch";

export async function loader({ params }) {
	const id = params.id;
	return { id };
}

function PublisherDetails() {
	const [juego, setJuego] = useState([]);
	const { id } = useLoaderData();

	useEffect(() => {
		const fetchJuego = async () => {
			try {
				const post = await getPublisherDetails(id);
				setJuego(post);
				console.log(post)
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
							src={juego["image_background"] || "/placeholder.svg"}
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

				<div className='mt-6 text-justify text-1xl text-amber-200 border p-5 rounded border-white'>
					<p className="mb-5">
						<strong className="text-white">Nº de juegos publicados:</strong> {juego["games_count"]}
					</p>
					
					<p className="mb-10">
						<strong className="text-white">Descripción: </strong> {juego["description"] || "Sin descripción disponible"}
					</p>
				</div>
			</main>
		</>
	);
}

export default PublisherDetails;
