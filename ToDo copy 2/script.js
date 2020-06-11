

let a = 1;
let b = true;
let c= true
n = 2

$("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>'+text+ '<button class="del">Del</button><button class="done" id="On">Done</button> </li>'));
  $(".done").css("color","black")
  $(".done").css("background","green")
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
    

    console.log(this.style.backgroundColor)
    if ((this).style.backgroundColor === "green") {
    $(this).parent().css("color","gray");
    $(this).css("background","gray");
   
    } 
 else {
  console.log(this.style.backgroundColor)
  $(this).parent().css("color","black")
  $(this).css("background","green")
  
 
}});

 
     


  
 

  
