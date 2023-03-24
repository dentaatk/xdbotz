const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281210944252'] // no own
global.author = '𝕲𝖔𝖒𝕭𝖑𝖔𝖍' // nama author 
global.packname = '𝖌𝖆𝖐 𝖙𝖆𝖚 𝖒𝖆𝖚 𝖇𝖎𝖐𝖎𝖓 𝖆𝖕𝖆 𝖍𝖒' // nama pack sticker
global.namabot = 'My Bot' // nama bot mu
global.group = 'https://chat.whatsapp.com/C0LWU0L1RRFHpSOkBiYezf' // grup mu
global.pic = 'https://telegra.ph/file/de8653f58dd342b973e2e.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
