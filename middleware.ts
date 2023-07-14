import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { geo } = request
  const country = geo?.country || 'US'!
  const response = NextResponse.next()
  response.headers.set('x-geo-location', country)
  return response
}
