$('#tv').click(function(){
    $('.movies-menu').css('display', 'none')
    $('.genre-menu').css('display', 'none')
    $('.tv-menu').css('display', 'block')
})
$('#movies').click(function(){
     $('.tv-menu').css('display', 'none')
     $('.genre-menu').css('display', 'none')
     $('.movies-menu').css('display', 'block')
})
$('#genre').click(function(){
     $('.tv-menu').css('display', 'none')
     $('.movies-menu').css('display', 'none')
     $('.genre-menu').css('display', 'block')
})
$('.banner').on('click',()=>{
    $('.tv-menu').css('display', 'none')
    $('.movies-menu').css('display', 'none')
    $('.genre-menu').css('display', 'none')
})

$('.login').on('click',()=>{
    $('.loginCard').css('display', 'block')
    $('.loginCard').css('opacity', '1')
    // $('nav').css('opacity', '0.7')
    $('.banner').css('opacity', '0.3')
    $('.categoryBanner').css('opacity', '0.3')
})

$('.bi-x').on('click', ()=>{
    $('.loginCard').css('display', 'none')
    $('nav').css('opacity', '1')
    $('.banner').css('opacity', '1')
    $('.categoryBanner').css('opacity', '1')
})

$('.bi-moon-fill').on('click',()=>{
    console.log('here')
    // icon change
    $('.bi-brightness-high-fill').css('display', 'block')
    $('.bi-moon-fill').css('display', 'none')
    $('.darkMode').css('background-color', 'white')
    // $('.bi-brightness-high-fill').css('filter', 'invert(1)')
    $('.darkMode').css('border', '1px solid #1B1736')

    // whole display change
    $(document.body).css('background-color', 'white')
    $(document.body).css('color', 'black')
    $('nav').css('color', 'black')
    $('a').css('color', 'black')
    $('nav').css('background-color', 'white')
    $('nav').css('border', 'none')
    $('nav').css('border-bottom', '1px solid #100e20')
    $('.bi-search').css('filter', 'invert(1)')

    $('.itemsCategory').css('border', 'none')
    $('.itemsCategory').css('border-bottom', '1px solid black')
    $('.itemsCategory').css('color', 'black')
    $('.tv-menu').css('background-color', 'white')
    $('.movies-menu').css('background-color', 'white')
    $('.genre-menu').css('background-color', 'white')
    $('.tv-menu').css('border', '2px solid black')
    $('.movies-menu').css('border', '2px solid black')
    $('.genre-menu').css('border', '2px solid black')

    $('.search-bar').css('border', 'none')
    $('.search-bar').css('border-bottom', '1px solid #4d3fb8')

    $('.loginCard').css('background', 'linear-gradient(231.42deg, rgb(49 47 63) 5.82%, rgb(41 41 121) 99.43%)')
    $('.loginTitle').css('color', 'white')
    $('.or').css('color', 'white')
})

$('.bi-brightness-high-fill').on('click',()=>{
    console.log('here')
    // icon change
    $('.bi-brightness-high-fill').css('display', 'none')
    $('.bi-moon-fill').css('display', 'block')
    $('.darkMode').css('background-color', '#1B1736')
    $('.darkMode').css('border', '1px solid white')
    
    // // whole document
    $(document.body).css('background-color', '#1B1736')
    $(document.body).css('color', 'white')
    $('.bi-search').css('filter', 'invert(1)')
    $('nav').css('color', 'white')
    $('nav').css('border', 'none')
    $('nav').css('background-color', '#100e20')
    $('a').css('color', 'white')
    
    $('.itemsCategory').css('border', 'none')
    $('.itemsCategory').css('border-bottom', '1px solid #4d3fb8')
    $('.itemsCategory').css('color', 'white')
    $('.tv-menu').css('background-color', '#1B1736')
    $('.movies-menu').css('background-color', '#1B1736')
    $('.genre-menu').css('background-color', '#1B1736')
    $('.tv-menu').css('border', '2px solid #4d3fb8')
    $('.movies-menu').css('border', '2px solid #4d3fb8')
    $('.genre-menu').css('border', '2px solid #4d3fb8')
    
    $('.search-bar').css('border', 'none')
    // $('.search-bar').css('border-bottom', '1px solid black')

    $('.loginCard').css('background', 'linear-gradient(231.42deg, #140C4F 5.82%, rgba(16, 14, 32, 1) 99.43%)')
})


// carousel button effect 

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

$('.login-submit-button').on('click', function(){
    $('.login-submit-button').addClass('login-submit-button-blink')
    setTimeout(() => {
        $('.login-submit-button').removeClass('login-submit-button-blink')
    }, 200);
})

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}