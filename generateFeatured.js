// this legit just generates outfits lmaooooo
// also this fails A LOT
var XMLHttpRequest = require('xhr2');
const fs = require("node:fs");
const { json } = require('stream/consumers');

let amountGrabbed = 0;
let grabbedCIDS = [];
let parsedOutfits = JSON.parse(fs.readFileSync('./dumpedCosmetics/outfits.json'));

let prices = {}
prices.outfit = [0, 800, 1200, 1500, 2000];
// console.log(parsedOutfits.data[0]);
grabSkin(parsedOutfits);

function grabSkin(parsed) {
    const randomNum = Math.floor(Math.random() * 2026);
    const randomOutfit = parsed.data[randomNum];
    // console.log(parsed.data.length+"\n"+randomOutfit);
    if (randomOutfit.introduction.backendValue > 15) {
        console.log("No bueno");
        grabSkin(parsed);
    } else {
        console.log("Muy bueno: "+randomOutfit.id);
        const rarity = randomOutfit.rarity.backendValue.toString().split("::")[1];
        grabbedCIDS.push(randomOutfit.id.toString()+"       "+rarity);
        amountGrabbed++;
        if (amountGrabbed < 2) {
            grabSkin(parsed);
        } else {
            console.log("\n\nGrabbed CIDS:\n"+grabbedCIDS[0]+"\n"+grabbedCIDS[1]+"\n\nDumping into featured.txt");
            fs.writeFileSync('./featured.txt', grabbedCIDS[0]+"\n"+grabbedCIDS[1]);
        }
    }
}