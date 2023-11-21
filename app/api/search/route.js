import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { fetchToken } from "@app/libs/token";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const word = searchParams.get("query");
    const header = headers();
    const Type = header.get("Type");
    const Limit = header.get('Limit')

    const Token = await fetchToken();

    if (!Token) {
      throw new Error("Token is not fetched");
    }

    const all = ["artist", "track", "album"];

    const Search = await fetch(
      `https://api.spotify.com/v1/search?offset=0&limit=${Limit}&q=${word}
      &type=${Type === "all" ? all : Type}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token.access_token}`,
        },
        cache: "no-cache",
      }
    );

    if (Search.ok) {
      const response = await Search.json();
      return NextResponse.json(response, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
