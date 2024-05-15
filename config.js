//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/ZkBjWK2.jpg";
global.devs = "2348133286181";
global.sudo = process.env.SUDO || "2348133286181;
global.owner = process.env.OWNER_NUMBER || "2348133286181";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhKQW5tTlJ6SXAzM0FjdmR6b1dNSEVybW1UWkgrcUc5cCtSZklXZnBscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK21lRWdoWFZ6aG1lcHF2ZzI3SW9BYVNsNm5HenF0MmR2QXJNU0JaaHZ4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ3N6d0tIYjRPdGhiL0h6cXhGZXZZUC9NblMyOXNkZTZidGhBQUs4b2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSy9EWnFnRGVPWVVEWVM4bjI5RkZINUdRVkFLY3BKMzhGR2YwNXZSL0c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGaWtEYUM0OWV2YkcwNE43N1QxUGkzYVBnbmN4VjhZNHBFdFMxVnJUMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl4ZG14VnQ0bWJsbUttVUJVQmlSR2JrZXIzL1BPMGo2bkdJVlNVU0IvQ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Vxc2FiQUIyWFhjOGovTTYxeEJodkM5WGwyQ0QwR0R3eUoyZG9OazQxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZBNEtJY0MrRGdNcCt4cGRhNFA5K0JTOFNLZEl4WEpqKzNhZlc0THFsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdSR2g5RGVHWjEraTJtUVpDQkFrL2dBMXBsOWtjekR0Q3diZ0pvT09lb2hQVU1SemdxSlBvYkZLRkpNR0FJWWpwYlQ2ZVptZmJUejNMdUlhUVNtZGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6Ik9ZZ2ZkTlZlREUzVXRZWi95WG90UEZ0Tk1EZ1VJVmx2NVpMbGxlenpMWkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBaSXJEM2lMUWplQVNjblAxWWh6RVEiLCJwaG9uZUlkIjoiYzAzZjQxZTYtOTVjYy00MTJmLWIyZTItMTY1Yjc0MWZiNDQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZPQlpSTjZGVUR2WTNwMjVoL01NRnNVRExWRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNWp4TUxoV1hIU1M3cXExMFFlZUJmeVRQT289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlkxV1I1NVQiLCJtZSI6eyJpZCI6IjIzNDgxMzMyODYxODE6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlpQg8J2VufCdlobwnZaS8J2WiiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0RobmpZUS92S1BzZ1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVBPZVZscFJWTlRyTG5nVnVJQ2FjTEtVMUdSTlRIM0VUb3BCMjVtT3ZHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2FqRnlMMEp6QU14dmxFVFFCTUUzQkxkb1lJTys3eWxkUW9pM3BMME9wdkp6cExlLzAwR1BBb3AxbmFPT01jcVhBRFhsck9XSENmUk9PNjBheEVTQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImMwVi9jYkJtKzhCaTVWb2pXN0pESmljaXYrc2dUM1JTWHdGZ3pjNTkyOGlIcGR5ZElEVzFQcUVRd21mSlcyRXVVUmhNWmcxWnNlZ0NQZHRYdEJhM2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzMzI4NjE4MToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZanpubFphVVZUVTZ5NTRGYmlBbW5DeWxOUmtUVXg5eEU2S1FkdVpqcnhrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NzMwODM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJINSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "No Name MD",
  author: process.env.PACK_AUTHER || "No Name MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "No Name MD",
  ownername: process.env.OWNER_NAME || "No Name",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
