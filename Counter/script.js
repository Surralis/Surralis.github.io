/* $('.button1').on('click', () => {
  console.log("Yeah, you clicked me")
});

$('.button2').on('click', () => {
$(".button1").text("Changed you!")});

let a = $(".color").val();





$('.button3').on('click', () => {
  $("button").css("background", $(".color").val() ,
  $(".button3").prop('disabled', true))
  });*/

$('.reset').on('click', () => {
    location.reload()}); 


let a = 0



 $('.button1').on('click', () => {
     a += 1 ,
     $("h2").html(a)
   console.log(a)
  
});

$('.button2').on('click', () => {
  
   a -= 1 ,
   $("h2").html(a),
   console.log(a)
  
});

