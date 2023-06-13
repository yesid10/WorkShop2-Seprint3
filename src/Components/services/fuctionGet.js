import axios from "axios";

const API_FAKE = 'https://backendpizza-production.up.railway.app/';
const URL_API = "http://localhost:3000/pizzas"

export const getApiFake = async (endpoint) => {
    try {
        const {data} = await axios.get(`${API_FAKE}${endpoint}`);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// export const getPizzas = async () => {
//     try {
//       const response = await axios.get(`${URL_API}/`);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  