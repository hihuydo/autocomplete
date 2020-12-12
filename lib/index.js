// TODO: Autocomplete the input with AJAX calls.
const inputField = document.getElementById("search");
const resultsList = document.getElementById("results");

const fetchData = (userSearch) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${userSearch}`)
    .then(response => response.json())
    .then((data) => {
      // return data.words; // => Array
      data.words.forEach((word) => {
        resultsList.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
      });
    });
};

// const updateList = (words) => {
//   words.forEach((word) => {
//     let listItems = `<li>${word}</li>`;
//     resultsList.insertAdjacentHTML("beforeend", listItems);
//   });
// };

inputField.addEventListener("keyup", (event) => {
  const userSearch = inputField.value;
  resultsList.innerHTML = "";
  // console.log(userSearch);
  const results = fetchData(userSearch);
  // console.log(results);
  // updateList(results);
});
