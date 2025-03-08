// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../store/gameSlice.js";

export const store = configureStore({
	reducer: {
		games: gameReducer,
	},
});

// src/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gameSlice.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
	const dispatch = useDispatch();
	const { juegos, status, error } = useSelector((state) => state.games);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchGames());
		}
	}, [status, dispatch]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		fade: true,
	};

	if (status === "loading") {
		return <p className='text-center text-white'>Cargando juegos...</p>;
	}

	if (status === "failed") {
		return <p className='text-center text-red-500'>Error: {error}</p>;
	}

	return (
		<main className='bg-stone-900 text-white w-full p-4 font-bold'>
			<div className='mt-8'>
				<h1 className='text-2xl m-4'>Bienvenido a GameVault</h1>
				<Slider {...settings}>
					{juegos.map((juego) => (
						<div key={juego.id} className='relative p-4'>
							<div className='group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
								<img
									src={juego.background_image}
									alt={juego.name}
									className='w-full h-100 object-cover top-10 transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70'></div>
								<div className='absolute bottom-0 left-0 right-0 p-4'>
									<h3 className='text-xl text-white font-bold'>{juego.name}</h3>
									<p className='mt-2 text-sm text-amber-200'>{juego.released}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>

			<div className='mt-6 text-justify text-1xl text-amber-200 p-5'>
				<p className='mb-5'>
					<strong className='text-white'>🎮 Últimos Lanzamientos: </strong>
					Aquí podrás encontrar las últimas noticias sobre lanzamientos, novedades y análisis de los juegos
					más esperados.
				</p>

				<p className='mb-5'>
					<strong className='text-white'>🚀 Nuestros Proyectos: </strong>
					Trabajamos en crear contenido único y atractivo para todos los usuarios. Desde reseñas detalladas
					hasta guías para que aproveches al máximo cada juego.
				</p>

				<p className='mb-5'>
					<strong className='text-white'>🤝 ¿Te gustaría colaborar? </strong>
					Si estás interesado en colaborar con nosotros, no dudes en contactarnos. Buscamos apasionados por
					los videojuegos para compartir su experiencia y conocimiento.
				</p>

				<p className='mb-5'>
					<strong className='text-white'>🏆 Juegos Mejor Valorados: </strong>
					Descubre cuáles son los juegos más populares y mejor valorados por la comunidad. Mantente al día con
					los títulos que están marcando tendencia.
				</p>
			</div>
		</main>
	);
};
