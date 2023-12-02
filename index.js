
const TelegramBot = require('node-telegram-bot-api');
const token = " ";
const myBot = new TelegramBot(token, {polling: true});

myBot.setMyCommands([
  {command: '/start', description: 'Запустить чат'},
  {command: '/info', description: 'Узнать о сервисе'},
  {command: '/method', description: 'Узнать о методе МАК'},
  {command: '/card', description: 'Получить карту с подсказкой'},
  {command: '/pay', description: 'Оформить подписку'}
]);

const {btmStart,  btmInfo, btmConditions, btmCard} = require('./btm.js');
const {textStart, textInstructions, textInfo } = require('./variables.js');

const check = async (text, chatId, userName) => {
  if (text === '/start'){
    await myBot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ec3/a23/ec3a2356-630e-47ad-af3e-aebd2fcaf03f/1.webp')
    await myBot.sendMessage(chatId, `Привет, ${userName}! ${textStart}`, btmStart);
    }
      else if (text === '/info'){
        await myBot.sendMessage(chatId, `${userName}, ${textInfo}`, btmInfo)
      }
      else if (text === 'instructions'){
        await myBot.sendMessage(chatId, textInstructions, btmCard);
      }
      else if (text === 'conditions'){
        await myBot.sendMessage(chatId, `Доступ к сервису возможен по подписке. Стоимость подписки составляет 250 рублей в месяц. ` , btmConditions);
      }
      else if (text === '/method' || text === '/card' || text === '/pay'){
        await myBot.sendMessage(chatId, `Блок находится в стадии разработки `);
      }
        else{
          await myBot.sendMessage(chatId, `${userName}, выбери команду из меню, чтобы продолжить`)
        }
}
const start = () => {
  myBot.on('message', async msg => {
    const msgInfo = msg;
    const chatId = msg.chat.id;
    const text = msg.text;
    const userName = msg.from.first_name;
    
    return check(text, chatId, userName);
  })
  myBot.on('callback_query', async msg =>{
    const text = msg.data;
    const chatId = msg.message.chat.id;
    const userName = msg.message.chat.first_name;
    return check(text, chatId, userName);
  })
}
start();
