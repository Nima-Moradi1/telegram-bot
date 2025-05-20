const { Telegraf } = require("telegraf");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears("nodejs", (ctx) => {
  ctx.reply("یک ران تایم برای اجرا کردن جاوا اسکریپت برای توسعه سرور");
});

bot.hears([/کصکش/, /مادرقهوه/, /بی ناموس/, /کص ننت/, /کصشر/, /کونی/, /جنده/, /مادرجنده/, /کیر/], (ctx) => {
  ctx.deleteMessage();
  ctx.reply("حرف زشت ننویس حرومزاده اینجا محیط خانوادگیه کیرم تو دهن بی ادبت بره ");
});

bot.launch();
