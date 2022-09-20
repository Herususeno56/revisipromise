const livesearch = document.getElementById("cari");

function displayNews(options){
fetch(options)
  .then((response) => response.json())
  .then((data) => dataOrang(data['articles']))
  .then((data1) => datapecah(data1))
  .then((data1) => tabel(data1));
  // .then((data1) => console.log(data1));
                   }
function dataOrang(orang){
var dataOrang1=orang;
  return dataOrang1;
}

function datapecah(dataorg){
var data1a=dataorg;
  var rangkumData='';


  for(i = 0; i < data1a.length ; i++){
   rangkumData += `<div class="col-12 col-sm-6 col-md-8">
   <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data1a[i] ['urlToImage']}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data1a[i] ['title']}</h5>
    <p class="card-text">${data1a[i]['author']}</p>
    <p class="card-text">${data1a[i] ['description']}</p>
    <a href="${data1a[i] ['url']}" class="btn btn-primary"> tombol </a>
  </div>
  </div>
</div>`;
  }

return ` ${rangkumData} `;
}
function tabel(data){
  document.getElementById("promise").innerHTML = data;
}


livesearch.addEventListener('input', cari1);
function cari1 (text){
  var task=text.target.value;
console.log (task);
if (task.length > 1) {
    options = ` https://newsapi.org/v2/everything?q=${task}&apiKey=999a027a1f944c04b2b07562a8623400`;
    displayNews(options);   
  } else {
    options = `https://newsapi.org/v2/top-headlines?country=us&apiKey=999a027a1f944c04b2b07562a8623400`;
    displayNews(options); 
  }
}
  displayNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=999a027a1f944c04b2b07562a8623400`);