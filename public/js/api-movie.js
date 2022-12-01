const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8d5658cd9mshbec2cab26b1ba88p1da988jsn0d070bcf3e94',
		'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
	}
};
// var   originalText = 'black widow';

//           let removedSpacesText = originalText.split(" ").join("%20");
//                 console.log(removedSpacesText)











// var   originalText='';

          


// $('.movie-arrow').on('click', function(){
//      originalText = 'arrow'
// })
// $('.movie-black-widow').on('click', function(){
//      originalText = 'Black Widow'
// })
// $('.movie-dc-legends').on('click', function(){
//      originalText = 'dc Legends'
// })
// $('.movie-dr-strange').on('click', function(){
//      originalText = 'dr strange'
// })
// $('.movie-eternals').on('click', function(){
//      originalText = 'eternals'
// })
// $('.movie-gotham').on('click', function(){
//      originalText = 'gotham'
// })
// $('.movie-grimm').on('click', function(){
//      originalText = 'grimm'
// })


// $('.movie-blackPanther').on('click', function(){
//      originalText = 'black panther'
// })
// $('.movie-guardians-of-the-galaxy').on('click', function(){
//      originalText = 'guardians of the galaxy'
// })
// $('.movie-ironfist').on('click', function(){
//      originalText = 'iron fist'
// })
// $('.movie-kantara').on('click', function(){
//      originalText = 'kantara'
// })
// $('.movie-kgf').on('click', function(){
//      originalText = 'arrow'
// })
// $('.movie-mech-x4').on('click', function(){
//      originalText = 'mech x4'
// })
// $('.movie-prison-break').on('click', function(){
//      originalText = 'prison break'
// })


// $('.movie-shang-chi').on('click', function(){
//      originalText = 'shang chi'
// })
// $('.movie-spactaus').on('click', function(){
//      originalText = 'spactaus'
// })
// $('.movie-super-girl').on('click', function(){
//      originalText = 'super girl'
// })
// $('.movie-supernatural').on('click', function(){
//      originalText = 'supernatural'
// })
// $('.movie-taken').on('click', function(){
//      originalText = 'taken'
// })
// $('.movie-last-ship').on('click', function(){
//      originalText = 'last ship'
// })
// $('.movie-venom').on('click', function(){
//      originalText = 'venom'
// })
// console.log(originalText)
// var removedSpacesText = originalText.split(" ").join("%20");
//                 console.log(removedSpacesText)








fetch(`https://moviesdb5.p.rapidapi.com/om?t=${removedSpacesText}`, options)
	.then(response => response.json())
	.then(response => {
          const movieDetails = `
          <h1 class="movie-name">
          ${response.Title}          
          </h1>
          <h2 class="movie-type">
               ${response.Type}
          </h2>
          <h4 class="movie-director">
             Director:  ${response.Director}
          </h4>
          <h3 class="movie-genre">
               ${response.Genre}
          </h3>
          <h4 class="movie-language">
            Languages:   ${response.Language}
          </h4>
          <h4 class="movie-released">
             Released:  ${response.Released}
          </h4>
          <h4 class="movie-writers">
             Writer:  ${response.Writer}
          </h4>
          <h4 class="movie-actors">
             Actors:  ${response.Actors}
          </h4>
          <p class="movie-plot">
              Plot: ${response.Plot}
          </p>
          `
          document.querySelector('.moviedetails').innerHTML = movieDetails;

          const movie = `<img src="${response.Poster}">
          <h4 class="movie-runtime">
               ${response.Runtime}
          </h4>
          `
          document.querySelector('.imageSection').innerHTML = movie;

          

     })
	.catch(err => console.error(err));