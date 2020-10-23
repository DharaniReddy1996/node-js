"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricket = new CricketCoach_1.CricketCoach();
console.log(myCricket.getDailyWorkOut());
console.log(myCricket.getDailyFortune());
var myGolfCaoch = new GolfCoach_1.GolfCoach();
console.log(myGolfCaoch.getDailyWorkOut());
