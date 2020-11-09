// import { sample } from 'lodash';


let button = document.getElementById("generate");
let poem = document.getElementById("poem");

button.addEventListener("click", write);

var sentences = ["dog ate ball", "duck went quack", "ducks are water-chickens"]


function write() {
    var line = document.createElement("LI");
    var text = document.createTextNode(sentences[Math.floor(Math.random() * sentences.length)]);
    line.appendChild(text);
    poem.appendChild(line);

}




function getWords(callback) {
    var httpRequest = new XMLHttpRequest();
    const url='http://api.datamuse.com/words?ml=pig';
    httpRequest.onload = function(){ // when the request is loaded
       callback(httpRequest.responseText);// we're calling our method
    };
    httpRequest.open('GET', url);
    httpRequest.send();
}


getWords(function(result) {
    console.log(result)
});
