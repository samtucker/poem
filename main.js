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