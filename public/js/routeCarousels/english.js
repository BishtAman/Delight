
$('.right1').on('click', function(){
     console.log('here')
     $('.right1').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.right1').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide1').css('animation','slideRight 1000ms forwards ease-in-out')
     
     setTimeout(() => {
         $('.bi-chevron-right').css('visibility','hidden')
         $('.bi-chevron-right').css('visibility','visible')
     }, 700);
 })
 
 $('.left1').on('click', function(){
     $('.left1').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.left1').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide1').css('animation','slideLeft 1000ms forwards ease-in-out')
 
     setTimeout(() => {
         $('.bi-chevron-left').css('visibility','hidden')
         $('.bi-chevron-left').css('visibility','visible')
     }, 700);
 })



$('.right2').on('click', function(){
     console.log('here')
     $('.right2').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.right2').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide2').css('animation','slideRight 1000ms forwards ease-in-out')
     
     setTimeout(() => {
         $('.bi-chevron-right').css('visibility','hidden')
         $('.bi-chevron-right').css('visibility','visible')
     }, 700);
 })
 
 $('.left2').on('click', function(){
     $('.left2').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.left2').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide2').css('animation','slideLeft 1000ms forwards ease-in-out')
 
     setTimeout(() => {
         $('.bi-chevron-left').css('visibility','hidden')
         $('.bi-chevron-left').css('visibility','visible')
     }, 700);
 })