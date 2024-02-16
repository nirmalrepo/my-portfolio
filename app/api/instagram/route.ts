// app/api/instagram/route.js
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let feed = await response.json();
    return NextResponse.json(feed);
  } catch (error) {
    let msg = { error: error };
    return NextResponse.json(msg);
  }
}
