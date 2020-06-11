

/* var enter= $(".button1").keyup(function(){
  if (event.keyCode === 13) {
    mouseclick
    console.log("I pressed the fknin ENTER")
    }});
 */
let a = 1





let text = $('#Add').val();

var mouseclick = $(".button1").on(function () {
  $("#list").append('<li>' + text)
  $(".jfk").val('');
  a +=1
console.log(event)

});

$(".test1").css("background" , "red")

var enter = $(document).keypress(function (e) {
  if (e.which == 13) {
    $("#list").append('<li>' + $(".jfk").val() + '</li>');
    $(".jfk").val('');
  }
});

$('#list').on('dblclick', 'li', function () {
  $(this).remove();
});



/*   var input = input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
      $(".button1"). click(function(){
        $("#list"). append('<li>' + $(".jfk").val() + '</li>');
        })}}
   */