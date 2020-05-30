const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = "https://www.mangaeden.com/api/";
const mangaList = `${baseUrl}manga/`;
const detailsUrl = `${mangaList}${id}`;

fetch(detailsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (manga) {
    createDetails(manga);
    const detailHTML = `
    <div class="detail-container">
    <img class="details-image" src="https://cdn.mangaeden.com/mangasimg/${data[i].image}" alt="Title/Name" />
    <div class="detail-details">
        <h1>${data.title}</h1>
        <p>Also known as: <span class="value" id="propertyName">${data[i].aka[0]}</span></p>
        <p>Author: <span class="value" id="propertyName">${data[i].author}</span></p>
        <p>Released: <span class="value" id="propertyName">${data[i].released}</span></p>
        <p>summary: <span class="value" id="propertyName">${data[i].description}</span></p>
    </div>
</div>
    
    `;
    document.querySelector(".container").innerHTML = detailHTML;
  })
  .catch(function (error) {
    console.dir(error);
  });

function createDetails(details) {
  console.dir(details);
}
