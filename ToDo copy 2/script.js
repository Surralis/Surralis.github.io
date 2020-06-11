

let a = 1;
let b = true;
let c= true

$("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>'+text+ '<button class="del">Del</button><button class="done" id="On">Done</button> </li>'));

   $('#addToList').val('');
  e.preventDefault();
  a += 1
  

});


/* $('#shoppingList').on('dblclick', 'li', function(){
	$(this).remove();
});
 */



$("#shoppingList").on('click', '.del',  function(){
  $(this).parent().remove();
});




  $("#shoppingList").on('click', '.done',  function(){
    var f = !$(this).data("toggleFlag");
    if (f) {
     $(this).parent().css("color","gray")
     $(this).css("background","gray")
    } else {
     $(this).parent().css("color","black")
     $(this).css("background","yellow")
  
    }});
    $(this).data("toggleFlag", f); 

  
