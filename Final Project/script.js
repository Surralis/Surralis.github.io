

// let data = {
//     photo: 'Elephant.jpg',
//     title: 'Walking through the jungle',
//     description: 'They say that somewhere in Africa the elephants have a secret grave where they go to lie down, unburden their wrinkled gray bodies, and soar away, light spirits at the end.' ,
// };

 

//   $('#photo').attr('src', data.photo);
//   $("#photo-title").text(data.title);
//   $('#photo-description').text(data.description);




  let currentPhoto = 0;

  let imagesPhoto = ['Elephant.jpg','Lightbringer.jpg','Road.jpg','Sphere.jpg','TreeOfLife.jpg'];

  let imagesTitle = ['Walking through the jungle','Shining light upon yourself', 'Road to the unknown', 'Round around the round', 'Tree of life'] ;

  let imagesDescription = ['They say that somewhere in Africa the elephants have a secret grave where they go to lie down, unburden their wrinkled gray bodies, and soar away, light spirits at the end.' ,
    'There are two ways of spreading light; to be the candle or the mirror that reflects it','My life is full of mistakes. They’re like pebbles that make a good road',
    'A hidden spark of the dream sleeps  In the forest and waits In the celestial spheres of the brain','Art is the tree of life. Science is the tree of death.']
  
  let imageThumbnails = ['Elephant','Lightbringer','Road','Sphere','TreeOfLife'];



$('#photo').attr('src', imagesPhoto[currentPhoto])
$('#photo-title').html(imagesTitle[currentPhoto])
$('#photo-description').html(imagesDescription[currentPhoto])



let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesPhoto[currentPhoto])
  $('#photo-title').html(imagesTitle[currentPhoto])
  $('#photo-description').html(imagesDescription[currentPhoto])


  // ...
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
  currentPhoto++;
  if(currentPhoto>=5) {
    currentPhoto=0
  loadPhoto(currentPhoto);
  console.log(currentPhoto)}
  else
  loadPhoto(currentPhoto);
  console.log(currentPhoto)
})

$('#left-arrow').click(() => {
  currentPhoto--;
  if(currentPhoto<0) {
  currentPhoto=4
  loadPhoto(currentPhoto);
  console.log(currentPhoto)}
  else
  loadPhoto(currentPhoto);
  console.log(currentPhoto);
})



imagesPhoto.forEach((item, index) => {
  $('#prev').append(`<div class="box" data-index="${index}">
  <div class="thumbnail">
    <img src=${item} id="show" data-index="${index}" >
  
    <div class="title" >${imageThumbnails[index]}</div>
    </div>
  </div>`)
  
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');

    currentPhoto=parseInt(indexClicked);
    loadPhoto(currentPhoto);

    console.log(indexClicked)
  })
  }); 

 
    // currentPhoto= parseInt(indexClicked)
    // loadPhoto(currentPhoto);
    // console.log(currentPhoto)});


    // <div class="title" >${imageThumbnails[index]}</div>
    //<div class="thumbnail">
    // </div>
    //  <img src=${item} id="show">