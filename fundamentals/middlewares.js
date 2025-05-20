const { Telegraf } = require("telegraf");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use((ctx, next) => {
  const msg = ctx.message.text;
  if (msg === "nima") {
    ctx.reply("salam nima mokhles");
    return next();
  }
  return ctx.reply("msg is not nima , i cannot go to the next level");
});

bot.launch();
