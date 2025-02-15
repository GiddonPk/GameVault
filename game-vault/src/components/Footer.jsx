import React from "react";
import { Link } from "react-router";

export const Footer = () => {
	return (
		<>
			<footer className='bg-gradient-to-r from-amber-600 to-amber-500 text-amber-50 py-8'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='space-y-4'>
							<h3 className='text-2xl font-bold text-white'>GameVault</h3>
							<p className='text-sm text-amber-50'>
								La mejor plataforma para explorar videojuegos, descubrir títulos y más.
							</p>
						</div>

						<div className='space-y-4'>
							<h3 className='text-2xl font-bold text-white'>Síguenos</h3>
							<div className='flex gap-6'>
								<a
									href='#'
									className='text-amber-50 hover:text-stone-900 transition-colors duration-100'
								>
									<i className='fab fa-facebook-f text-xl'></i> {/* Facebook */}
								</a>
								<a
									href='#'
									className='text-amber-50 hover:text-stone-900 transition-colors duration-100'								>
									<i className='fab fa-twitter text-xl'></i> {/* Twitter */}
								</a>
								<a
									href='#'
									className='text-amber-50 hover:text-stone-900 transition-colors duration-100'								>
									<i className='fab fa-instagram text-xl'></i> {/* Instagram */}
								</a>
								<a
									href='#'
									className='text-amber-50 hover:text-stone-900 transition-colors duration-100'								>
									<i className='fab fa-twitch text-xl'></i> {/* Twitch */}
								</a>
							</div>
						</div>

						{/* Sección de derechos de autor */}
						<div className='space-y-4'>
							<p className='text-sm text-amber-50'>© 2025 GameVault. Todos los derechos reservados.</p>
							<p className='text-sm text-amber-50'>Desarrollado por el equipo de GameVault</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
