$('.button1').on('click', () => {
  console.log("Yeah, you clicked me")
});

$('.button2').on('click', () => {
$(".button1").text("Changed you!")});

$('.button3').on('click', () => {
  $("button").css("background","rgb(216, 169, 141)")});

$('.reset').on('click', () => {
    location.reload()});