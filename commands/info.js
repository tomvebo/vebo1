const discord = require("discord.js")

module.exports.run = async(client, message, args) => {

        var xoxo = new discord.MessageEmbed()
            .setAuthor('PrijzenLijst', 'https://i.imgur.com/BWeGTjZ.png', 'https://vebo-shop.com')
            .setTitle("Website!")
            .setColor("#fffff")
            .setURL('https://vebo-shop.com')
            .setImage("https://i.imgur.com/BWeGTjZ.png")
            .addFields(
                { name: 'WebHosting', value: '\u200B' },
                { name: 'Small', value: '€0,95 p/m', inline: true },
                { name: 'Medium', value: '€2,95 p/m', inline: true },
                { name: 'Large', value: '€5,95 p/m', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .addFields(
                { name: 'Domeinen', value: '\u200B '},
                { name: '.com', value: '€10,95 p/j', inline: true },
                { name: '.nl', value: '€8,95 p/j ', inline: true },
                { name: '.net', value: '€12,95 p/j', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .addFields(
                { name: 'AANBIEDING!', value: '\u200B' },
                { name: 'AANBIEDING! .xyz', value: '€2,50 p/j', inline: true },
                { name: 'AANBIEDING! .eu', value: '€5,95 p/j', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .setTimestamp()
            .setFooter('Copyright: VeboShop', 'https://i.imgur.com/BWeGTjZ.png');
        return message.channel.send(xoxo);

}

module.exports.help = {
    name:"info",
}