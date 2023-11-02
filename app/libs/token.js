export const revalidate = 3600;

// access spotify api

export async function fetchToken() {
  try {
    const data = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    console.log(data.status);
    if (data.ok) {
      var Token = await data.json();
      return Token
    }
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch Playlist");
  }
}
