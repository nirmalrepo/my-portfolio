import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { geo } = request
  const country = geo?.country || 'US'!
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-geo-location', country)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set('x-geo-location-1', country)
  return response
}
