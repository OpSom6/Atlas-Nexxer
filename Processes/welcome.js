const { mk } = require("../Database/dataschema.js");
require("../Core.js");

module.exports = async (Miku, anu) => {
  try {
    let metadata = await Miku.groupMetadata(anu.id);
    let participants = anu.participants;
    let desc = metadata.desc;
    if (desc == undefined) desc = "No Description";

    for (let num of participants) {
      try {
        ppuser = await Miku.profilePictureUrl(num, "image");
      } catch {
        ppuser = botImage4;
      }

      if (anu.action == "add") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Joined/Got Added in: ${
            metadata.subject
          }\n`
        );
        mikutext = `𝐇𝐞𝐥𝐥𝐨 @${WAuserName.split("@")[0]} 𝐒𝐞𝐧𝐩𝐚𝐢, 𝐈'𝐦 𝐌𝐢𝐤𝐮 𝐍𝐚𝐤𝐚𝐧𝐨✨

╔═════════ ≪ °❈° ≫ ════════╗

*𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐧* : *${metadata.subject}*

╚═════════ ≪ °❈° ≫ ════════╝

*🧣 Ｇ𝚁𝙾𝚄𝙿 Ｄ𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 🧣*

${desc}

*𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮.*
`;
        if (WelcomeFeature == "true") {
          Miku.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: mikutext,
            mentions: [num],
          });
        }
      } else if (anu.action == "remove") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Left/Got Removed from: ${
            metadata.subject
          }\n`
        );
        mikutext = `@${WAuserName.split("@")[0]} *𝚂𝚎𝚗𝚙𝚊𝚒 𝙻𝚎𝚏𝚝 𝚃𝚑𝚎* *${metadata.subject}*.

  *𝙰𝚗𝚘𝚝𝚑𝚎𝚛 𝚅𝚒𝚛𝚐𝚒𝚗 𝙻𝚎𝚏𝚝✨, 𝙱𝚞𝚝 𝚆𝚎 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙶𝚘𝚒𝚗𝚐 𝚃𝚘 𝙼𝚒𝚜𝚜 𝚈𝚘𝚞 𝚃𝚑𝚘𝚞𝚐𝚑!🐧.*

╭━━╮
┃╭╮┃
┃╰╯╰┳╮╱╭┳━━╮
┃╭━╮┃┃╱┃┃┃━┫
┃╰━╯┃╰━╯┃┃━┫
╰━━━┻━╮╭┻━━╯
╱╱╱╱╭━╯┃
╱╱╱╱╰━━╯
  
`;
        if (WelcomeFeature == "true") {
          Miku.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: mikutext,
            mentions: [num],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
