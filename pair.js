const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Malvin_King,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function MALVIN_KING_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Malvin_King = Malvin_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Malvin_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Malvin_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Malvin_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_Malvin_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Malvin_King.sendMessage(Pair_Code_By_Malvin_King.user.id, { text: '' + b64data });

               let MALVIN_KING_TEXT = `
┏━━━━━━━━━━━━━━
┃RED SAMURAY ALL SESSION IS 📥
┃SUCCESSFULLYB 🐉
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🏮 || Creator = 𖥘⚡ ᴍᴀʟᴠɪɴ-ᴋɪɴɢ ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🏮 || IMG URL = https://i.ibb.co/pBzQ8C8c/85c386b2f75a0894.jpg
🏮 || 2025 & 2099 COMING TO MY RED SAMURAY BOT 10.V👋
🏮 || WEBSITE COMING ZOON⛩️
🏮 || ENJOY OLD LEGENDARY TEM BOT🚀
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🏮 || Telegram = https://t.me/legionofdoom999
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🏮 || 𝚆𝙰 𝙲𝙷𝙴𝙽𝙽𝙰𝙻 = https://whatsapp.com/channel/0029Vb0pFMeGOj9r28xCQJ0w
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🏮 || 𝚆𝙰 𝙶𝚁𝙾𝚄𝙿 = https://chat.whatsapp.com/JKS3WWDAxht9aYsZJ4jX9I 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ⛩️ ©2024-2099 𝚁𝙴𝙳 𝚂𝙰𝙼𝚄𝚁𝙰𝚈 𝙾𝙻𝙳⛩️`
 await Pair_Code_By_Malvin_King.sendMessage(Pair_Code_By_Malvin_King.user.id,{text:MALVIN_KING_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Malvin_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MALVIN_KING_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await MALVIN_KING_PAIR_CODE()
});
module.exports = router
