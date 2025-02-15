const url = "https://api.rawg.io/api/games";
const url2 = "https://api.rawg.io/api/games/";

const key = "?key=adcd050854f34145aedaeabed2f593d3";
const key2 = "&key=adcd050854f34145aedaeabed2f593d3";
const rating = "&metacritic=80&page_size=40";

const paginacion = "&page_size=50";
const search = "?search=";

export const getFilter = async (name) => {
	try {
		const response = await fetch(url + search + name + paginacion + key2);
		if (!response.ok) {
			throw new Error(`Error al obtener juegos: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ocurrió un error al hacer fetch:", error);
		throw error;
	}
};

export const getBest = async () => {
	try {
		const response = await fetch(url + key + rating);
		if (!response.ok) {
			throw new Error(`Error al obtener juegos: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ocurrió un error al hacer fetch:", error);
		throw error;
	}
};

export const getById = async (id) => {
	try {
		const response = await fetch(url2 + id + key);
		if (!response.ok) {
			throw new Error(`Error al obtener juegos: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ocurrió un error al hacer fetch:", error);
		throw error;
	}
};
