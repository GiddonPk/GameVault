import React from "react";

import { Link } from "react-router";

export const Game = ({ titulo, foto, id }) => {
	return (
		<>
			<Link
				to={`/detalles/${id}`}
				className='group relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'
			>
				<div className='relative h-64 w-full'>
					<img
						src={
							foto ||
							"https://media.istockphoto.com/id/1170275727/es/vector/icono-de-fondo-de-patr%C3%B3n-vectorial-sin-costuras.jpg?s=612x612&w=0&k=20&c=PbVnD4P1ejlvZDu5DoIJHDjIgOGPM3vf4jRDSSrI1HA="
						}
						alt={titulo}
						className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70'></div>
				</div>
				<div className='absolute bottom-0 left-0 right-0 p-4'>
					<h2 className='text-xl sm:text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-[-4px] line-clamp-2'>
						{titulo}
					</h2>
					<div className='mt-2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></div>
				</div>
			</Link>
		</>
	);
};
