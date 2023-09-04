import { NextResponse } from 'next/server';
import { Bot, Events } from 'viber-bot';

export async function GET() {
  console.log('VIBER: ', Bot, Events);
  return NextResponse.json({ msg: 'ok' });
}
