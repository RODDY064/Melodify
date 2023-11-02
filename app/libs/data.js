import { resolve } from "styled-jsx/css";
import { fetchToken } from "./token"

// fetch Data 

/*
export async function fetchAlbums() {
  try {
  
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch albums");
  }
}

*/
const  accessToken = 'BQANN4nfQQTs4qs0MdPzl0eXbgbGdtl919J9nAWMuUVq58eNlb1-SPV0RqbwAq9ZDxPzgqXmh0J2qnLjge9-nR_ve_rkio76kOX0J0beNeo_Xy4vzx4';


export async function fetchPlaylist() {
  try {
    const playlist = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken, // Add a space after 'Bearer'
      },
    });

    console.log(playlist.status)
    
    new Promise((resolve)=>setTimeout(()=>resolve,3000))

    if (playlist.ok) {
      const response = await playlist.json();
      console.log(response);
      return response;
    } 
  } catch (error) {
    console.error(error);
    throw new Error("Fail to fetch Playlist");
  }
}

