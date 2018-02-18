var keys = require("./keys.json");

var Discord = require("discord.js");

const cse_ID  = keys.cse_ID;
const API_Key = keys.API_Key;
const GoogleImages = require('google-images');
 
const client = new GoogleImages(cse_ID, API_Key);


module.exports = {
    searchImg : function (message, target, arg) {
        client.search(target).then(
            function (images) {
                var i = Math.floor(Math.random()*images.length);
                message.channel.send(images[i].url);
            },
            function (reason) {
                message.channel.send("search failed!");
            }
        )
    }
}


