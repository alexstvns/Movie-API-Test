let rMax = Math.random() *25 +1;

var results = [];


function SearchFunction (){

let SearchResults = document.querySelector('.Results-Container');

//clear results and then create random max count.
if(SearchResults.firstChild){
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild);
        results = [];
    }
    rMax = Math.random() *25 +1;
}
 


MovieDBAPI('Robin Williams');




  // For testing, creates 10  result card elements and adds them to
  // the results container  
  /*
  for (var i = 0; i < rMax; i++){
      results.push(DemoResults());
  }
*/




console.log(results);

  results.forEach(element => {
    SearchResults.append(element);
  });




}


function ResultBuilder(img, heading, para){

    var resultNode = document.createElement("div");
    resultNode.classList.add('Result-Card');

    var imgNode = document.createElement('div');
    imgNode.classList.add('Result-Image');

    imgNode.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${img})`;
    var headerNode = document.createElement('h2');
    var paraNode = document.createElement('p');

    let h = document.createTextNode(`${heading}`);
    let p = document.createTextNode(`${para}`);
    
    headerNode.appendChild(h);
    paraNode.appendChild(p);

    resultNode.appendChild(imgNode);
    resultNode.appendChild(headerNode);
    resultNode.appendChild(paraNode);

    


    return resultNode;
}


async function MovieDBAPI(searchQuery) {

    let key = '';
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        var totalResults = data.results;
        

        totalResults.forEach(res => {
            movieob = ResultBuilder(res.poster_path, res.original_title, res.overview);
            //console.log(res.poster_path);
            //console.log(res.original_title);
            //console.log(res.overview);
            results.push(movieob);
        });
        
    })
    .catch((error) => {
        console.error('Error: ', error);
    });


}




/* image links need to be directed to   https://image.tmdb.org/t/p/original/<url path goes here> */ 




function DemoResults() {
    // call this function when you need to test card creation/population. 
    let demoResult = ResultBuilder('./img/camera-roll.jpg', 'Movie Title Is Here', 'This is where the data goes for the movies once the API is hooked up')
    console.log(demoResult);
    return demoResult;
}
