import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const isLoggedIn = request.cookie.get("auth")?.value=="true"
    if(!isLoggedIn){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}