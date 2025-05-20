const { Telegraf } = require("telegraf");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

//?what message to send when user starts the robot
bot.start((ctx) => {
  ctx.reply("Hey Beautiful. Welcome to the nodejs bot.");
  ctx.telegram.sendMessage(ctx.chat.id, `salam ${ctx.chat.first_name}`);
});

//?the help command to instruct user on the bot
bot.help((ctx) => {
  ctx.reply("for more help, read the description below");
});

//?if we need some configs or settings from user
bot.settings((ctx) => {
  ctx.reply("one option in settings can be edited by you.");
});

bot.launch();
