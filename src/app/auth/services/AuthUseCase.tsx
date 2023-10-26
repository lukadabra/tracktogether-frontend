const backurl = import.meta.env.VITE_BACKEND_API_URL;

export async function authDeezer() {
  try {
    window.open(`${backurl}/auth/deezer`, '_self');
  } catch (error) {
    console.error(error);
  }
}

export async function authSpotify() {
  try {
    window.open(`${backurl}/auth/spotify`, '_self');
  } catch (error) {
    console.error(error);
  }
}