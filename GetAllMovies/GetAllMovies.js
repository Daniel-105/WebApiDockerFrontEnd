const settings = {
  url: "http://localhost:8080/Movie/GetAllMovies",
  method: "GET",
  timeout: 0,
};

const button = document.querySelector("#submit");
const moviesContainer = document.querySelector(".movies-container");

button.addEventListener("click", (e) => {
  e.preventDefault();
  $.ajax(settings).done(function (response) {
    const movieDiv = document.createElement("div");

    response.forEach((element) => {
      const populatedDivs = createPopulatedMovieData(element);
      const movie = populatedDivs.find((innerText) =>
        innerText.innerText.includes("Movie")
      );
      const year = populatedDivs.find((innerText) =>
        innerText.innerText.includes("Year")
      );

      movieDiv.append(movie);
      movieDiv.append(year);
    });
    moviesContainer.append(movieDiv);
  });
});

function createPopulatedMovieData(element) {
  let listData = [];

  const movieSpan = document.createElement("div");
  movieSpan.innerText = `Movie: ${element.name}`;
  const yearSpan = document.createElement("div");
  yearSpan.innerText = `Year: ${element.year}`;

  listData.push(movieSpan);
  listData.push(yearSpan);

  return listData;
}
