//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "+447443012419";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dFSGtyN3JuOFFPNDZtc24rK050V240Z3VxWmY0aUFIMFlHamR6ckRuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXRCSU9aRkZ0THBnVXFwQnJ0dDZ2SEFmRmdMaXNheElzSXhyTXRhYjluRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQVdFUDA0VC9jRlU1RTQ5dzFJT0YrL21iV1M0SkhjZTMxZi81R0J5N1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYzZZV3VqZGJUaTZ1d1ZpTjFBTHM0M3JMS1piWUpGSVRMK2dIRWdaN1M0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFaU5IUHRLVXIwV3M2a1pTSGdrcEora3RQV0pwczVNNmdSY0FOWlYrMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxHdUU4SkNlVjJYcTFiNjlsTFYyaEVuYUNhRCtHekxMRU5ZUWxSaElWa2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUc4SElKb3ZWeWs3MXpta1U3eHVvb2VzUHF3eXdKL2Z5YWpxbWM0TWVYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXRUTTNKeVZUU0JZKzFzRm9nVHdiU3VqZDJ5YVJBMk44ai9YNUxZL2hUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCSjQ3aWZvMTRRRmZuZE1CUExRWllZZjFmNk1NMGo1ZkZrM3lCTTBxZ2xLcTJPZXZsNDhVTXlTRnJlSUNBemo4bk5vMjVjNVNTcHJjd1VTVnNxQkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJlM0Q5cVMyODJDNlduV042amdIQi9HKzUva2JzVTkweHgvdkNmaXZUM2ljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0VVFQaDR3TVRTaTVNUEF5aFFDbjNnIiwicGhvbmVJZCI6IjhiYTQ0OTg5LTMxZGYtNDMzMS1iMDZiLTEyNjhkMDljMGE1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMmVzMGd0N0hQM1hmcXNHN0ZXNkVOMmVZVTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHpUb1liK04wS2FZOHVrbUVHbkpVYTJBQXdvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRXTDZESDkyIiwibWUiOnsiaWQiOiI0NDc0NDMwMTI0MTk6NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG1yeEpvQ0VQSDc0cmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkJaaWZzd21DSVpFYUVWajc1NjBjc2gvcjlPaWMyeEkyVTBML0JTUzZ3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWXgvbjlqWlgyK2VZSVlyLzNIRlVwRHM5d010OXpjdFFReFdrUWpNR0xDRDdiNmFSc2dPSTFBZzgwVFlObTVpV29PZUJBV0VkTU1hSENjckJROE5WaEE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRZd1VhUmhHUnVNWmF5dk9lQzBUQVFGUXN0TU1mWThUbFIwVENIcWJ5WUtNY2MyYjhsUi92eG5CL0lsY3NBQ2tBbFJvc0psWU5xRUFHaHplOTJHUERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3NDQzMDEyNDE5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWndXWW43TUpnaUdSR2hGWSsrZXRITElmNi9Ub25Oc1NObE5DL3dVa3VzSSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNzcxOTAyfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "olasukanmi",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
