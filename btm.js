module.exports = {
  btmStart: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Получить карту с подсказкой', callback_data: '/card'}],
        [{text: 'Узнать о сервисе', callback_data: '/info'}, {text: 'Узнать о методе МАК', callback_data: '/method'}]
      ]
    })
  },
  btmInfo: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Условия участия', callback_data: 'conditions'}, {text: 'Инструкция', callback_data: 'instructions'}]
      ]
    })
  },
  btmConditions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Оформить подписку', callback_data: '/pay'}]
      ]
    })
  },
  btmCard: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Получить карту', callback_data: '/card'}]
      ]
    })
  }
};