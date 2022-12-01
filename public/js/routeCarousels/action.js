

 $('.right0').on('click', function(){
     console.log('here')
     $('.right0').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.right0').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide0').css('animation','slideRight 1000ms forwards ease-in-out')
     
     setTimeout(() => {
         $('.bi-chevron-right0').css('visibility','hidden')
         $('.bi-chevron-left0').css('visibility','visible')
     }, 700);
 })
 
 $('.left0').on('click', function(){
     $('.left0').addClass('carouselButtonEffect')
     setTimeout(() => {
         $('.left0').removeClass('carouselButtonEffect')
     }, 200);
     
     $('.slide0').css('animation','slideLeft 1000ms forwards ease-in-out')
 
     setTimeout(() => {
         $('.bi-chevron-left0').css('visibility','hidden')
         $('.bi-chevron-right0').css('visibility','visible')
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
 



