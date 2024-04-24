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
global.devs = "2348179387119";
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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlB4OU9wWS9oL2RLQTBmamN6UGRqd0dwYzR6Y0lVT1BReVFHS3JUZGRsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDFUZThza3dtaTl6Umg2YWRzQ3BvbzFxY3VWbjg1R3UraithYW1hMmpsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTFpXR1R0VG44K3ZhQXRXWTgvY0ZYUDFYSjdVVXRnWDk0SlNyLzc0ODNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWEUwUTlhQWxmNGpmZDVWcEhsNzhaSjRiVVY5NWNaS3ZSWmk3c0VYcW1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JZUhJMSs1QlJkemF4c0U5UUVPTVc4L2txNWxDa2JiOWVKSFZ1dFJHMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0vdjRTdDEzcEd1VG16U2dyZ2xPOUVRYmNRS3dVZGVmK1JxWVlnQy8wV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9Eajd2UUNKY21DQWM2SVpwTlVuZnZ3Y2g4TTRuL2VoUG4wN3ZDcTEyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXdjZVN0VFo2QnhBQmFuVG9URXlac3A4Y0VGa0dINXFIOXJKOGo3c0Qxdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisveUlVL3VKSHJSb0dYYVJFVVF2Y1hSMDNpczZGcUh1VFg3SkZpcU5CNVo4bjlpSy9ETnhTVy8ycllPUkhGZ1d4V013WmhZSzJiQ0hrTGJmOXlDSUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJEaTJJZmtHRVp2T1ZlUVJ6SnNySGJTVUc1VjBBS2FvUHJ5VEJraFZqWkhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHNFh0VElMSVNRdVVUaEkwRTFhTUhRIiwicGhvbmVJZCI6ImQ0OTMxMDczLTE3NDktNGMzNS1iNmRlLTJmNTMxZjYwZTUwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiMHZUelJzR1RDZXd1ZDBDbHVlZmNqWUw2VlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXBiWUVFZjgxc1g3ZzVuSFpRU0trVmdibkRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFOQ1ZBMjZLIiwibWUiOnsiaWQiOiIyMzQ4MTc5Mzg3MTE5OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfq6UgTm8gTmFtZSDwn6ulIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcS8vUmtROGNta3NRWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPT3E4TVdJbXpLb0ozSXp4NVpTcDdZVUk4TXZwVlBma1p5bVp4aTM0b2w4PSIsImFjY291bnRTaWduYXR1cmUiOiJhMDIxVmoraGpEamdWeFlmOFltaVJ3SzFqRW1Ea01hYnRnclQ1YUE0RXdLNlowSjBQUDRHTnNkU1hpV0NabC9iZ1RMU1c1U00ycnRCWVVnZ0UyMmVBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNFRBMmFNSkNtWTJpVU5DZmZvY1FoYUNPNy84WWdIWHJVRldQWUFWTFlJRTQ0NHAzdmpva1U5eWhtbldDMEJaV3pOL1RMS2M2b210d0R4dHZ4eTJ0QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTc5Mzg3MTE5OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRqcXZERmlKc3lxQ2R5TThlV1VxZTJGQ1BETDZWVDM1R2NwbWNZdCtLSmYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTM5NzI0Nzh9"
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
