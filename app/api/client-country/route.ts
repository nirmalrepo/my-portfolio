import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: Request) {
  const country = request.headers.get('x-geo-location') || 'LK'!

  let json_response = {
    status: 'success',
    country: country,
  }
  return NextResponse.json(json_response)
}
