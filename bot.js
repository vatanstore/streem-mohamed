const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "M!";


DAB.on('ready', () => {
   console.log(`bot online`);
   DAB.user.setGame(`لا تحزن إذا حذفك أحدهم من حياته، فلربما لم يتحمّل مرافقة الملوك، فقرّر المشي مع أمثاله.`,"http://twitch.tv/.Mohamed")
   DAB.user.setStatus("dnd")
});



 
client.login(process.env.BOT_TOKEN);
