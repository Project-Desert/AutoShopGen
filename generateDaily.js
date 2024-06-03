// this legit just generates outfits lmaooooo
// also this fails A LOT
const fs = require("node:fs");
const { json } = require('stream/consumers');

let amountGrabbed = 0;
let grabbedIDS = [];
grabNonSkin();

function grabNonSkin() {
   // const randomNum = Math.floor(Math.random() * 2026);
    const randomType = Math.floor(Math.random() * 7);
    const typesOfC = ["emotes", "backpacks", "pickaxes", "gliders", "wraps", "music", "emojis"];
    const parsed = JSON.parse(fs.readFileSync('./dumpedCosmetics/'+typesOfC[randomType]+".json"));
    const randomNum = Math.floor(Math.random() * parsed.data.length);
    const randomOutfit = parsed.data[randomNum];

    
    // console.log(parsed.data.length+"\n"+randomOutfit);
    if (randomOutfit.introduction.backendValue > 15) {
        console.log("No bueno");
        grabNonSkin(parsed);
    } else {
        const rarity = randomOutfit.rarity.backendValue.toString().split("::")[1];
        console.log("Muy bueno: "+randomOutfit.id);
        grabbedIDS.push(randomOutfit.id.toString()+"       "+typesOfC[randomType]+"       "+rarity);
        amountGrabbed++;
        if (amountGrabbed < 6) {
            grabNonSkin(parsed);
        } else {
            // console.log("\n\nGrabbed CIDS:\n"+grabbedCIDS[0]+"\n"+grabbedCIDS[1]);
            console.log("Dumping IDS into 'daily.txt'");
            fs.writeFileSync("./daily.txt", grabbedIDS[0]+"\n"+grabbedIDS[1]+"\n"+grabbedIDS[2]+"\n"+grabbedIDS[3]+"\n"+grabbedIDS[4]+"\n"+grabbedIDS[5]);
        }
    }
}