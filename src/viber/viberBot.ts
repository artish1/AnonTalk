import { Bot, Events } from 'viber-bot';

const realTalkBot = new Bot({
  authToken: process.env.VIBER_API_KEY as string,
  name: 'RealTalk',
  avatar: 'http://viber.com/avatar.jpg',
});

realTalkBot.on(Events.MESSAGE_RECEIVED, (message, response) => {
  response.send('REALTALK: ' + message);
});

export default realTalkBot;
