const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

//?get the bot-token from BotFather in telegram
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in environment variables.");
}
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message("document"), async (ctx) => {
  try {
    ctx.sendChatAction("upload_document");
    const docId = ctx.message.document.file_id;
    const link = await bot.telegram.getFileLink(docId);
    ctx.reply("your download link : " + link, { reply_to_message_id: ctx.message.message_id });
  } catch (error) {
    ctx.reply(error?.message ?? error?.description);
  }
});
bot.on(message("photo"), async (ctx) => {
  try {
    ctx.sendChatAction("upload_photo");
    const photoId = ctx.message.photo[0].file_id;
    const link = await bot.telegram.getFileLink(photoId);
    ctx.reply("your download link : " + link, { reply_to_message_id: ctx.message.message_id });
  } catch (error) {
    ctx.reply(error?.message ?? error?.description);
  }
});
bot.on(message("voice"), async (ctx) => {
  try {
    ctx.sendChatAction("upload_voice");
    const voiceId = ctx.message.voice.file_id;
    const link = await bot.telegram.getFileLink(voiceId);
    ctx.reply("your download link : " + link, { reply_to_message_id: ctx.message.message_id });
  } catch (error) {
    ctx.reply(error?.message ?? error?.description);
  }
});

bot.launch();
