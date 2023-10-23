import axios from 'axios';

const backurl = import.meta.env.VITE_BACKEND_API_URL;

export async function authDeezer() {
  try {
    const response = await axios.get(`${backurl}/auth/deezer`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function authSpotify() {
  try {
    const response = await axios.get(`${backurl}/auth/spotify`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}