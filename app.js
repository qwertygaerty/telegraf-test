const { Telegraf } = require("telegraf");

const bot = new Telegraf("5683415512:AAFg5kK6v7khP72tsIJmFejgbt8ZttpYgSQ");

const sentMenu = () => {
  bot.telegram.sendMessage(ctx.chat.id, "What i can", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "help",
            callback_data: "help",
          },
          {
            text: "kill",
            callback_data: "kill",
          },
          {
            text: "story",
            callback_data: "story",
          },
          {
            text: "game",
            callback_data: "game",
          },
        ],
      ],
    },
  });
};

bot.command("help", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "You never wanted my friendship. And uh, you were afraid to be in my debt.",
    {}
  );
  sentMenu();
});

bot.action("kill", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "guys let's be friends", {});
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "img/dog.jpg",
  });
});

bot.action("story", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Michael, the young and idealistic son of Vito Corleone," +
      " the head of the most powerful Mafia clan in New York, returns home as a war hero and is determined to live his own life." +
      " But tragic circumstances make him face the legacy of his family.",
    {}
  );
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "img/cat.jpg",
  });
});

bot.launch();
