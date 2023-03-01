

function showCurrentTime(response) {

    let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

}

showCurrentTime();
setInterval(showCurrentTime, 100);