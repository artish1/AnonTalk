import TelegramBot from 'node-telegram-bot-api';

export const webhookUrl = process.env.WEBHOOK_URL;
export const groupChatId = process.env.GROUP_CHAT_ID || -4026274322;

const realTalkBot = new TelegramBot(process.env.TELEGRAM_API_KEY as string, {});

export default realTalkBot;
