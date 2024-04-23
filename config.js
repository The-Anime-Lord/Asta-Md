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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUF5dVVOVGxGNndacmloSCtEblNYbURpSVBvdExBRXdJMk0rWWEra2hVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVRWQ0wzYWQ2SnNpYU13TFB3YXNaUHh2WWhzZHdkQWczcmVnRUpOWFpCWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSjVJWW16a2xDUXZxMEJXUG9wZUtybG53cm5lTW0xbm52UXVYR0Z4TFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENyt4bHVlakNqL0Y5QUFnUVRJTTJXM0VGREdENWZWMnZ4NDUyOUIxVWhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBQTVaaTdRN1FBRzFaZitqWEN1Z1NpNzBPSVJabFZwM0tOZDFITFJjV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwyLy9BZmMvTVhleXpXbjVSOWRoaE4waGt0K3IrR2ZQbHZsQ1M1WlV3a0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5sKzhvSUhjcDZxUlNsTG00d0d5SWxxV1B4dkdOdVFBRDMwUmNXZFMxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVdaSW14cTNLQTJvd0JnSC95anVyNFZKY1MrMlg2cWJxb0hyV21HR08xUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Impua3ZwSDQrMW9jWlNPZDJaZGxqN2wwbDhoM1IrWVJ3eGFaYUFIOW5DdXBIL3RiYUVZS0laZURkNWhqbWphZFVQMGZabGNpTE9yYjF0Y0o3UFNCdEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6Iksrd2lxV3ZZUVo2c05TREg1TmxpanQxVEpMT0M5L2ttd1BlQlMwTHJ3VG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxYUW9BcGRVVHBDMG5ndEFqa3Z4eWciLCJwaG9uZUlkIjoiNmI3Yzk0NmQtMDcyYi00ZTYyLTg2MTItZWI1YWE5OTMwZWFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRIczc0TTNWQnMrMmxqM1VubEY5VkhPK2Nrbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYeldwK0pTVGJ6YnJVOG01U1dnOUlGTUcyRkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0JaRzVSQloiLCJtZSI6eyJpZCI6IjIzNDgxNzkzODcxMTk6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+rpSBObyBOYW1lIPCfq6UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tLy9Sa1FxOG1nc1FZWUJTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9PcThNV0ltektvSjNJeng1WlNwN1lVSThNdnBWUGZrWnltWnhpMzRvbDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhJQk5TMDh4SWozV2szRGVISEhYa3FsY3kzSW9pV3JxbFlUVkpYREVTRXovM05FK0ZFU0RNMkZDaThBdDk2anZRTEJGc2JOVTRXcFVIZ1Bsamh4WUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvS243TFlmUGl5cFBZSG9jT3JvN3VzYlJ3NnMrUXREZVlYbWVSR2pTZEpodjJjWk5maTV4TTRBNVpUVEMwZExKT29SUUkvb2RJbjhZK3IxM2ZLRklEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNzkzODcxMTk6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGpxdkRGaUpzeXFDZHlNOGVXVXFlMkZDUERMNlZUMzVHY3BtY1l0K0tKZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMzkwNjg3MX0="
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
