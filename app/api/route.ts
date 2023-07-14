import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  console.log(request)
  let json_response = {
    status: 'success',
    results: request.geo,
    request,
  }
  return NextResponse.json(json_response)
}
