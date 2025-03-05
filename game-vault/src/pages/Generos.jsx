import React from "react";

import { getByGenero } from "../services/fetch";
import { useEffect, useState } from "react";
import { Game } from "../components/Game";
import { useLoaderData } from "react-router";

import { useLocation } from "react-router";

export async function loader({ params }) {
	const id = params.id;
	return { id};
}

export const Generos = () => {
    const [juegos, setJuegos] = useState([]);
    const [game, setGame] = useState([]);
    const [buscando, setBuscando] = useState(false);
	const { id } = useLoaderData();

    const location = useLocation();
    const nombre = location.state?.nombre;

    useEffect(() => {
        const fetchJuegos = async () => {
            try {
                const post = await getByGenero(id);
                console.log(post)
                setJuegos(post);
            } catch (error) {
                console.error(error);
            }
        };
        fetchJuegos();
    }, []);

    return (
        <>
            <main className='bg-stone-900 text-white w-full p-4 font-bold'>
                <div className='max-w-2xl mx-auto p-6'>
                    <h1 className='text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white'>Género: {nombre}</h1>
                </div>

                {!buscando && (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                        {juegos.map((juego) => (
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
