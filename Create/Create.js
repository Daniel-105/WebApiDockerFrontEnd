var settings = {
  url: "http://localhost:8080/Movie",
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    id: 0,
    name: "string",
    year: 0,
  }),
};

const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const movieTitle = document.querySelector("#movieTitle").value;
  const movieYear = document.querySelector("#movieYear").value;

  console.log(movieYear);
  var settings = {
    url: "http://localhost:8080/Movie",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      id: 0,
      name: movieTitle,
      year: Number.parseInt(movieYear),
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
