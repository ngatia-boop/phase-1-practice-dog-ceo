console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imageContainer = document.getElementById("dog-image-container");

  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "A random dog";
        img.style.width = "200px";
        imageContainer.appendChild(img);
      });
    });
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("dog-breeds");

let allBreeds = [];

fetch(breedUrl)
  .then((res) => res.json())
  .then((data) => {
    allBreeds = Object.keys(data.message); // Save the list for filtering later
    renderBreeds(allBreeds);
  });

function renderBreeds(breeds) {
  breedList.innerHTML = ""; // clear previous list
  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.textContent = breed;
    breedList.appendChild(li);
  });
}

breedList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.color = "teal"; // or any color
  }
});

const dropdown = document.getElementById("breed-dropdown");

dropdown.addEventListener("change", function (e) {
  const selectedLetter = e.target.value;
  const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter));
  renderBreeds(filteredBreeds);
});


