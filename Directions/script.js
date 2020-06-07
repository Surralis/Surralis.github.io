
/* console.log("Hello world") */
let color = "purple";
let number = 10;
let word = "cool";

/* console.log(color); */

if (color === "purple") {

    $(".N").css("background", "purple")
}

if (number > 100) {

    $(".E").text("Whoah, that´s a big number")
} else {
    $(".E").text("Just a regular number, please.")
}
 
if (word === "cool") {

    $(".S").text("Power of DOM")
} else {
    $(".W").text("Power of DOM")
}