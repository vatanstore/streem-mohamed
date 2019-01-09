const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
   console.log(`bot online`);
   client.user.setGame(`لا تحزن إذا حذفك أحدهم من حياته، فلربما لم يتحمّل مرافقة الملوك، فقرّر المشي مع أمثاله.`,"http://twitch.tv/.Mohamed")
  client.user.setStatus("dnd")
});



 
client.login(process.env.BOT_TOKEN);
