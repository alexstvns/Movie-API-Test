


function SearchFunction (){

let SearchResults = document.querySelector('.Results-Container');

  var results = [];
  // For testing, creates 10  result card elements and adds them to
  // the results container  
  for (var i = 0; i < 10; i++){
      results.push(DemoResults());
  }



 // console.log(results);
  results.forEach(element => {
    SearchResults.append(element);
  });
  



}


function ResultBuilder(heading, para){

    var resultNode = document.createElement("div");
    resultNode.classList.add('Result-Card');
    var imgNode = document.createElement('div');
    imgNode.classList.add('Result-Image');
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
    let demoResult = ResultBuilder('Movie Title Is Here', 'This is where the data goes here for the movies')
    console.log(demoResult);
    return demoResult;
}