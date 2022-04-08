const TELEGRAM_BOT_TOKEN ='5266897049:AAFJR8Z2pRZ3t5xRv1hHbv2tDmz5nxsw33w';
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);



// bot.on(['/start', '/hello'], (msg) =>{
//     console.log(msg),
//      msg.reply.text('Welcome!')
     
// });

bot.on('text', (msg) => {
    let inbox=msg.text;
    if(inbox==="/start"){
        msg.reply.text(`Hello ${msg.from.first_name}`)
    }
    if(inbox==="/start"){
        msg.reply.text(`Hello ${msg.from.first_name}`)
    }
});
 
bot.start();