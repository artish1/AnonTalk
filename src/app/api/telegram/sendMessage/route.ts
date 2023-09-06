import realTalkBot, { groupChatId } from '@/telegram/realTalkBot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!message)
    return NextResponse.json({ message: 'There was no message in body' });

  let res;
  try {
    res = await realTalkBot.sendMessage(groupChatId, 'Question: ' + message);
  } catch (err) {
    console.log('ERROR: ', err);
    return NextResponse.json({
      err,
      message: 'There was an error sending a message to Telegram',
    });
  }

  return NextResponse.json({ res });
}
