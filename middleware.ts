import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { geo } = request
  const country = geo?.country || 'US'!
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', country)

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', country)
  return response
}
