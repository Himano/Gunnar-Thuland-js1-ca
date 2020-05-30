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
    const detTitle = manga.title;
    const detImage = manga.image;
    const detAuthor = manga.author;
    const detDescription = manga.description;
    const detChapters = manga.chapters.length;
    const detReleased = manga.released;

    const detailHTML = `
    <div class="detail-container">
    <img class="details-image" src="https://cdn.mangaeden.com/mangasimg/${detImage}" alt="Title/Name" />
    <div class="detail-details">
        <h1>${detTitle}</h1>
        <p>Author: <span class="value" id="propertyName">${detAuthor}</span></p>
        <p>Chapters: <span class="value" id="propertyName">${detChapters}</span></p>
        <p>Released: <span class="value" id="propertyName">${detReleased}</span></p>
        <p>summary: <span class="value" id="propertyName">${detDescription}</span></p>
    </div>
</div>
    
    `;
    document.querySelector(".container").innerHTML = detailHTML;
  })
  .catch(function (error) {
    console.dir(error);
  });
