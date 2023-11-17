import { fetchToken } from "./token";
// api function to fetch the playlists
export async function fetchAlbum(id) {
    try {
      const Token = await fetchToken();
  
      if (!Token) {
        throw new Error("Token is not fetched");
      }
  
      const playlist = await fetch(
        `https://api.spotify.com/v1/playlists/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token.access_token}`,
          },
          next: { revalidate: 3000 },
        }
      );
  
  
      if (playlist.ok) {
        const response = await playlist.json();
        return response;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Album");
    }
  }
  
 