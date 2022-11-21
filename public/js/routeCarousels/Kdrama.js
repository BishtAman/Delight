
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



 $('.right1').on('click', function(){
    console.log('here')
    $('.right1').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.right1').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide11').css('animation','slideRight 1000ms forwards ease-in-out')
    
    setTimeout(() => {
        $('.bi-chevron-right1').css('visibility','hidden')
        $('.bi-chevron-left1').css('visibility','visible')
    }, 700);
})

$('.left1').on('click', function(){
    $('.left1').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.left1').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide11').css('animation','slideLeft 1000ms forwards ease-in-out')

    setTimeout(() => {
        $('.bi-chevron-left1').css('visibility','hidden')
        $('.bi-chevron-right1').css('visibility','visible')
    }, 700);
})



// superheroes ================>

$('.right2').on('click', function(){
    console.log('here')
    $('.right2').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.right2').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide2').css('animation','slideRight 1000ms forwards ease-in-out')
    
    setTimeout(() => {
        $('.bi-chevron-right2').css('visibility','hidden')
        $('.bi-chevron-left2').css('visibility','visible')
    }, 700);
})

$('.left2').on('click', function(){
    $('.left2').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.left2').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide2').css('animation','slideLeft 1000ms forwards ease-in-out')

    setTimeout(() => {
        $('.bi-chevron-left2').css('visibility','hidden')
        $('.bi-chevron-right2').css('visibility','visible')
    }, 700);
})
 

$('.right3').on('click', function(){
    console.log('here')
    $('.right3').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.right3').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide3').css('animation','slideRight 1000ms forwards ease-in-out')
    
    setTimeout(() => {
        $('.bi-chevron-right3').css('visibility','hidden')
        $('.bi-chevron-left3').css('visibility','visible')
    }, 700);
})

$('.left3').on('click', function(){
    $('.left3').addClass('carouselButtonEffect')
    setTimeout(() => {
        $('.left3').removeClass('carouselButtonEffect')
    }, 200);
    
    $('.slide3').css('animation','slideLeft 1000ms forwards ease-in-out')

    setTimeout(() => {
        $('.bi-chevron-left3').css('visibility','hidden')
        $('.bi-chevron-right3').css('visibility','visible')
    }, 700);
})
 