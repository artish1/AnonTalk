import realTalkBot from '@/telegram/realTalkBot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await realTalkBot.setWebHook(process.env.WEBHOOK_URL as string);
  return NextResponse.json({ res });
}

export async function GET(request: Request) {
  console.log('TRYING');
  // const res = await realTalkBot.setWebhook(process.env.WEBHOOK_URL as string);
  return NextResponse.json({ msg: 'LETS TRY' });
}
