

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
 







let originalText='';
let removedSpacesText = '';
          


$('.movie-arrow').on('click', function(){
    console.log('here')
    originalText = 'arrow'
    console.log('arrow')
    removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-black-widow').on('click', function(){
     originalText = 'Black Widow'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-dc-legends').on('click', function(){
     originalText = 'dc Legends'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-dr-strange').on('click', function(){
     originalText = 'dr strange'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-eternals').on('click', function(){
     originalText = 'eternals'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-gotham').on('click', function(){
     originalText = 'gotham'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-grimm').on('click', function(){
     originalText = 'grimm'
     removedSpacesText = originalText.split(" ").join("%20");
})


$('.movie-blackPanther').on('click', function(){
     originalText = 'black panther'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-guardians-of-the-galaxy').on('click', function(){
     originalText = 'guardians of the galaxy'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-ironfist').on('click', function(){
     originalText = 'iron fist'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-kantara').on('click', function(){
     originalText = 'kantara'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-kgf').on('click', function(){
     originalText = 'arrow'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-mech-x4').on('click', function(){
     originalText = 'mech x4'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-prison-break').on('click', function(){
     originalText = 'prison break'
     removedSpacesText = originalText.split(" ").join("%20");
})


$('.movie-shang-chi').on('click', function(){
     originalText = 'shang chi'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-spactaus').on('click', function(){
     originalText = 'spactaus'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-super-girl').on('click', function(){
     originalText = 'super girl'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-supernatural').on('click', function(){
     originalText = 'supernatural'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-taken').on('click', function(){
     originalText = 'taken'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-last-ship').on('click', function(){
     originalText = 'last ship'
     removedSpacesText = originalText.split(" ").join("%20");
})
$('.movie-venom').on('click', function(){
     originalText = 'venom'
     removedSpacesText = originalText.split(" ").join("%20");
})
console.log(originalText)
// var 
//                 console.log(removedSpacesText)

