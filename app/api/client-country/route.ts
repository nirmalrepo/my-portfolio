import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  const { geo } = request
  const country = geo?.country || 'LK'!
  let json_response = {
    status: 'success',
    country: country,
  }
  return NextResponse.json(json_response)
}
