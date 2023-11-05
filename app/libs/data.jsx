export const dynamic = 'force-dynamic'


import { fetchToken } from "./token"; 

export async function fetchPlaylist(start,num) {
  try {
    const Token = await fetchToken();

    if (!Token) {
      throw new Error("Token is not fetched");
    }

    const playlist = await fetch(
      `https://api.spotify.com/v1/browse/featured-playlists?offset=${start}&limit=${num}`,
      {
        method: "GET",
        headers: {
            Authorization: `Bearer ${Token.access_token}`,
          },
        next: {revalidate: 3000}
      }
    );

    console.log(playlist.status);
 

    // Delay for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (playlist.ok) {
      const response = await playlist.json();
      return response;
    } 
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Playlist");
  }
}
