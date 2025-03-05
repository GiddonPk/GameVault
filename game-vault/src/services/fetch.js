const url = "https://api.rawg.io/api/games";
const url2 = "https://api.rawg.io/api/games/";

const urlPublishers = "https://api.rawg.io/api/publishers"
const urlPublishers2 = "https://api.rawg.io/api/publishers/"

const tag = "https://api.rawg.io/api/tags/"

const miKey = "adcd050854f34145aedaeabed2f593d3"

const key = "?key=adcd050854f34145aedaeabed2f593d3";
const key2 = "&key=adcd050854f34145aedaeabed2f593d3";
const rating = "&metacritic=80&page_size=40";

const paginacion = "&page_size=50";
const search = "?search=";


export const getByGenero = async (genero) => {
    try {
        const respuesta = await fetch(`https://api.rawg.io/api/games?genres=${genero}&key=${miKey}` + paginacion);
        if (!respuesta.ok) {
            throw new Error("Error al buscar el genero");
        }
        const datos = await respuesta.json();
        console.log(datos);
        return datos.results;
    } catch (error) {
        console.error("Error en la búsqueda de genero:", error);
        return [];
    }
};

export const getByPlat = async (plataforma) => {
	try {
		const response = await fetch(url + key + `&platforms=${plataforma}` + paginacion);
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
// https://api.rawg.io/api/games?tags=1&key=adcd050854f34145aedaeabed2f593d3`
// Tags
export const getByTag = async (id) => {
	try {
		const response = await fetch(`https://api.rawg.io/api/games?tags=${id}&key=${miKey}` + paginacion);
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


export const getPublisherDetails = async (id) => {
	try {
		const response = await fetch(urlPublishers2 + id + key);
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

export const getPublishers = async () => {
	try {
		const response = await fetch(urlPublishers + key);
		if (!response.ok) {
			throw new Error(`Error al obtener publishers: ${response.statusText}`);
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