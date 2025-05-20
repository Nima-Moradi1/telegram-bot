//this is just a tutorial file on how to create inline menu and keybaords in bot

bot.command(["crypto", "start"], (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Please choose one of the cryptoCurrencies", {
    reply_to_message_id: ctx.message.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "one", callback_data: "one" },
          { text: "two", callback_data: "two" },
          { text: "three", callback_data: "three" },
        ],
        [
          { text: "four", callback_data: "four" },
          { text: "five", callback_data: "five" },
          { text: "six", callback_data: "three" },
        ],
        [{ text: "seven", callback_data: "seven" }],
      ],
    },
  });
});

bot.action("one", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on one!");
});
bot.action("two", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on two!");
});
bot.action("three", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on three!");
});
bot.action("four", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on four!");
});
bot.action("five", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on five!");
});
bot.action("six", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on six!");
});
bot.action("seven", (ctx) => {
  ctx.answerCbQuery();
  ctx.reply("you clicked on seven!");
});
