let myText;

function setup() {
  createCanvas(600, 600);

  //load text as strings
  fetch("synthesizer.txt")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
    console.log(text);
   })
  .catch((e) => console.error(e));

  //load string file as array
  myText = loadStrings("synthesizer.txt");
  console.log(myText);
  
}

function draw() {

  

}




