const { Telegraf } = require("telegraf");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("text", (ctx) => {
  ctx.reply("you sent a text for me ? awwww!");
});
bot.on("voice", (ctx) => {
  ctx.reply("you sent a audio for me ? awwww!");
});

bot.on("video", (ctx) => {
  ctx.reply("you sent a video for me ? awwww!");
});
bot.on("photo", (ctx) => {
  ctx.reply("you sent a photo for me ? awwww!");
});

bot.on("sticker", (ctx) => {
  ctx.reply("you sent a sticker for me ? awwww!");
});
//for groups -> when admin changes the group photo
bot.on("new_chat_photo", (ctx) => {
  ctx.reply("admin changed the photo, thank you admin !");
});
//for groups -> when new members joins the group
bot.on("new_chat_members", (ctx) => {
  const username = ctx.message.new_chat_member.first_name ?? ctx.message.new_chat_member.username;
  ctx.reply(`welcome ${username}!`);
});

bot.launch();
