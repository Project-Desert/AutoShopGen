// this is some of the shittest code ive ever written

const fs = require("node:fs");

if (!fs.existsSync("./daily.txt") || !fs.existsSync("./featured.txt")) {
    console.log("Run the other files first");
    return;
}

// WE ADD TOO MANY VARS :O

let newJson = {};
let featured = [];
let daily = [];

const featuredDump = fs.readFileSync("./featured.txt").toString().split("\n");
const dailyDump = fs.readFileSync("./daily.txt").toString().split("\n");

featured.push(featuredDump[0]);
featured.push(featuredDump[1]);

daily.push(dailyDump[0].toString().split("      ")[0]);
daily.push(dailyDump[1].toString().split("      ")[0]);
daily.push(dailyDump[2].toString().split("      ")[0]);
daily.push(dailyDump[3].toString().split("      ")[0]);
daily.push(dailyDump[4].toString().split("      ")[0]);
daily.push(dailyDump[5].toString().split("      ")[0]);


newJson.featured1 = featured[0];
newJson.featured2 = featured[1];

newJson.daily1 = daily[0];
newJson.daily2 = daily[1];
newJson.daily3 = daily[2];
newJson.daily4 = daily[3];
newJson.daily5 = daily[4];
newJson.daily6 = daily[5];

fs.writeFileSync("./Backend.json", JSON.stringify(newJson));
console.log("Success! Dumped into Backend.json!");