import React from "react";
import { getBest } from "../services/fetch";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
	const [juegos, setJuegos] = useState([]);

	useEffect(() => {
		const fetchJuegos = async () => {
			try {
				const post = await getBest();
				setJuegos(post["results"]);
			} catch (error) {
				console.error("Error fetching games:", error);
			}
		};
		fetchJuegos();
	}, []);

	const settings = {
		dots: false, // Mostrar los puntos de navegación
		infinite: true, // Hacer el carrusel infinito
		speed: 500, // Velocidad de transición
		slidesToShow: 1, // Mostrar solo una imagen a la vez
		slidesToScroll: 1, // Avanzar una imagen a la vez
		autoplay: true, // Hacer que el carrusel pase automáticamente
		autoplaySpeed: 3000, // Tiempo entre los cambios (en milisegundos)
		arrows: false, // Sin flechas
		fade: true, // Hacer la transición de desvanecimiento entre las imágenes
	};

	return (
		<>
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
						Aquí podrás encontrar las últimas noticias sobre lanzamientos, novedades y análisis de los
						juegos más esperados.
					</p>

					<p className='mb-5'>
						<strong className='text-white'>🚀 Nuestros Proyectos: </strong>
						Trabajamos en crear contenido único y atractivo para todos los usuarios. Desde reseñas
						detalladas hasta guías para que aproveches al máximo cada juego.
					</p>

					<p className='mb-5'>
						<strong className='text-white'>🤝 ¿Te gustaría colaborar? </strong>
						Si estás interesado en colaborar con nosotros, no dudes en contactarnos. Buscamos apasionados
						por los videojuegos para compartir su experiencia y conocimiento.
					</p>

					<p className='mb-5'>
						<strong className='text-white'>🏆 Juegos Mejor Valorados: </strong>
						Descubre cuáles son los juegos más populares y mejor valorados por la comunidad. Mantente al día
						con los títulos que están marcando tendencia.
					</p>
				</div>
			</main>
		</>
	);
};
