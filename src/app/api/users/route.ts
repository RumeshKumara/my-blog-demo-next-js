import { NextResponse } from 'next/server';

export async function GET() {
  // Mock users endpoint
  return NextResponse.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
  ]);
}