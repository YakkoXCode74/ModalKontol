const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid
	} = require("@adiwajshing/baileys")
const byles = require("@adiwajshing/baileys")
	const os = require('os')
	const figlet = require('figlet')
const hx = require('hxz-api')
const chalk = require('chalk')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const { recognize } = require('./lib/ocr')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');	
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { h2k, generateMessageID, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const _scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const simple = require('./lib/simple.js')
const setGelud = require('./lib/gameGelud.js')
const { sendStickerFromUrl,sendMediaUrl, sendSticker, sendAudio, sendImage, sendVideo, sendContactArray, rejectIncomingCall, updateProfilePicture, copyNForward, cMod, genOrderMessage, waitEvent, sendImageAsSticker, sendMp4AsSticker, resend, sendContact, sendGroupV4Invite, prepareMessageMedia, getFile, sendFile, sendButton, sendButtonImg, send2ButtonImg, send3ButtonImg, send2Button, send3Button, fakeReply, fakeReply2, parseMention, getName, downloadM, serializeM, logic, generateProfilePicture, processTime, getRandom, getBuffer, fetchJson, fetchText, getGroupAdmins, runtime, clockString, sleep, getTime, formatDate, generateThumbnail, extractVideoThumb, delay, format, createExif, modStick, getBase64, webp2mp4File} = simple
const _sewa = require("./lib/sewa");
//DATABASE
const user = JSON.parse(fs.readFileSync('./database/user.json'))
//END DATABASE

// Kontak
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:YakkoXCode\n'
            + 'ORG:YakkoXCode•BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281949400586:+62 819-4940-0586\n'
            + 'END:VCARD'
// End Kontak

hit_today = []
ky_ttt = []
playing = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}
banChats = true
offline = false
targetpc = '6281949400586'
owner = '6281949400586'
fake = 'YakkoXCode•SELFBOT'
fx = '▢'
ban = []
numbernye = '0'
waktu = '-'
alasan = '-'
packname = 'punya'
author = 'YakkoXCode•TPX'
//=================================================//
module.exports = yoks = async (yoks, mek) => {
	try {
        if (!mek.hasNewMessage) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		global.blocked
		global.ky_ttt
		m = simple.smsg(yoks, mek)
yoks.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})
            let _scommand = JSON.parse(fs.readFileSync("./lib/scommand.json"));
            let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./lib/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
	    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = yoks.user.jid
		const date = new Date().toLocaleDateString()
		const botNumberss = yoks.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await yoks.chats.all()
		const groupMetadata = isGroup ? await yoks.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const ownerNumber = ["6281949400586@s.whatsapp.net"]
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isOwner = owner.includes(sender)
        const isUser = user.includes(sender)
        const isBanned = ban.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? yoks.user.jid : yoks.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? yoks.user.name : conts.notify || conts.vname || conts.name || '-' 
hit_today.push(command)
        ressButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
                
       ressList = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
     ///resList = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
          idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false            

    
        //MESS
		mess = {
			wait: 'Processing',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				usertpx: `Hai ${pushname}\nKamu Belum Terdaftar\nSilahkan Klik Dibawah\nAtau Ketik : ${prefix}daftar`,
				ownerB: '*Khusus Owner YakkoXCode•BOT*',
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
     const tag = (jid, nomer) => {
     	yoks.sendMessage(jid, `@${nomer}`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomer}@s.whatsapp.net`]}})
     }
     
        const reply = (teks) => {
            yoks.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            yoks.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? yoks.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : yoks.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []

        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []

if (m.mtype == 'viewOnceMessage'){
            message = {...mek}
            message.message = mek.message.viewOnceMessage.message
            message.message[Object.keys(message.message)[0]].viewOnce = false
            yoks.reply(yoks.user.jid, 'ViewOnce detected!', mek).then(() => yoks.forwardMessage(yoks.user.jid, message))
}
            const getGroup = async function(totalchat){
	let grup = []
	let ace = []
	let bec = []
	for (c of totalchat){
		ace.push(c.jid)
	}
	for (d of ace){
		if (d && d.includes('g.us')){
			bec.push(d)
		}
	}
	for (eek of bec){
		let ingfo = await yoks.groupMetadata(eek)
		grup.push(ingfo)
	}
	return grup
	}
	const sendHidetag = async function(id, message) {
					const gcx = await yoks.groupMetadata(id)
					const mememl = gcx['participants']
					const memelx = []
					mememl.map( async adm => {
					memelx.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					const bslx = {
					text: message,
					contextInfo: { mentionedJid: memelx }
					}
					yoks.sendMessage(id, bslx, text)
					}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './media/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './media/stik' + names + '.png'
                    let asw = './media/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        yoks.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    yoks.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
const fakestatus = (teks) => {
            yoks.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/stik/fake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            yoks.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/stik/thumb.jpeg'), fileLength : "99999999999", height : "1000", width: "714", quoted:mek,caption:yes})
        }
        const ftrolii = {key: {fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6281949400586-1604595598@g.us" }: {}) },message:{"orderMessage":{"orderId":"174238614569481","thumbnail": fs.readFileSync('./media/stik/menu.jpeg'),"itemCount":29,"status":"INQUIRY","surface":"CATALOG","message": fake,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}

        const fakegroup = (teks) => {
            yoks.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const freply = { 
                              key: { 
                             fromMe: false, 
                              participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                               }, 
                                 message: { 
                                      "imageMessage": { 
                                              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                                              "mimetype": "image/jpeg", 
                                              "caption": fake, 
                                              "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                                              "fileLength": "28777", 
                                              "height": 1080, 
                                              "width": 1079, 
                                              "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
                                              "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", 
                                              "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
                                              "mediaKeyTimestamp": "1610993486", 
                                              "jpegThumbnail": fs.readFileSync('./media/stik/fake.jpeg')
                                            } 
                                         } 
                                     }

           // Sewa
             _sewa.expiredCheck(yoks, sewa)

            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            yoks.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        yoks.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
              
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m├\x1b[1;37m>', '[\x1b[1;32mPRIVATE MSG\x1b[1;37m]', time, color(body, 'aqua'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m├\x1b[1;37m>', '[\x1b[1;32mGROUP MSG\x1b[1;37m]', time, color(body, 'aqua'), 'from', color(groupName), 'args :', color(args.length))
       if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281949400586@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281949400586@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

        if (!mek.key.fromMe && banChats === true) return
        if (budy.startsWith('=>')) {
try {
					let evaled = await eval(q)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(String(evaled))
				} catch (e) {
					console.log(e)
					reply(String(e))
}
		   }
        if (cmd === ("q")) {
    if (!m.quoted) return reply('reply pesan!')
    let rii = yoks.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await rii.quoted.copyNForward(m.chat, true)
    }  
         if (ressButton == 'source'){
         	suww = `Srcript Free : https://github.com/Hexagonz/SELF-HX`
         	reply(suww)
         }         
         if (cmd === ("del")) {
				yoks.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				}
switch (command) {
	case 'test':
	fakestatus( 'Online')
	break
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,yoks,from)
    break
    case 'stopjadibot':
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    if (!isUser) return reply(mess.only.usertpx)
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'menu':
case 'help':
    try {
     menu = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</LIST MENU>*
► _${prefix}ownermenu
► _${prefix}makermenu
► _${prefix}convertmenu
► _${prefix}funmenu
► _${prefix}tagmenu
► _${prefix}downloadmenu
► _${prefix}othermenu
► _${prefix}jadibotmenu
► _${prefix}votemenu
► _${prefix}nulismenu
► _${prefix}groupmenu

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menu, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🔸DEVELOPER', `${prefix}owner`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menu, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break
        case 'allmenu':
    try {
     allmenu = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</OWNER>*
► _${prefix}off_
► _${prefix}on_
► _${prefix}status_
► _${prefix}getgroup_
► _${prefix}setpp_

*</MAKER>*
► _${prefix}sticker_
► _${prefix}swm_ <author|packname>
► _${prefix}take_ <author|packname>
► _${prefix}fdeface_
► _${prefix}emoji_
► _${prefix}nulis_

*</CONVERT>*
► _${prefix}toimg_
► _${prefix}tomp3_
► _${prefix}tomp4_
► _${prefix}slow_
► _${prefix}fast_
► _${prefix}reverse_
► _${prefix}tourl_
► _${prefix}once_ <reply image/video>
► _${prefix}ocr_

*</UP STORY>*
► _${prefix}upswteks_
► _${prefix}upswimage_
► _${prefix}upswvideo_

*</FUN>*
► _${prefix}fitnah_
► _${prefix}kontak_
► _${prefix}gelud_
► _${prefix}delgelud_
► _${prefix}suit_
► _${prefix}ttt <@tagLawan>_
► _${prefix}tictactoe <@tagLawan>_
► _${prefix}delttt_

*</TAG>*
► _${prefix}hidetag_
► _${prefix}kontag_
► _${prefix}sticktag_
► _${prefix}totag_

*</DOWNLOAD>*
► _${prefix}ytsearch_ <query>
► _${prefix}ytdl_ <query>
► _${prefix}igstalk_ <query>
► _${prefix}play_ <query>
► _${prefix}play2 <query>
► _${prefix}ytmp3_ <link>
► _${prefix}ytmp4_ <link>
► _${prefix}ytmp4hd_ <link>
► _${prefix}ig_ <link>
► _${prefix}igstory_ <username>
► _${prefix}twitter_ <link>
► _${prefix}tiktok_ <link>
► _${prefix}tiktokaudio_ <link>
► _${prefix}fb_ <link>
► _${prefix}brainly_ <query>
► _${prefix}image_ <query>
► _${prefix}pinterest_ <query>
► _${prefix}komiku_ <query>
► _${prefix}lirik_ <query>
► _${prefix}chara_ <query>
► _${prefix}playstore_ <query>
► _${prefix}otaku_ <query>
► _${prefix}anime_ <random>
► _${prefix}waifu_ <random>
► _${prefix}loli_ <random>
► _${prefix}husbu_ <random>

*</OTHER>*
► _${prefix}self_
► _${prefix}public_
► _${prefix}setthumb_
► _${prefix}setfake_
► _${prefix}setreply_
► _${prefix}ping_
► _${prefix}speed_
► _${prefix}inspect_
► _${prefix}join_
► _${prefix}caripesan_ <query>
► _${prefix}get_
► _${prefix}term_ <code>
► _${prefix}saveimg_ <reply image + FileName>
► _${prefix}savevid_ <reply video + FileName>
► _ev_ <code>
► _>_ <code>
► _=>_ <code>

*</JADI BOT>*
► _${prefix}jadibot_
► _${prefix}stopjadibot_
► _${prefix}listbot_

*</VOTE>*
► _${prefix}voting_
► _${prefix}delvote_
► _vote_
► _devote_

*</NULIS>*
► _${prefix}nulis_
► _${prefix}nuliskiri_
► _${prefix}nuliskanan_
► _${prefix}foliokiri_
► _${prefix}foliokanan_

*</GROUP>*
► _${prefix}kick_ <@tagmember>
► _${prefix}kick2_ <reply teks member>
► _${prefix}add_ <628××××××××××>
► _${prefix}add2_ <reply teks member>

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, allmenu, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, allmenu, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'menuowner':
case 'ownermenu':
    try {
     menuowner = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</OWNER MENU>*
► _${prefix}off_
► _${prefix}on_
► _${prefix}status_
► _${prefix}self_
► _${prefix}public_
► _${prefix}setthumb_
► _${prefix}setfake_
► _${prefix}setreply_
► _${prefix}inspect_
► _${prefix}join_
► _${prefix}get_
► _${prefix}getgroup_
► _${prefix}setpp_
► _${prefix}upswteks_
► _${prefix}upswimage_
► _${prefix}upswvideo_
► _${prefix}kontak_
► _${prefix}term_ <code>
► _ev_ <code>
► _>_ <code>
► _=>_ <code>

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menuowner, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menuowner, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'makermenu':
case 'menumaker':
    try {
     menumaker = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</MAKER MENU>*
► _${prefix}sticker_
► _${prefix}swm_ <author|packname>
► _${prefix}take_ <author|packname>
► _${prefix}fdeface_
► _${prefix}emoji_
► _${prefix}nulis_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menumaker, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menumaker, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break
           	
case 'convertmenu':
case 'menuconvert':
    try {
     menuconvert = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</CONVERT MENU>*
► _${prefix}toimg_
► _${prefix}tomp3_
► _${prefix}tomp4_
► _${prefix}slow_
► _${prefix}fast_
► _${prefix}reverse_
► _${prefix}tourl_
► _${prefix}once_ <reply image/video>
► _${prefix}ocr_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menuconvert, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menuconvert, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'funmenu':
case 'menufun':
    try {
     menufun = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</FUN MENU>*
► _${prefix}fitnah_
► _${prefix}gelud_
► _${prefix}delgelud_
► _${prefix}suit_
► _${prefix}ttt <@tagLawan>_
► _${prefix}tictactoe <@tagLawan>_
► _${prefix}delttt_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menufun, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menufun, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'tagmenu':
case 'menutag':
    try {
     menutag = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</TAG MENU>*
► _${prefix}hidetag_
► _${prefix}kontag_
► _${prefix}sticktag_
► _${prefix}totag_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menutag, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menutag, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'downloadmenu':
case 'menudownload':
    try {
     menudownload = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</DOWNLOAD MENU>*
► _${prefix}ytsearch_ <query>
► _${prefix}ytdl_ <query>
► _${prefix}igstalk_ <query>
► _${prefix}play_ <query>
► _${prefix}play2 <query>
► _${prefix}ytmp3_ <link>
► _${prefix}ytmp4_ <link>
► _${prefix}ytmp4hd_ <link>
► _${prefix}ig_ <link>
► _${prefix}igstory_ <username>
► _${prefix}twitter_ <link>
► _${prefix}tiktok_ <link>
► _${prefix}tiktokaudio_ <link>
► _${prefix}fb_ <link>
► _${prefix}brainly_ <query>
► _${prefix}image_ <query>
► _${prefix}pinterest_ <query>
► _${prefix}komiku_ <query>
► _${prefix}lirik_ <query>
► _${prefix}chara_ <query>
► _${prefix}playstore_ <query>
► _${prefix}otaku_ <query>
► _${prefix}anime_ <random>
► _${prefix}waifu_ <random>
► _${prefix}loli_ <random>
► _${prefix}husbu_ <random>

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menudownload, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menudownload, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break
           	
case 'othermenu':
case 'menuother':
    try {
     menuother = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</OTHER>*

► _${prefix}ping_
► _${prefix}speed_
► _${prefix}caripesan_ <query>
► _${prefix}saveimg_ <reply image + FileName>
► _${prefix}savevid_ <reply video + FileName>

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menuother, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menuother, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break


case 'jadibotmenu':
case 'menujadibot':
    try {
     menujadibot = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</JADI BOT MENU>*
► _${prefix}jadibot_
► _${prefix}stopjadibot_
► _${prefix}listbot_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menujadibot, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menujadibot, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'votemenu':
case 'menuvote':
    try {
     menuvote = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</VOTE MENU>*
► _${prefix}voting_
► _${prefix}delvote_
► _vote_
► _devote_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menuvote, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menuvote, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'nulismenu':
case 'menunulis':
    try {
     menunulis = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</NULIS>*
► _${prefix}nulis_
► _${prefix}nuliskiri_
► _${prefix}nuliskanan_
► _${prefix}foliokiri_
► _${prefix}foliokanan_

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menunulis, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menunulis, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

case 'groupmenu':
case 'menugroup':
    try {
     menugroup = `Hai ${pushname}
Prefix : ${prefix}
Hit Today : *${hit_today.length}*

*</GROUP MENU>*
► _${prefix}kick_ <@tagmember>
► _${prefix}kick2_ <reply teks member>
► _${prefix}add_ <628××××××××××>
► _${prefix}add2_ <reply teks member>

❏ *YakkoXCode•SELFBOT* ❏`
        await yoks.send2ButtonImg(from, menugroup, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, 'BACK TO MAIN MENU', `${prefix}allmenu`, '⏳Test Speed', `${prefix}speed`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menugroup, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '🛡️ REGISTER', `${prefix}daftar`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[1].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break

           case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = yoks.contacts[i] != undefined ? yoks.contacts[i].vname || yoks.contacts[i].notify : undefined
inilist.push({
"displayName": 'YakkoXCode•TPX',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${yoks.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await yoks.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek })
button = [
  {buttonId: '📒 SEWA BOT', buttonText: {displayText: '📒 SEWA BOT'}, type: 1},
  {buttonId: '📄 SCRIPT BOT', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1},
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `Created By YakkoXCode•TPX`,
    buttons: button,
    headerType: 1
}
await yoks.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: hehe})
break
           
           case 'daftar':
					yoks.updatePresence(from, Presence.composing)
					if (isUser) return reply('*Kamu Sudah Jadi User fake*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/user.json', JSON.stringify(user))
					try {
               captionnya = `╭─𖧹「 *PENDAFTARAN* 」\n┴𖧹\n${fx} Pada ${date} ${time}\n${fx} Nama : ${pushname}\n${fx} Nomer : wa.me/${sender.split('@')[0]}\n${fx} Total User : ${user.length} Orang\n┬𖧹\n╰───────𖧹`
               daftarimg = await getBuffer(ppimg)
					imgnya = await yoks.prepareMessage(from, daftarimg, image, {thumbnail: daftarimg})
                      await yoks.send2ButtonImg(from, captionnya, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '📄 LIST MENU', `${prefix}ping`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
        } catch (e) {
	if (e.toString().includes('marker was not found')) return yoks.send2ButtonImg(from, menu, fs.readFileSync(`./media/stik/menu.jpeg`), `YakkoXCode•BOT by @${owner}`, '📄 LIST MENU', `${prefix}menu`, '⏳RUNTIME', `${prefix}runtime`, { quoted: freply, contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`]}})
       return e
}
           	break

    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    yoks.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    yoks.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await yoks.searchMessages(q,from,10,1)
            let se = v.messages
            let el = se.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await yoks.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            yoks.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara itsuki`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await yoks.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await yoks.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus( ' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus( `*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus( ' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'kontag':
            if (!mek.key.fromMe) return reply('YakkoXCode•SELFBOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            yoks.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            yoks.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup( `Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await yoks.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await yoks.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup( 'Reply videonya!')
            fakegroup( mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await yoks.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup( `Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            yoks.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup( 'Reply videonya!')
            fakegroup( mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await yoks.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup( `Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            yoks.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup( 'Reply videonya!')
            fakegroup( mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await yoks.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup( `Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            yoks.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup( 'Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await yoks.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup( `Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            yoks.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            yoks.send2ButtonImg(from, 'klik NEXT untuk ke gambar selanjutnya' ,media, 'RANDOM ANIME IMAGE', ' ➡️NEXT', `${prefix}anime`, '🔗SOURCE', 'source')
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            yoks.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
    		if (args[0] && /https?:\/\//.test(args[0])) return yoks.sendSticker(m.chat, args[0], packname, author, m)
json = m.quoted ? m.quoted : m
if (!/image|video/.test(json.mtype)) return m.reply(`Balas Video/Gambar dengan caption *${prefix + command}*!`)
yoks.sendSticker(m.chat, await json.download(), packname, author, m)
break
case 'swm':
    case 'stickwm':
anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : packname
            dua = typeof anu[1] !== 'undefined' ? anu[1] : author
    		if (args[0] && /https?:\/\//.test(args[0])) return yoks.sendSticker(m.chat, await json.download(), satu, dua, m)
json = m.quoted ? m.quoted : m
if (!/image|video/.test(json.mtype)) return m.reply(`Balas Video/Gambar dengan caption *${prefix + command}*!`)
yoks.sendSticker(m.chat, await json.download(), satu, dua, m)
break
    case 'upswteks':
    case 'upswtxt':
            if (!q) return fakestatus( 'Isi teksnya!')
            yoks.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup( `Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
    case 'upswimg':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await yoks.downloadMediaMessage(swsw)
            yoks.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            yoks.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus( 'Reply gambarnya!')
            }
            break
    case 'upswvideo':
    case 'upswvid':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await yoks.downloadMediaMessage(swsw)
            yoks.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            yoks.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus( 'reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await yoks.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await yoks.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		yoks.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus( 'YakkoXCode•SELFBOT')
          	if (banChats === false) return
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus( `「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus( 'YakkoXCode•SELFBOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus( `「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await yoks.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			yoks.sendMessage(from, optionshidetag, text)
			break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return yoks.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrolii })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
yoks.sendMessage(`6281949400586@s.whatsapp.net`, options, text, { quoted: ftrolii })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
	case 'play':
	reply(mess.wait)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            abuu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=a945b6f40c36eb870252c5eb&query=${q}`)
                        var captions = `*PLAY MUSIC*\n\n*Title* : ${abuu.result.info.title}\n*Size* : ${abuu.result.audio.size}\n*Channel* : ${abuu.result.info.channel}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        thumbnail = getBuffer(abuu.result.info.thumbnail)
                        yoks.send2ButtonImg(from, captions, thumbnail, 'YouTube Music', '🎼AUDIO', `${prefix}sendmedia ${abuu.result.audio.link}`, '🎥VIDEO', `${prefix}sendmedia ${abuu.result.video.link}`)
                   break  
                   case 'sendmedia':
                   fakestatus( 'Mengirim!')
                   uer = q
                   sendMediaURL(from, uer, 'Sukses')
                   break
                   case 'play2':
reply(mess.wait)
if (!q) return reply(`Example : ${prefix + command} dj tutu 30 detik`)
res = await yts(q).catch(e => {
reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
})
let thumbinfo = `*Youtube Play▶️*
               
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}`
yoks.send2Button(from,thumbinfo,'Silahkan Pilih Tipe nya!','MUSIC',`${prefix}buttonmusic ${res.all[0].url}`,'VIDEO',`${prefix}buttonvideo ${res.all[0].url}`,{quoted: mek})
break
case 'buttonmusic':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await yta(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Audio_')
})
sendMediaURL(from, `${res.dl_link}`)
break
case 'buttonvideo':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await ytv(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Video_')
})
sendMediaURL(from, `${res.dl_link}`,'nih kak')
break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await yoks.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			yoks.sendMessage(from, buffer, image, { quoted: mek, thumbnail: buffer, caption: 'Sukses'})
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await yoks.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *YakkoXCode•SELFBOT*'
    		await fakethumb( tbuff,ytresult)
			break
	case 'setreply':
			if (!q) return fakegroup( mess.wrongFormat)
			fake = q
			fakegroup( `Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfake':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await yoks.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/stik/fake.jpeg`, delb)
			fakestatus( 'Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await yoks.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/stik/thumb.jpeg`, delb)
			fakegroup( 'Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 25000) return sendMediaURL(from, thumb, `*Ytmp4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup( 'emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 25000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*Ytmp3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
                yoks.sendMessage(from, { url: dl_link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: mek, contextInfo: { externalAdReply: { title: title, mediaType: 2, thumbnailUrl: thumb, mediaUrl: q }}})
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            yoks.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		reply(`Short url : ${a.data}\n\nLong url : ${nowm}`)
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup( 'Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			yoks.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup( 'Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    yoks.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    yoks.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup( 'Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
	        if (!isOwner & !mek.key.fromMe) return fakereply(mess.only.ownerB)
			if (!q) return fakegroup( mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup( `${err}`)
			if (stdout) {
			fakegroup( stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus( 'Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await yoks.acceptInvite(codeInvite)
            fakestatus( 'SUKSES')
            } catch {
            fakegroup( 'LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup( 'Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${runtime(run)}`
            fakegroup( teks)
            break  
	case 'ping':
      case 'p':
      case 'stat':
      ap = process.uptime()
let totalchate = await yoks.chats.all()
				let asw = []
				let giid = []
				for (let mem of totalchate){
					asw.push(mem.jid)
				}
				for (let id of asw){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = yoks.user.phone
pinghaha =
 `「 *STATUS WHATSAPP* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchate.length - giid.length}
• Total Chats: ${totalchate.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
• Runtime: ${runtime(ap)}

「 *STATUS PHONE* 」

• Battery: ${baterai.battery} => ${baterai.isCharge === 'true' ? '_Sedang Di Cas ⚡_' : '_Tidak Di Cas ❌_'}
• Whatsapp version : ${wa_version}
• cc: ${mcc}
• mnc: ${mnc}
• OS_version: ${os_version}
• Device_manufacturer: ${device_manufacturer}
• Device_model: ${device_model}
• Runtime: ${runtime(os.uptime())}

*Speed* > ${latensii.toFixed(4)} Second!`
fakestatus( pinghaha)
break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await yoks.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await yoks.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            yoks.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await yoks.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await yoks.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await yoks.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             yoks.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
             case 'waifu':
              let ewwwa = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)).data
              let waaifu = ewwwa[Math.floor(Math.random() * (ewwwa.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(waaifu))
		      buttons = [{buttonId: `${prefix}${command}`, buttonText:{displayText: `➡️Next`},type:1},{buttonId:'source',buttonText:{displayText:'🔗 SOURCE'},type:1}]
              imageMsg = ( await yoks.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Waifu Gw Nih 🗿', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
              prep = await yoks.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              yoks.relayWAMessage(prep, {waitForAck: true})
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'loli':
              let loooll = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
              let lwol = loooll[Math.floor(Math.random() * (loooll.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(lwol))
		      buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:'source',buttonText:{displayText:'🔗 SOURCE'},type:1}]
              imageMsg = ( await yoks.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'FBI Open Up 🗿', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
              prep = await yoks.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              yoks.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'husbu':
              let hwes = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
              let hewes = hwes[Math.floor(Math.random() * (hwes.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(hewes))
		      buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:'source',buttonText:{displayText:'🔗 SOURCE'},type:1}]
              imageMsg = ( await yoks.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Husbu Gw Nih 🗿', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
              prep = await yoks.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              yoks.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              case 'addcmd':
      case "setcmd":
      if (!mek.key.fromMe) return reply('Owner Only')
        if (isQuotedSticker) {
          console.log(color(`[ ${command} ]`, 'cyan'))
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus( "Done!");
        } else {
          reply("tag stickenya");
        }
        break; 
      case 'delcmd':
      if (!mek.key.fromMe) return reply('Owner Only')
        if (!isQuotedSticker)
          console.log(color(`[ ${command} ]`, 'cyan'))
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./lib/scommand.json", JSON.stringify(_scommand));
        fakestatus( "Done!");
        break;
      case 'listcmd':
      console.log(color(`[ ${command} ]`, 'cyan'))
        teksnyee = '「 LIST STICKER CMD 」';
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              yoks.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

@${player1.split('@')[0]} Menantang anda untuk menjadi lawan Game🔥

@${player2.split('@')[0]} Ketik Y/N untuk menerima atau menolak permainan

NOTE : Ketik ${prefix}delttt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {quoted:mek, contextInfo: {mentionedJid: [player2, player1]}})
              break
               case 'send':
if(!mek.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(mek.quoted.sender , q)
break
case 'spam':
              if (!mek.key.fromMe) return fakestatus( 'ONLY OWNER ')
              spamm = body.slice(6)
	        if (!args) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
	yoks.setMaxListeners(50)
	        argz = spamm.split("|")
		if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
	        for (let i = 0; i < argz[1]; i++){
                yoks.sendMessage(from, argz[0], MessageType.text)
		}
	        break
        case 'fetch': 
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
               case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus( bu)
            })   
            break
			case 'kick2':
                if (!isGroup) return reply('```Only group```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!') 
                kicknya = mek.message.extendedTextMessage.contextInfo.participant
		    yoks.groupRemove(from, [kicknya])
		    reply('Sayonara')
			break
case 'demote':
if (!mek.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot not admin')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
yoks.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
yoks.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
case 'kick1':
					if (isBanned) return fakereply(mess.only.benned)    
			        if (!isUser) return fakereply(mess.only.usertpx)
					if (!isGroup) return grupinv(mess.only.group)
					if (!isGroupAdmins) return fakereply(mess.only.admin)
					if (!isBotGroupAdmins) return fakereply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					yoks.groupRemove(from, mentioned)
					}
					break
            case 'kick':
				var mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedd.length > 1) {
					teks = ''
					for (let _ of mentionedd) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentionedd, true)
					yoks.groupRemove(from, mentionedd)
					} else {
					reply('Tag orang yang mau di kick')
					}
                break
                case 'add2':
                if (!isGroup) return reply('```Only group```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                addnya = mek.message.extendedTextMessage.contextInfo.participant
		    await yoks.groupAdd(from, [addnya])
		    reply('welcome')
                break
            case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner & !mek.key.fromMe & !isGroupAdmins) return reply('Bot bukan admin')
					if (!isBotGroupAdmins) return reply(mess.badmin)
					if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						yoks.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'suit':
                    if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
                        if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
                        if (q.match(/batu|gunting|kertas/)) {
                            await sleep(2000)
                            var computer = Math.random();
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }
                            if (q == computer) {
                                reply(`*RESULT*\n\nPertandingan Seri!`)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
                        }
                    break
case 'gelud':
if (!isGroup) return reply(mess.only.group)

					if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
					if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
                     if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
					if (fs.existsSync(`./lib/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delgelud*, untuk menghapus sesi`)
					
					gelutSkuy = setGelud(`${from}`)
					gelutSkuy.status = false
					gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
					gelutSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
					starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

					yoks.sendMessage(from, starGame, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
					break
					
					case 'delgelud':
if (!isGroup) return reply('HARUS DI GROUP')
					if (fs.existsSync('./lib/' + from + '.json')) {
						fs.unlinkSync('./lib/' + from + '.json')
						reply('Berhasil Menghapus Sesi Gelud')
					} else {
						reply('Tidak ada sesi yang berlangsung')
					}
					break
					case 'getg':
					case 'getgroup':
					case 'getgrup':
					case 'getgrub':
const ingfo = await getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				fakegroup( txt)
					break
					case 'ytdl':
					if(body == "") return reply(`Kirim perintah *${prefix}youtubedl [ query ]*\nContoh : ${prefix}youtubedl Kaikai kitan`)
            reply(mess.wait)
			axios.get(`https://api.zeks.me/api/yts?apikey=SQJ0WKiCgU7U1N2jUNC7GWoLfQ8&q=${q}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return reply(xres.message)
			secs = []
			xres.data.result.splice(15, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${prefix}buttonmusic ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${prefix}buttonvideo ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = yoks.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "*YOUTUBE DOWNLOAD*",
                  "description": `\n*Result for : ${q}*\n*Download MP3 untuk audio MP4 untuk video*`,
                  "buttonText": "🔍Result",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            yoks.relayWAMessage(po, {waitForAck: true})	
			})
        break
        case 'once':
        case 'viewonce':
        fakestatus( 'Converting!')
            if ( isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const omce = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            once = await yoks.downloadMediaMessage(omce)
            yoks.sendMessage(from, once, image, { viewOnce : true})
            } else if (isQuotedVideo) {
            	const omce2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            once2 = await yoks.downloadMediaMessage(omce2)
            yoks.sendMessage(from, once2, video, { viewOnce : true})
            } else {
            fakestatus( 'Reply image/video!!')
            }
            break
             case 'saveimg':
         try {
         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
         owgi = await yoks.downloadAndSaveMediaMessage(ger, `../storage/downloads/${args.join(' ')}`)
         reply('Berhasil menyimpan file di folder Downloads')
         } catch (f) {
         reply('gagal kak!')
         yoks.logger.error(f)
         }
					break
					case 'savevid':
         try {
         ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
         owgi = await yoks.downloadAndSaveMediaMessage(ger, `../storage/downloads/${args.join(' ')}`)
         reply('Berhasil menyimpan file di folder Downloads')
         } catch (f) {
         reply('gagal kak!')
         yoks.logger.error(f)
         }
					break
					case 'nulis':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case 'nuliskiri':
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const kiri = q
                const textKiri = kiri.replace(/(\S+\s*){1,9}/g, '$&\n')
                const nulsKiri = textKiri.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    nulsKiri,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    yoks.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Sukses`})
                })
                break
            case 'nuliskanan':
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const kanan = q
                const textKanan = kanan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const nulsKanan = textKanan.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    nulsKanan,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    yoks.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: mek, caption: `Sukses`})
                })
            
                break
            case 'foliokiri':
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const foKiri = q
                const foliKiri = foKiri.replace(/(\S+\s*){1,13}/g, '$&\n')
                const folKiri = foliKiri.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    folKiri,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    yoks.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Sukses`})
          
                })
            
                break
            case 'foliokanan':
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const foKanan = q
                const foliKanan = foKanan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const folKanan = foKanan.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    folKanan,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    yoks.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Sukses`})
                
                })
                break

case 'comic':
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foooliokanan* teks`)
                reply(mess.wait)
                const foooKanan = q
                const foooliKanan = foooKanan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fooolKanan = foooKanan.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/sia/Stanberry.ttf',
                    '-size',
                    '1280x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '12',
                    '-annotate',
                    '+89+190',
                    fooolKanan,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    yoks.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Sukses`})
                
                })
                break
case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await yoks.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Reply gambar')
					}
					break
            default:
            
if (fs.existsSync(`./lib/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@]s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 


Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   yoks.sendMessage(from, starGame, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./lib/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		yoks.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, MessageType.text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./lib/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*
Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕
Giliran = @${tty.player1.split('@')[0]}
   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  yoks.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
yoks.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted: mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲
*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*
*Hasil Akhir:*
${ttt}`
yoks.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*
*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*
*Hasil Akhir:*
${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*
Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌
Giliran = @${tty.player2.split('@')[0]}
${ttt}`
 yoks.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*
Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe ??*
*Hasil Akhir:*
${ttt}`
yoks.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*
*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*
*Hasil Akhir:*
${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*
Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌
   
Giliran = @${tty.player1.split('@')[0]}
${ttt}`
 yoks.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
if (budy.startsWith('>')){
try {
return yoks.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[MESSAGE]', 'blue'), 'FROM -', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}



    
