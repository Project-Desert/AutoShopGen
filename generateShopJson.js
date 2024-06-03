// this is some of the shittest code ive ever written

const fs = require("node:fs");
var XMLHttpRequest = require('xhr2');

if (!fs.existsSync("./daily.txt") || !fs.existsSync("./featured.txt")) {
    console.log("Run the other files first");
    return;
}

// WE ADD TOO MANY VARS :O

let newJson = {};
let featured = [];
let featuredPrices = [];
let daily = [];
let dailyPrices = [];

const parsedOutfit = JSON.parse(fs.readFileSync('./dumpedCosmetics/outfits.json'));
const parsedBackpack = JSON.parse(fs.readFileSync('./dumpedCosmetics/backpacks.json'));
const parsedEmotes = JSON.parse(fs.readFileSync('./dumpedCosmetics/emotes.json'));
const parsedEmojis = JSON.parse(fs.readFileSync('./dumpedCosmetics/emojis.json'));
const parsedPickaxes = JSON.parse(fs.readFileSync('./dumpedCosmetics/pickaxes.json'));
const parsedWraps = JSON.parse(fs.readFileSync('./dumpedCosmetics/wraps.json'));
const parsedMusic = JSON.parse(fs.readFileSync('./dumpedCosmetics/music.json'));

let prices = []
prices[0] = [0, 800, 1200, 1500, 2000]; // outfit
prices[1] = [0, 200, 400, 600, 800]; // backpack
prices[2] = [0, 400, 800, 1200, 1600]; // pickaxe
prices[3] = [0, 200, 500, 800, 1000]; // emote
prices[4] = [0, 200, 500, 800, 1000]; // glider
prices[5] = [0, 100, 300, 500, 700]; // wrap
prices[6] = [0, 200, 400, 600, 800]; // music
prices[7] = [0, 200, 500, 800, 1000]; // emote
console.log(prices);

const rarityIdxs = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
const typeIdxs = ["outfit", "backpack", "pickaxe", "emote", "glider", "wrap", "music", "emoji"];
// console.log(prices.outfit[rarityIdxs.indexOf("Rare")]);
console.log(prices[typeIdxs.indexOf("backpack")][rarityIdxs.indexOf("Rare")]);
const featuredDump = fs.readFileSync("./featured.txt").toString().split("\n");
const dailyDump = fs.readFileSync("./daily.txt").toString().split("\n");

const xhrF1 = new XMLHttpRequest();

featured.push(featuredDump[0].toString().split("      ")[0]);

featured.push(featuredDump[1].toString().split("      ")[0]);

daily.push(dailyDump[0].toString().split("      ")[0]);
daily.push(dailyDump[1].toString().split("      ")[0]);
daily.push(dailyDump[2].toString().split("      ")[0]);
daily.push(dailyDump[3].toString().split("      ")[0]);
daily.push(dailyDump[4].toString().split("      ")[0]);
daily.push(dailyDump[5].toString().split("      ")[0]);

newJson.featured1 = {}; newJson.featured1.itemGrants = featured[0];
xhrF1.open("GET", "https://fortnite-api.com/v2/cosmetics/br/search/all?id="+featured[0]);
xhrF1.send();
xhrF1.onload = () => {
    if (xhrF1.readyState == 4 && xhrF1.status == 200) {
        const data = JSON.parse(xhrF1.response);
        console.log(data.data[0].type.value);
        console.log(featuredDump[0].toString().split("       ")[1]);
        newJson.featured1.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(featuredDump[0].toString().split("       ")[1])];//.toString();
        console.log(newJson.featured1.price);
        continue1();
      } else {
        console.log(`Error: ${xhr.status}`);
      }
}

function continue1() {
    newJson.featured2 = {}; newJson.featured2.itemGrants = featured[1];
    const xhrF2 = new XMLHttpRequest();
    xhrF2.open("GET", "https://fortnite-api.com/v2/cosmetics/br/search/all?id="+featured[1]);
    xhrF2.send();
    xhrF2.onload = () => {
        if (xhrF2.readyState == 4 && xhrF2.status == 200) {
            const data = JSON.parse(xhrF2.response);
            console.log(data.data[0].type.value);
            console.log(featuredDump[1].toString().split("       ")[1]);
            newJson.featured2.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(featuredDump[1].toString().split("       ")[1])];//.toString();
            console.log(newJson.featured2.price);
            continue2(0);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    }
}
newJson.daily1 = {};
newJson.daily2 = {};
newJson.daily3 = {}; 
newJson.daily4 = {};
newJson.daily5 = {};
newJson.daily6 = {}; 
function continue2(dailyIdx) {
    if (dailyIdx == 0) {
        newJson.daily1 = {}; newJson.daily1.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx == 1) {
        newJson.daily2 = {}; newJson.daily2.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx == 2) {
        newJson.daily3 = {}; newJson.daily3.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx == 3) {
        newJson.daily4 = {}; newJson.daily4.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx == 4) {
        newJson.daily5 = {}; newJson.daily5.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx == 5) {
        newJson.daily6 = {}; newJson.daily6.itemGrants = daily[dailyIdx];
    }
    if (dailyIdx < 6) {
        const xhrF2 = new XMLHttpRequest();
        xhrF2.open("GET", "https://fortnite-api.com/v2/cosmetics/br/search/all?id="+daily[dailyIdx]);
        xhrF2.send();
        xhrF2.onload = () => {
            if (xhrF2.readyState == 4 && xhrF2.status == 200) {
                const data = JSON.parse(xhrF2.response);
                console.log(data.data[0].type.value);
                console.log(featuredDump[1].toString().split("       ")[1]);
                // newJson.featured2.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                switch (dailyIdx) {
                    case 0:
                        newJson.daily1.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                    case 1:
                        newJson.daily2.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                    case 2:
                        newJson.daily3.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                    case 3:
                        newJson.daily4.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                    case 4:
                        newJson.daily5.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                    case 5:
                        newJson.daily6.price = prices[typeIdxs.indexOf(data.data[0].type.value)][rarityIdxs.indexOf(dailyDump[dailyIdx].toString().split("       ")[2])];//.toString();
                }
                console.log(newJson.featured2.price);
                continue2(dailyIdx+=1);
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        }
    } else {
        fs.writeFileSync("./Backend.json", JSON.stringify(newJson));
        console.log("Success! Dumped into Backend.json!");
    }
}

/* function continue2(dailyIdx) {
    newJson.daily1 = daily[0];
    newJson.daily2 = daily[1];
    newJson.daily3 = daily[2];
    newJson.daily4 = daily[3];
    newJson.daily5 = daily[4];
    newJson.daily6 = daily[5];

    fs.writeFileSync("./Backend.json", JSON.stringify(newJson));
    console.log("Success! Dumped into Backend.json!");
} */