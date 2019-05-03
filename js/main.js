//The user clicks the next button and views the next image
//The user clicks the back button and views the previous image
//The image are reset or ongoing so that the carousel does not end ( it only resets)

let rotation = 0;

let imgs = ['img/charles1.jpg', 'img/charles2.jpg', 'img/chris.jpg', 'img/kareem.jpg', 'img/sam.jpg', 'img/taye.jpg', 'img/sully.jpg']

function swap(){
  $('section.leon img').attr('src', imgs[rotation])
}

$("#leonnext").on('click', function(){
  rotation += 1;
 if (rotation >= imgs.length) {
   rotation = imgs.length
 }
 swap()
})

$("#leonback").on('click', function(){
  rotation -= 1;
  if (rotation <= 0) {
  rotation = 0
  }
  swap()
})
