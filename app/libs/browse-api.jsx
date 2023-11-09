import { fetchToken } from "./token";


export async function fetchBrowse(start, num) {
    try {
      const Token = await fetchToken();
  
      if (!Token) {
        throw new Error("Token is not fetched");
      }
  
      const browse = await fetch(
        `https://api.spotify.com/v1/browse/categories?offset=${start}&limit=${num}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token.access_token}`,
          },
          next: { revalidate: 3000 },
        }
      );
  
      console.log("Browse",browse.status);
  
      // Delay for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      if (browse.ok) {
        const response = await browse.json();
        return response;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Playlist");
    }
  }