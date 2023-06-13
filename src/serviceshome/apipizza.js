import { instanceAxios } from "./api";

// Función que realiza una petición GET a la API
export const get = async (endpoint) => {
  const response = await instanceAxios.get(endpoint);
  return response.data;
};
