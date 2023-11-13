export const dynamic = 'force-dynamic'


// access spotify api

export async function fetchToken() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const token = `${clientId}:${clientSecret}`;
    const base64Token = Buffer.from(token).toString("base64");

    const data = await fetch("https://accounts.spotify.com/api/token",{
      method: "POST",
      headers: {
        Authorization: `Basic ${base64Token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
      cache : 'no-cache',
      
    });
    if (data.ok) {
      const tokenResponse = await data.json();
      return  tokenResponse;
    } 
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Token");
  }
}


