import realTalkBot, { groupChatId } from '@/telegram/realTalkBot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!message)
    return NextResponse.json({ message: 'There was no message in body' });

  const res = await realTalkBot.sendMessage(groupChatId, message);

  return NextResponse.json({ res });
}
