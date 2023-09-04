import TelegramBot from 'node-telegram-bot-api';

export const webhookUrl = process.env.WEBHOOK_URL;

const realTalkBot = new TelegramBot(
  process.env.TELEGRAM_API_TOKEN as string,
  {}
);

realTalkBot.on('message', (message, metadata) => {
  console.log('MESSAGE: ', message.text, JSON.stringify(message));
});
export default realTalkBot;
