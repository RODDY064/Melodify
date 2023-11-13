export const dynamic = "force-dynamic";

import { fetchToken } from "./token";

// api function to fetch the playlists
export async function fetchPlaylist(start, num) {
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
        next: { revalidate: 3000 },
      }
    );



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

export async function fetchNewReleased(start, num) {
  try {
    const Token = await fetchToken();

    if (!Token) {
      throw new Error("Token is not fetched");
    }

    const albums = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?offset=${start}&limit=${num}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token.access_token}`,
        },
        next: { revalidate: 3000 },
      }
    );



    // Delay for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 7000));

    if (albums.ok) {
      const response = await albums.json();
      return response;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch New Release Album");
  }
}

// api function to fetch the artists
export async function fetchArtist() {
  try {
    const Token = await fetchToken();

    if (!Token) {
      throw new Error("Token is not fetched");
    }

    const artistId = [
      "3TVXtAsR1Inumwj472S9r4",
      "6l3HvQ5sa6mXTsMTB19rO5",
      "2LiqbH7OhqP0yuaG8VL1wJ",
      "2ayt5jDUuTCpoTG7sHSvuq",
      "01DTVE3KmoPogPZaOvMqO8",
    ];

    const artist = await fetch(
      `https://api.spotify.com/v1/artists?ids=${artistId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token.access_token}`,
        },
        next: { revalidate: 3000 },
      }
    );

 

    // Delay for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (artist.ok) {
      const response = await artist.json();
      return response;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Artist");
  }
}



//api function to fetch the playlist tracks

export async function fetchTracks() {
  try {
    const Token = await fetchToken();

    if (!Token) {
      throw new Error("Token is not fetched");
    }

    const playlist = await fetchPlaylist(16, 1);

    if (!playlist) {
      throw new Error("Playlist is not fetch");
    }

    const { playlists } = await playlist;

    const url = playlists.items[0].href;

    const field = `items(
      track(
        name,
        href,
        album(name, href, images, artists(id, name, href)),
        artists(name),
        external_urls,
        preview_url,
        duration_ms
      )
    )`;

    const trackItems = await fetch(`${url}/tracks?limit=10&fields=${field}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
      next: { revalidate: 3000 },
    });



    // Delay for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (trackItems.ok) {
      const response = await trackItems.json();
      return response;
    }
  } catch (error) {
    console.log(error);
    throw new Error("fail to fetch tracks");
  }
}
