
$('.KdramarightButtonCarousel').on('click', function(){
     console.log('here')
     $('.KdramarightButtonCarousel').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.KdramarightButtonCarousel').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.KdramaLatestTrending').css('animation','slideRight 1000ms forwards ease-in-out')
     
     setTimeout(() => {
         $('.KdramarightButtonCarousel').css('visibility','hidden')
         $('.KdramaleftButtonCarousel').css('visibility','visible')
     }, 700);
 })
 
 $('.KdramaleftButtonCarousel').on('click', function(){
     $('.KdramaleftButtonCarousel').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.KdramaleftButtonCarousel').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.KdramaLatestTrending').css('animation','slideLeft 1000ms forwards ease-in-out')
 
     setTimeout(() => {
         $('.KdramaleftButtonCarousel').css('visibility','hidden')
         $('.KdramarightButtonCarousel').css('visibility','visible')
     }, 700);
 })
 