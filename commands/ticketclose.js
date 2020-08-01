const discord = require("discord.js")

module.exports.run = async(client, message, args) => {

    const categoryID = "738908095186731099";

    if (message.channel.parentID == categoryID) {
       message.channel.delete(); 
    } else {

        message.channel.send("Please do this command in a ticket");
    }

}

module.exports.help = {
    name:"close",
}