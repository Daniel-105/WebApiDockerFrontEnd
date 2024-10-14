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
      const movieSpan = document.createElement("div");
      movieSpan.innerText = `Movie: ${element.name}`;
      movieDiv.append(movieSpan);

      const yearSpan = document.createElement("div");
      yearSpan.innerText = `Year: ${element.year}`;
      movieDiv.append(yearSpan);
    });
    moviesContainer.append(movieDiv);
  });
});
