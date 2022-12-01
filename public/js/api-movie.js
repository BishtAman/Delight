



// var   originalText = 'black widow';

       








var originalText = ''

console.log('here')

$('.movie-arrow').on('click', function(){
     originalText = 'arrow'
})


console.log(originalText) // output: empty string
let removedSpacesText = originalText.split(" ").join("%20");
console.log(removedSpacesText) // output: empty string






// $('.movie-black-widow').on('click', function(){
//    console.log('here')
//      window.originalText = 'Black Widow'
// })
// $('.movie-dc-legends').on('click', function(){
//      window.originalText = 'dc Legends'
// })
// $('.movie-dr-strange').on('click', function(){
//      window.originalText = 'dr strange'
// })
// $('.movie-eternals').on('click', function(){
//      window.originalText = 'eternals'
// })
// $('.movie-gotham').on('click', function(){
//      window.originalText = 'gotham'
// })
// $('.movie-grimm').on('click', function(){
//      window.originalText = 'grimm'
// })


// $('.movie-blackPanther').on('click', function(){
//      window.originalText = 'black panther'
// })
// $('.movie-guardians-of-the-galaxy').on('click', function(){
//      window.originalText = 'guardians of the galaxy'
// })
// $('.movie-ironfist').on('click', function(){
//      window.originalText = 'iron fist'
// })
// $('.movie-kantara').on('click', function(){
//      window.originalText = 'kantara'
// })
// $('.movie-kgf').on('click', function(){
//      window.originalText = 'arrow'
// })
// $('.movie-mech-x4').on('click', function(){
//      window.originalText = 'mech x4'
// })
// $('.movie-prison-break').on('click', function(){
//      window.originalText = 'prison break'
// })


// $('.movie-shang-chi').on('click', function(){
//      window.originalText = 'shang chi'
// })
// $('.movie-spactaus').on('click', function(){
//      window.originalText = 'spactaus'
// })
// $('.movie-super-girl').on('click', function(){
//      window.originalText = 'super girl'
// })
// $('.movie-supernatural').on('click', function(){
//      window.originalText = 'supernatural'
// })
// $('.movie-taken').on('click', function(){
//      window.originalText = 'taken'
// })
// $('.movie-last-ship').on('click', function(){
//      window.originalText = 'last ship'
// })
// $('.movie-venom').on('click', function(){
//      window.originalText = 'venom'
// })





// // let removedSpacesText = originalText.split(" ").join("%20");
// // console.log(removedSpacesText)






//    const options = {
//       method: 'GET',
//       headers: {
//          'X-RapidAPI-Key': '8d6d4e4ddamshf7c996e1199cdf4p1b4d7ajsnd06951cc03e3',
//          'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
//       }
//    };
   
//    fetch(`https://moviesdb5.p.rapidapi.com/om?t=${removedSpacesText}`, options)
//       .then(response => response.json())
//       .then(response => {

//          const movieDetails = `
//           <h1 class="movie-name">
//           ${response.Title}          
//           </h1>
//           <h2 class="movie-type">
//                ${response.Type}
//           </h2>
//           <h4 class="movie-director">
//              Director:  ${response.Director}
//           </h4>
//           <h3 class="movie-genre">
//                ${response.Genre}
//           </h3>
//           <h4 class="movie-language">
//             Languages:   ${response.Language}
//           </h4>
//           <h4 class="movie-released">
//              Released:  ${response.Released}
//           </h4>
//           <h4 class="movie-writers">
//              Writer:  ${response.Writer}
//           </h4>
//           <h4 class="movie-actors">
//              Actors:  ${response.Actors}
//           </h4>
//           <p class="movie-plot">
//               Plot: ${response.Plot}
//           </p>
//           `
//           document.querySelector('.moviedetails').innerHTML = movieDetails;

//           const movie = `<img src="${response.Poster}">
//           <h4 class="movie-runtime">
//                ${response.Runtime}
//           </h4>
//           `
//           document.querySelector('.imageSection').innerHTML = movie;

          


//       })
//       .catch(err => console.error(err));