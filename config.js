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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05rUXdLWlA5ZC9JRFNBRTdlc2lwT0NvWmtWZXJqUVo4UEhCdDdGQVNIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFoxRHBUREQ4bUUyWnJpZllITHM4SVUwVEQySFFGUkZKWXkzaThCQTkwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TGY3NVQ3Z0oxNHBWVXZWOFRURWdXUmNOdlZHOVEzNk5hZURsallERG1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJteWxWRmNvUWVCVHp1VkFHY0F6L1dLM0ttNGlSZWQ0d09tV2VXZytPREc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HWkdCbG84eitzeUpCOUsrT3F0dnNzUUcxZGhqdkZpQUVjRko2UWpiR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNMjRPSS9aRDQ1UzBCRzBXWVlwd0ZwMVRaK3lSR1RGaW9Ob1B4clhlaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0N0c1djMXUvd2Z1MzRhcHplYWs2eHpISHArblVId2tTemJMMVZnV0luYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialJKN3Rsd3RaSkc3enMxK2FlRURUZWNOcUpqK3JrR0wyYW9USGduMktIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WbHBXWWVLZ1VuTzNOdXlFOEpLU05FaGdONEwzc2ExdFgzeXRJT2xuOElEREpYU09lZG9RT1pJbG8wVFh5OHFrN1FPM0dpR3Yrc2l6MVgzMHprMmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiI5T0VXOURndi9odlJzQ3pzejhGdmJHNjk1eU95WEFFQjV1cm5oanZ4ZkdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiZG01MFB3VVRKS1VLVUJBc01uVFhBIiwicGhvbmVJZCI6ImE3ZmNjZmIxLTRiYzItNGU3MS1hNmY4LTA0NDZkNTMxZGM0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyODhkK2Y2LzZtS29OSlY0ZU9WWWpGMGJSMjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUQzYXp5bWhEMzZNeTI1ZmxlL2VtTGxPTVljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIyNkYxUTI3IiwibWUiOnsiaWQiOiIyMzQ4MTc5Mzg3MTE5OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfq6UgTm8gTmFtZSDwn6ulIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMi8vUmtRN2JHdHNRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPT3E4TVdJbXpLb0ozSXp4NVpTcDdZVUk4TXZwVlBma1p5bVp4aTM0b2w4PSIsImFjY291bnRTaWduYXR1cmUiOiJ4YlhoTW91VmVOeFUxOFIyTEdHcWsxWklCU2FMMkxkRVhZT3VabWtVeTgyMmF1c3VKR2l5ekg0eXcvRlk1enVjY2JmVTJTeVdDNVVMZ2lhTXdJZjZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNzVYZWVEWmNKUVhSRDFIT0ZEeUNPQXh5OVcweDhSYmlhb0dVSitMMG1GZ1NuNDkvZCtCOWtURVdjdHg1SW13QmRSZEoySmg2N3ZsZ0NJbGZ6YW1saVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTc5Mzg3MTE5OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRqcXZERmlKc3lxQ2R5TThlV1VxZTJGQ1BETDZWVDM1R2NwbWNZdCtLSmYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQxMTY4NTd9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "No Name",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴀsᴛᴀ",
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
