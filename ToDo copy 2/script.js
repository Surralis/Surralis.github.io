

let a = 1;
let b = true;
let c= true
n = 2

$("#shoppingForm").on('submit', function(e){
  if($("#addToList").val() ===""){
    alert('Input can not be left blank');
    e.preventDefault();
  }else{ 
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>'+text+ '<button class="del">Del</button><button class="done" id="On">Done</button> </li>'));
  $(".done").css("color","black")
  $(".done").css("background","green")
   $('#addToList').val('');
   $(this).height($(this).height()+10);
  e.preventDefault();
  $(".container").height("+=70px");
  $(".container2").height("+=70px");
  a += 1
  

}});


/* $('#shoppingList').on('dblclick', 'li', function(){
	$(this).remove();
});
 */



$("#shoppingList").on('click', '.del',  function(){
  $(this).parent().remove();
  $(".container").height("-=70px");
  $(".container2").height("-=70px");
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

 
     


  
 

  
