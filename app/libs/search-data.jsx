import { fetchToken } from "./token";

export async function fetchSearch(q,types) {
    try {
      const Token = await fetchToken();
  
      if (!Token) {
        throw new Error("Token is not fetched");
      }


      const all = ["artist","track","album"]

      function QueryType(query){
        if(query === 'all'){
            return all
        }else{
         return query
        }

      }
       console.log(QueryType(types))
  
      const Search = await fetch(
        `https://api.spotify.com/v1/search?offset=0&limit=4&q=${q}&type=${QueryType(types)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token.access_token}`,
          },
          cache:'no-cache',
        }
      );
      console.log(Search.status)
  
      if (Search.ok) {
        const response = await Search.json();
        console.log(response)
        return response;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Playlist");
    }
  }