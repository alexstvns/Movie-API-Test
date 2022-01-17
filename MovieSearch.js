let rMax = Math.random() *10 +1;

function SearchFunction (){

let SearchResults = document.querySelector('.Results-Container');

//clear results and then create random max count.
if(SearchResults.firstChild){
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild);
    }
    rMax = Math.random() *10 +1;
}


  
  var results = [];
  // For testing, creates 10  result card elements and adds them to
  // the results container  
  for (var i = 0; i < rMax; i++){
      results.push(DemoResults());
  }



 // console.log(results);
  results.forEach(element => {
    SearchResults.append(element);
  });
  
 //let ShowOff = ResultBuilder('https://flxt.tmsimg.com/assets/p13606_p_v10_am.jpg','Hook','A movie about an adult Peter Pan, and adults finding happy thoughts');
 //SearchResults.append(ShowOff);

}


function ResultBuilder(img, heading, para){

    var resultNode = document.createElement("div");
    resultNode.classList.add('Result-Card');
    var imgNode = document.createElement('div');
    imgNode.classList.add('Result-Image');
    imgNode.style.backgroundImage = `url(${img})`;
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


function DemoResults() {
    // call this function when you need to test card creation/population. 
    let demoResult = ResultBuilder('./img/camera-roll.jpg', 'Movie Title Is Here', 'This is where the data goes for the movies once the API is hooked up')
    console.log(demoResult);
    return demoResult;
}

