import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    message: 'Next.js frontend is running',
    timestamp: new Date().toISOString(),
  })
}