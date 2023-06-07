import axios from "axios";

const API_FAKE = 'https://backendpizza-production.up.railway.app/';

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