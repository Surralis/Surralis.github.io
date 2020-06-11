

let a = 1;

$("#shoppingForm").on('submit', function(e){
	var text = $('#addToList').val();
  $('#shoppingList').append($('<li>'+text+'<button class="del" >Del</button>'));
   $('#addToList').val('');
  e.preventDefault();
  a += 1
  console.log(a)

});

$('#shoppingList').on('dblclick', 'li', function(){
	$(this).remove();
});

$('.Item'+a).css("color","blue");


$(".del").on('click',  function(){
  $(this).parent().remove();
});

