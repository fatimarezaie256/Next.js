import { cookies } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request:NextRequest){
    const headerInfo = new Headers(request.headers);
    console.log(headerInfo.get("Authorization"));
    const cookieInfo = request.cookies.get("theme");
    console.log(cookieInfo);
    const newCookie = await cookies();
    newCookie.set("isloggedIn","Sarah ");
    console.log(newCookie.get("isloggedIn"));
    return new Response("<h1>Hellp from Api route</h1>",{
        headers:{"Content-Type":"text/html",
            "Set-Cookie":"theme=light"
        }
    });    
}