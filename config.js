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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJqODUya3gzTUpaL2dHS1ZmOGdVenpwL09XUld3SkJzbmkzTEF6ekFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGFOMnkyNkZsTG8rckc2VTB3cVYvT2MwWTkrbU44bFhxVlVFck1VVjZuWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TnR0Nmx4Q3pnd3JTTDk5cmwxcnBpRTdWVUdnOWJ3cFZ1SzdPYndtK0hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlclpWVUtETFkrWXdNaXh4YzdhR1h1WWVhSU1JVzNvZWVlSTFRSnRRV0JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNaGgvQUZoMHB0ek9jWUVrVktWMEg1NzBWeGJZRkhGcS9pdW93VFdDVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik83VXhkUzl5dnQ5aWdGSjZRSDZxeHc4VWJxeUtxZEoyV2lpQWlDb2tZQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YwZ0xScUI3bTZGY0l5M0hXTDlLbGZaOXF0dXdQdTBGZlhpZ2FGWnFIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3lVZ3pnUms3L1dyczJDd1RaYmRmK3lHMWpoTWhkSWppWVdhaHQ2UXlCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh5c1doY0tBK25WZS80em1MbHlyMmVNN0tZSkVsb3ZSME95OHJRVGFBMmJYV2lYSEluOHdhUTJ2cXlSR2MxbThZLy80WG9aUVkvcHZRQjJ5ZmxIeUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6ImpIQnBnNVBPdHQ0alViWWljQWliVEJ2U3ZvTHN6Tk1qWkpCOTRaZmJjYnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRPRGJuMTY1U01xREhjZ05DVzNFMEEiLCJwaG9uZUlkIjoiMWMwZmJiZDktNzQ5My00NWJiLWEzMDYtZDMyNzE3YmY5YmIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFRzhkczlzaG1McFV1eXdwM2d1djl5bjVGST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMUcvNE9neE02NnBTSy95Nmt4QlBOSi8vMVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTVUQkVXTlMiLCJtZSI6eyJpZCI6IjIzNDgxNzkzODcxMTk6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+rpSBObyBOYW1lIPCfq6UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xLy9Sa1ErZjZuc1FZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9PcThNV0ltektvSjNJeng1WlNwN1lVSThNdnBWUGZrWnltWnhpMzRvbDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imk2QlNydGx5N3pScGFXdEVqTmlHYlZHeUUvcXBGRkhIeGN5Vi9CeVp3dWhIYU9PSXV5RWNDNGNsd0JNYTFhN1N6aElwOE1OOGJENER6RE9VOHhYRUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2czhqdFc3eFoyalEybDlUMjNWdmNEU2hpa2p3bmZVQWJpbi9aTmJXUUdyejJxYU5wYmY3VEtla2JqVGFTZmVXVVcyU1E0bTJJOUJVbWxxVHpPVUJBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNzkzODcxMTk6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGpxdkRGaUpzeXFDZHlNOGVXVXFlMkZDUERMNlZUMzVHY3BtY1l0K0tKZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDAyODQyMn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "The_Anime_Lord",
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
