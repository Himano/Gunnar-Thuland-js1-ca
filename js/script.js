const baseUrl = "https://www.mangaeden.com/api/";
const mangaList = `${baseUrl}list/1/`;

function mangaInformation(json) {
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);


  }


}

fetch(mangaList)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json.manga.slice(1301, 1309));
    mangaInformation(json.manga.slice(1301, 1309))
  })
  .catch(function (error) {
    console.dir(error);
  });


/*
     const generateHtml = `<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card">
      <img class="image" src="https://cdn.mangaeden.com/mangasimg/${mangaInformation.im}" alt="${mangaInfo.t} cover photo" />
      <div class="details">
          <h4 class="name">${mangaInformation.t}</h4>
          <p><b>Category:</b>${mangaInformation.c}</p>
          <p><b>Clicks:</b> ${mangaInformation.h}</p>
          <a class="btn btn-primary" href="details.html?id=${mangaInfo.i}">Details</a>
      </div>
  </div>
</div>`;

    document.querySelector(".results").innerHTML = generateHtml;
    */