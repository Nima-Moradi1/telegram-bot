const { default: axios } = require("axios");
const { Telegraf } = require("telegraf");
require("dotenv").config();

const cryptoToken = process.env.CRYPTO_TOKEN;
//?get the bot-token from BotFather in telegram
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in environment variables.");
}
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command(["crypto", "start"], (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "منوی اصلی", {
    reply_to_message_id: ctx.message.message_id,
    reply_markup: {
      inline_keyboard: [
        [{ text: "قیمت رمزارزها", callback_data: "pricing" }],
        [{ text: "CoinList(CryptoCompare)", url: "https://cryptocompare.com" }],
      ],
    },
  });
});

bot.action("pricing", (ctx) => {
  ctx.answerCbQuery();
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "لطفا یکی از رمزارزهای زیر را انتخاب کنید ", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "BTC", callback_data: "BTC" },
          { text: "ETH", callback_data: "ETH" },
        ],
        [
          { text: "USDT", callback_data: "USDT" },
          { text: "BUSD", callback_data: "BUSD" },
        ],
        [{ text: "Main Menu", callback_data: "main_menu" }],
      ],
    },
  });
});

bot.action("main_menu", (ctx) => {
  ctx.answerCbQuery();
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "منوی اصلی", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "قیمت رمزارزها", callback_data: "pricing" }],
        [{ text: "CoinList(CryptoCompare)", url: "https://cryptocompare.com" }],
      ],
    },
  });
});
bot.action(["BTC", "ETH", "USDT", "BUSD"], async (ctx) => {
  try {
    const apiURl = `https://min-api.cryptocompare.com/data/price?fsym=${ctx.match}&tsyms=USD&api_key=${cryptoToken}`;
    const data = await axios.get(apiURl).then((res) => res.data);

    ctx.reply(` ${ctx.match[0]} : ${Object.values(data)[0]} $`);
  } catch (error) {
    ctx.reply(error?.message ?? "Something went wrong in recieving crypto prices");
  }
});

bot.launch();
