const { Telegraf } = require("telegraf");
const { createReadStream } = require("fs");
const path = require("path");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Help text is : 
/start - start the bot
/help - help reference
/print - print whatever you say after calling this command
/city - send your city after this command to see what happens!
`;

bot.start((ctx) => {
  ctx.sendChatAction("typing");
  ctx.reply("hello iam the Print Bot !");
  ctx.reply(helpMessage);
});
bot.help((ctx) => {
  ctx.sendChatAction("typing");
  ctx.reply(helpMessage);
});
bot.command("print", (ctx) => {
  const msg = ctx.message.text;
  const listOfMsg = msg.split(" ");
  let message = "";
  if (listOfMsg.length == 1) {
    ctx.sendChatAction("typing");
    message = "You said Print!";
  } else {
    message = listOfMsg.slice(1).join(" ");
  }
  ctx.sendChatAction("typing");
  ctx.reply(message);
});

bot.command("city", (ctx) => {
  ctx.sendChatAction("typing");
  const cityMessage = `
Help text is : 
/Tehran - Iran
/NewYork - USA
/Dubai - UAE
/HongKong - China
`;
  ctx.reply(cityMessage);
});
bot.command(["tehran", "Tehran"], (ctx) => {
  //the action text we see in telegram chat below the name that says "sending photo" or ..
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.sendPhoto(
    { source: createReadStream(path.join(__dirname, "cities", "tehran.jpg")) },
    { reply_to_message_id: ctx.message.message_id }
  );
});
bot.command(["dubai", "Dubai"], (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "cities", "dubai.jpg")),
    },
    { reply_to_message_id: ctx.message.message_id }
  );
});
bot.command(["HongKong", "hongkong", "Hongkong"], (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "cities", "hongkong.jpeg")),
    },
    { reply_to_message_id: ctx.message.message_id }
  );
});
bot.command(["NewYork", "Newyork", "newyork", "New york", "new york"], (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "cities", "newyork.jpeg")),
    },
    { reply_to_message_id: ctx.message.message_id }
  );
});

bot.launch();
