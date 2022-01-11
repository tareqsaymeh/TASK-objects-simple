/**
 * DON'T TOUCH THIS FILE
 */

function render(movies) {
  const listOfNames = document.getElementById("movie-list");
  listOfNames.innerHTML = movies
    .map((m, index) => movieCard(m, index))
    .join("");

  // console.log(moviesImages);
  // listOfImages.innerHTML = moviesImages
  //   .map((m, index) => movieImage(m, index))
  //   .join("");
}

// function addMovieDOM() {
//   const movieNameField = document.getElementById("movie-name");
//   const movieName = movieNameField.value;
//   console.log("ADDING MOVIE", movieName);
//   movieNameField.value = "";
//   addMovie(movieName);
// }

function movieCard({ name, image, id, ranking }) {
  return String.raw`
  <div class="card" id="movie-${id}">
    <div class="card-body">
      <div>
      <img class="img-thumbnail" src="${image}" />
        <h5 class="card-title"><b>${name}</b></h5>
        <p class="p">Rank: ${ranking}</p>
      </div>
    </div>
  </div>`;
}

function movieImage(imageName, id) {
  return String.raw`
  <div class="card" id="movie-image-${id}">
    <div class="card-body">
      <div>
        <img src="${imageName}" height=100px />
      </div>
    </div>
  </div>`;
}

function filterDOM() {
  const queryField = document.getElementById("movie-query");
  console.log("DOM Filter", queryField.value);
  filterMovies(queryField.value);
}

render(movies);
