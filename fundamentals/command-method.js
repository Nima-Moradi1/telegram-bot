//! we can do all the things in basic-commands with the command too :

const { Telegraf } = require("telegraf");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `salam ${ctx.chat.first_name} , khosh oomadi!`);
});
bot.command("help", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `salam ${ctx.chat.first_name} , help ro seda zadi!`);
});
bot.command("settings", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `salam ${ctx.chat.first_name} , tanzimat alan barat ersal mishe`);
});
//?we can pass multiple commands to send one single reply :
bot.command(["settings", "setting", "tools"], (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `salam ${ctx.chat.first_name} , tanzimat alan barat ersal mishe`);
});

bot.launch();
