index.js
const mineflayer = require('mineflayer');

function createBot() {
    console.log('Подключение AFK бота...');

    const bot = mineflayer.createBot({
        host: '136.243.83.105',
        port: 25339,
        username: 'AFK_Bot_247',
        version: '1.21.4'
    });

    bot.on('spawn', () => {
        console.log('Бот успешно зашел на сервер!');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 60000);
    });

    bot.on('end', () => {
        console.log('Отключение от сервера. Переподключение через 10 секунд...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('Ошибка бота:', err.message);
    });
}

createBot();
