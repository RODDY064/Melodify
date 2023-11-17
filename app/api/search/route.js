import { NextResponse } from "next/server";
import { fetchToken } from "@app/libs/token";


export async function POST (rq){
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
     
      return NextResponse.json(response,{status:200});
    }
} catch (error) {
    console.log(error)
    return NextResponse.json({error:'Internal Server Error'},{status:500})
}
}