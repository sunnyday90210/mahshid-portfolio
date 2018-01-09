var counter = 0, 
    $items = $('.diy-slideshow figure'), 
    numItems = $items.length; 

var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
   
  $items.removeClass('show'); 
  $items.eq(itemToShow).addClass('show');    
};


$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});

//  slide1

var counter1 = 0, 
  $items1 = $('.diy-slideshow1 .figi1'), 
  numItems1 = $items1.length; 


var showCurrent1 = function () {
  var itemToShow1 = Math.abs(counter1 % numItems1);
  $items1.removeClass('show1');
  $items1.eq(itemToShow1).addClass('show1');
};


$('.next1').on('click', function () {
  counter1++;
  showCurrent1();
});
$('.prev1').on('click', function () {
  counter1--;
  showCurrent1();
});


// Slide3

var counter2 = 0, 
  $items2 = $('.diy-slideshow2 .figi2'), 
  numItems2 = $items2.length; 


var showCurrent2 = function () {
  var itemToShow2 = Math.abs(counter2 % numItems2);
  $items2.removeClass('show2');
  $items2.eq(itemToShow2).addClass('show2');
};


$('.next2').on('click', function () {
  counter2++;
  showCurrent2();
});
$('.prev2').on('click', function () {
  counter2--;
  showCurrent2();
});


