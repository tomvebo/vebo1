const discord = require("discord.js")

module.exports.run = async(client, message, args) => {

    const categoryID = "738908095186731099";

    var userName = message.author.username;
    var userDiscriminator = message.author.userDiscriminator;

    var knowTicket = false;

    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name == userName.toLowerCase() + "-"){
           knowTicket = true;
           
           message.reply("you already have a ticket");

           return;

        }

    });

    if (knowTicket) return;

    var embed = new discord.MessageEmbed() 
        .setColor("#fffff")
        .setAuthor('Ticket', 'https://i.imgur.com/BWeGTjZ.png', 'https://vebo-shop.com')
        .setFooter('Copyright: VeboShop', 'https://i.imgur.com/BWeGTjZ.png')
        .setTimestamp()
        .setDescription(`Je ticket word aangemaakt`);
    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-", {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id,{
                        SEND_MESSAGES: true,
                        READ_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        CREATE_INSTANT_INVITE: false
                    });

                    var embedTicket = new discord.MessageEmbed() 
                        .setColor("#fffff")
                        .setAuthor('Ticket', 'https://i.imgur.com/BWeGTjZ.png', 'https://vebo-shop.com')
                        .setFooter('Copyright: VeboShop', 'https://i.imgur.com/BWeGTjZ.png')
                        .setTimestamp()
                        .setDescription(`How can we help you?`);
                    settedParent.channel.send(embedTicket);

                }
            ).catch(err =>{
                message.channels.send("er is iets misgegaan");
            });
        }
    ).catch(err =>{
        message.channels.send("er is iets misgegaan");
    });
}

module.exports.help = {
    name:"new",
}