console.log("Hello world")

/* $("h1").css("background","red") */

let names= ["Alexandra", "Joanna", "Castle"]

names.forEach(name => {
$("ul").append(name + " " )
   
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };


  $('ul').after (  '<h1 class="vloz"></h1>' )
  $('.vloz').css ("font-size", "100px" )
  $('.vloz').css ("background" , "green")
  $('.vloz').html (additionalBlock.title )

  $('.vloz').after (  '<h2 class="vloz2"></h2>' )
  $("vloz2").css ("font-size", "50px" )
  $('.vloz2').css ("background" , "yellow")
  $('.vloz2').html (additionalBlock.text )
 