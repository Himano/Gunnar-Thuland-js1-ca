const baseUrl = "https://www.mangaeden.com/api/";
const mangaList = `${baseUrl}list/1/`;

fetch(mangaList)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    mangaInformation(json.manga.slice(1301, 1309));
  })
  .catch(function (error) {
    console.dir(error);
  });

function mangaInformation(data) {
  const contentContainer = document.querySelector(".content");

  html = "";
  for (let i = 0; i < data.length; i++) {
    const title = data[i].t;
    const category = data[i].c;
    const hits = data[i].h;
    const image = data[i].im;
    const id = data[i].i;

    console.log(data[i]);

    html += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <img class="image" src="https://cdn.mangaeden.com/mangasimg/${image}" alt="${title} Cover photo" />
        <div class="details">
            <h4 class="name">${title}</h4>
            <p><b>Category: </b> ${category}</p>
            <p><b>Hits: </b>${hits}</p>
            <a class="btn btn-primary" href="details.html?id=${id}">Details</a>
        </div>
    </div>
</div>`;

    contentContainer.innerHTML = html;
  }
}

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
