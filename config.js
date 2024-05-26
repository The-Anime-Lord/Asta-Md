//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "anime,x,zone010@gmail.com";
global.location = "Kyoto,Japan.";
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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0kvNjRQVWxTeU8vbHJ5b2VWbDRDaXY3bmNsMWpKakZKYWl2eFg3cHNIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjg5NjZQWWtkcHduQmYyS3FKSnNaS3ZlK0NTOEt2K2FveGVDM09GZ3cxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TVRNdHc5dktzSDBBbTJqV1g3MWRoUTd4RU1Ed3ZscFpVLy9GNldYeTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRaDhOblY5ZHhWbElDQkM4Tlo2U0Y1cWZ6a0JTTUtTWHV2OFQyNFZsb0FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIdU9WMm5Fcm5pamZ1OEs1MVBWaTBaeDQyY1YwaHV2S2VCMUUvU0ZBVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRKTHE3czNCZU9yRkUyUDFUUDhrS1hNNlRBZTVMV29yL3NXcFduY1cvU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JQNGRkTzVGeS9BdDIydFNzbjcxTkZpQVRuSlVZeWV1bzhqTlR1ZE8yTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjB6WHhhalE3MWJrUWgxaXpJbFlvajd1V0xLeTU3RDFZcFRSdjdTSXRsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKMkdlTkdNRkxFM0JFcFV4c1Y3ZjBIRWVaVWI5ZENlWkEzZ25qaDRoMXZxek5kUTBOamdwZ2JmL3N2QitUT2pYVzkrL3BOT1V0TVFBbUUyNGZlMEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJKSG1ZWGJhaUdoTDNURDErbTdjc3pjbWdaTjU2VUVpNFZXN1JYVUNNMHhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvVFhGeWpNQlRWdW9CN3ZhZjJyX0pBIiwicGhvbmVJZCI6IjcxYjYzNmU4LTY4ZDctNDViNy1iNTQ4LTMyNGMxYTM5MjFjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRzlObktPWElaMlpLTUQ5VDRGcnhoT2V3K1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktzaFRBYzVGZ3p3dy9adDVrcVBOWW41UGQvZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIaG5qWVFsdm5Oc2dZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlQT2VWbHBSVk5UckxuZ1Z1SUNhY0xLVTFHUk5USDNFVG9wQjI1bU92R1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJYN2M1N1l6SnJVUmxyVmlybCtDVEF4Y3RMeEIyRnQ1aTJBRmxCTkhINytTM1VlR3c0SDFuQTcwOXJCS0UyY0tSVGZsOXFlR0ZBTnY2R253QlFmc0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjNUFnOTR6YXI3ZEJzQVcrRmRPRlorR3ovWEZKczJpL29mSVNMT1dzODlQa0dpWDg0b2ZOOUdzL2ZzZ0Jwek5Ia3FFbjBBajl5VjVnRnFoWFQ5VFpBUT09In0sIm1lIjp7ImlkIjoiMjM0ODEzMzI4NjE4MToxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJObyBOYW1lIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzMyODYxODE6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWp6bmxaYVVWVFU2eTU0RmJpQW1uQ3lsTlJrVFV4OXhFNktRZHVaanJ4ayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjc0NzQyN30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.5.0",
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
