const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "254757725656";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVB3T0JpRFdwN0RjNVJPajQ5TmRDMnEwUElwampPWnVoWHJKV21WSExsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDd3NW5NVWZ3T1E4RzU2UmpRblFhZWpiNFF1czVWVm5MMnE5aFFyTHREMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSGEwQU5xdTA5TDFXOVp6UUJFV2l3bjk3QlhyNlBxTEdUM2lxQmZYeldFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQm9qczhhRXI4YUo1NTdqa212QzBNSjlxY3pMNHhTWVovcnY0NEhGNFY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNMGo3ODIrSW5YM3lKYzJPblNuUDdHTmYwR3hRdTBRTGJRWCtreDFEMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFWQlVISkpxNGVmTktBZm5BbmtwOWlwSDhqVDBnbXY2cU1iL2h3cElRV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1mWWpMTkc5Y2dkeUdtWjlwVCtlMlJRMEVyVzUvaFNGQTVzUjBTUDczdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXNtS2dJNEdEYUlPQ09tSHZHVGxGMnJkazRYVnRGcGR1ek16VUplN2FrND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9UQnRiOTNKTXFDeWNqK2tVWWxIYzJsT2pQUzcrZzBKNE8zK2FsZm1oaWc1bTJVL1hZRjJCNU83OUhvNFVOMlpUU0xVaDVzc3ozYUJJT2NmRnpsbURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6ImQ4UTBoT2t3UGJsUDR3UitWUit3dHlsUHhKckNkQ1dnaEsweHhwdTAydlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU3NzI1NjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDNUZFM0Y3QkRERjczMTc1MEZBNEU2ODU2RjJBQzJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzcxMTYzNDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNJRGd6Yy01U0RTS0swYlQtZGdmLXciLCJwaG9uZUlkIjoiOWUzOThiZGEtZTExNS00NzhkLThiOWUtMDA0MmFiZjk1ZjQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF0WVRnWExJUDlKZkIzWTJXckVCVk4yR3lTMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQnRLOUx0UFZ1RE05Y0NuZEpQMVdCK1B5dW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVzJZOVE3Wk0iLCJtZSI6eyJpZCI6IjI1NDc1NzcyNTY1NjoxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnlVeE1NRUVLYVZxYndHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWUEzS0Uya0o2VloyNC9Ydi9vYkl2VGNGQTYzN1BSc25uSmpBa2x4TDEwWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiekwrUkNvM202dHIrc1ZNeE84UkthRThLaVcxdGdIeWVWTy9kem9JU2FCeXdLWk12eU0vM3hOWGlIbktrY0JUMnRTVENBT0xzWkhMdXBEaEVOcVg1QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9HK05zaFdVMmI4Q1lxVTZoR3Fsb0txYmxrRUZUNlc4UlBVTDhDMGlqVFJSWCtCNVVaNFlKYUZQWHNvT3F0OG9reVpLWnFzMHdlQ1pYSElTeEJ6S0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3NzI1NjU2OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldBTnloTnBDZWxXZHVQMTcvNkd5TDAzQlFPdCt6MGJKNXlZd0pKY1M5ZEcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcxMTYzMzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWhZIn0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "★DRACO★",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
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
