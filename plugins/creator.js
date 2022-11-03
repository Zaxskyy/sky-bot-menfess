import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"displayName": "Kuro.id",
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;F;;;FN:F\nORG:F;\nTEL;type=CELL;type=VOICE;waid=62895347198105:+62 895-3471-98105\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Orang\nNICKNAME:👑 Owner Bot\nORG:Anu\nTITLE:soft\nitem1.TEL;waid=6285748600473:+62 857-4860-0473\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://lynk.id/kuroyama.com\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:kuro@bjork.ai\nitem3.X-ABLabel:💌 Mail Owner KuroBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 25 Mei 2005\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: q })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: q, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285748600473:+62 857-4860-0473\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: q })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 🥺`, `arifofc19@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://rifxz19.github.io/`, `👤 Gada pawang nih senggol dong 😔`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp 🐣`, `📵 Don't spam/call me 😢`, `Nothing`, `🇮🇩 Indonesia`, `🚀 https://lynk.id/kuroyama.com/`, `🤖 Hanya bot biasa yang kadang suka eror ☺`]
  ], q)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di culik ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler