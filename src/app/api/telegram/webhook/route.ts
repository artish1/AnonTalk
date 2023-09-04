import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('BODY: ', body);
  return NextResponse.json({});
}
