// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("I loaded");
//   console.log(this);
// };

// req.onerror = function () {
//   console.log("Error loading");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
// };

// req.open("GET", "http://swapi.dev/api/people/1/");
// req.send();

// fetch is more easy then above way
fetch("http://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("resolved!", res);
    res.json().then((data) => console.log("Json Done", data));
  })
  .then((data) => {
    console.log(data);
  })
  .then((res) => {
    console.log("second request resolved ");
    return res.json();
  })
  .catch((e) => {
    console.log("error", e);
  });
