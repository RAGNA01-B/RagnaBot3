let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `𝑀𝐸𝒩𝒮𝒜𝒥𝐸: ${pesan}`
  let teks = `ᴀᴄᴛɪᴠᴇɴꜱᴇ ʀɢ ʙᴏᴛ ʟᴏꜱ ɪɴᴠᴏᴄᴀ\n${oi}\n\nᴍᴏᴄʜᴏꜱ\n`
  for (let mem of participants) {
  teks += `🔥 @${mem.id.split('@')[0]}\n`}
  teks += `RagnaBot`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
  }
  handler.command = /^(|t|todos|inv)$/i
  handler.admin = true
  handler.group = true
  handler.botAdmin = true
  export default handler