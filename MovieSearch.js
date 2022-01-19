var results;
var rMax;
var SearchResults;

function init() {
    rMax = Math.random() *25 +1;

    results = [];
    
    SearchResults = document.querySelector('.Results-Container');

}





function SearchFunction(){


//clear results and then create random max count.
if(SearchResults.firstChild){
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild);
        results = [];
    }
    rMax = Math.random() *25 +1;
}


let searchString = document.getElementById('Movie-Search-Input').value;

console.log(searchString);
MovieDBAPI(searchString);
//MovieDBAPI('Robin Williams');

console.log(results);

results.forEach(element => {
    SearchResults.append(element);
  });

  // For testing, creates 10  result card elements and adds them to
  // the results container  
  /*
  for (var i = 0; i < rMax; i++){
      results.push(DemoResults());
  }
*/
}


function ResultBuilder(img, heading, para){

    var resultNode = document.createElement("div");
    resultNode.classList.add('Result-Card');



    var imgNode = document.createElement('img');
    imgNode.classList.add('Result-Image');

    //Check to see if there are any null images, if so return the default image. 
    if(img === null){

        imgNode.src = "/img/camera-roll.jpg";

    }
    else {
        imgNode.src = `https://image.tmdb.org/t/p/original/${img}`;
    }

   
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
            console.log(res);
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
