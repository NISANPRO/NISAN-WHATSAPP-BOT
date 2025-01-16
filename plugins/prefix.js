module.exports = {
  config: {
    name: "prefix",
    aliases: ["currentprefix"],
    permission: 0,
    prefix: 'both',
    categorie: "Utility",
    credit: "Developed by Mohammad Nayan",
    description: "Displays the bot's current prefix.",
    usages: [
      `${global.config.PREFIX}prefix - Shows the current bot prefix.`,
      `${global.config.PREFIX}currentprefix - Alias for displaying the bot prefix.`,
    ],
  },
  start: async ({ event, api }) => {
    const currentPrefix = global.config.PREFIX;
    const message = `┏━━ [ 𝙲𝚈𝙱𝙴𝚁 𝙻𝙸𝚂𝙰 ]━━➣\n┃🔰 𝚂𝚈𝚂𝚃𝙴𝙼 𝙿𝚁𝙴𝙵𝙸𝚇: [ %1 ]\n┃🔰 𝚈𝙾𝚄𝚁 𝙱𝙾𝚇 𝙲𝙷𝙰𝚃 𝙿𝚁𝙴𝙵𝙸𝚇: [ %2 ]\n┗━━━━━━━━━━━━➢🔰 My current prefix is: \`${currentPrefix}\``;
    await api.sendMessage(event.threadId, { text: message });
  },
};
