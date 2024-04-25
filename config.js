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
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348179387119";
global.owner = process.env.OWNER_NUMBER || "2348179387119";
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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhCZ3h4VHMwNEorQWwvN0puYVdhY3NpR21YWmNwY3RjUitMOFBjczVWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0xHejhpSzJQaTF6NFZXSDFHdC9DQ2FNMkh3SFYrbE5IR3FhRmFoS2xDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTUhhYWpML1V1MVd0WTU0SEFOdEhwT1JXVDY5ZnQ5MUs3TktXOW0zdTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4b1pEQjBlVUFlbnpiUXlLeDR4WUlJOVBhcEFiczNJbUEzdWRQcTQ4KzJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDMG5wTmlVWFhpUTkvQURJQTcxNFUzQW5zbnBzSXlzWndramlxVy90RkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtrSGZQQldwVXlwRnZnNkpuZWZwazluSjhLU1hjcUM5RjBVZHRHMkpyV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxiaHpCdjQ0NnVsS2VkOTROUytOZ216cUZENHdtUng2djR2dnFTTzNuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczJJQ2N6RjZGZWx1NTVibERHa29jT0srSzNib1gyZEJkOXlaSUc2T25SND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg2NEx5OW53bk1admp4OGhiU0ZEbHB1UG1KRVkvd1cwdHpFY2kxcm5HNmpLM1Z4T0ZyQ2hOeXYrS3NGeXk4Y210bFkvYzJ0eHV6bUZNbGd1RitRaWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJudEc3Z25HVFJ1dGMwWCtvNlR4S0FocnhwRk5BNEIveXJtTFRqTVZ6SUY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6bVdTYVM2bFN5T3NkbnJuYkVkVjZ3IiwicGhvbmVJZCI6IjRmMWU5ZTUwLTFjOTItNDJhZi1hOTc2LWVhNjM1YjRjMzI0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyNzBjaXphOWdEODJ4Rk5sRHZXcXZnc2VwWGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2dTWnFmUUZDdCtGSCt0V0RsSU84TXE4M2RVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpYTTlFQThXIiwibWUiOnsiaWQiOiIyMzQ4MTc5Mzg3MTE5OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfq6UgTm8gTmFtZSDwn6ulIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeS8vUmtRbUplcnNRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPT3E4TVdJbXpLb0ozSXp4NVpTcDdZVUk4TXZwVlBma1p5bVp4aTM0b2w4PSIsImFjY291bnRTaWduYXR1cmUiOiI5MDZCbnpqYU41aGFJVEZ2NjBBZlN4bHBDczZHb1diaHMyMEpZREl2cmEwVWpZRUJMbzh5ak9WcFVtNDV0L1JubmN3V3Z2S1F1TDV4SUZDaTBJUDhEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS2Fla3lJWFRJYTRhRCtPY2ZLM29zUEZDdGZqTnFNQTcvTWtEbDhFakhiZDE1aks4SWJoa1pUdXZvLzgvYjVEZUNBWGZtYkNraGxGZk5UN2dmTHdraXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTc5Mzg3MTE5OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRqcXZERmlKc3lxQ2R5TThlV1VxZTJGQ1BETDZWVDM1R2NwbWNZdCtLSmYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQwODA2Nzd9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "No-Name",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-376f43ad-a36f-418f-8993-0bf25894a0fd",
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
