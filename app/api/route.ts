import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: Request) {
  const xHelloMiddleware1 = request.headers.get('x-hello-from-middleware1')
  let json_response = {
    status: 'success',
    request: xHelloMiddleware1,
  }
  return NextResponse.json(json_response)
}
