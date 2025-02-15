import React from "react";
import { Link } from "react-router";

export const Nav = () => {
	return (
		<>
			<nav className='bg-gradient-to-r from-amber-600 to-amber-500'>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex flex-row items-center gap-15'>

						<Link
							to='/'
							className='font-bold text-white relative group'
							aria-label='Ir a la página de inicio'
						>
							Inicio
							<span className='absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/60'></span>
						</Link>

						<Link
							to='/busqueda'
							className='font-bold text-white relative group'
							aria-label='Ir a la página de búsqueda'
						>
							Búsqueda
							<span className='absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/60'></span>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
