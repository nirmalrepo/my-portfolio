import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: Request) {
  console.log(request)
  let json_response = {
    status: 'success',
    request: request,
  }
  return NextResponse.json(json_response)
}
