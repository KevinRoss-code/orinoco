console.log('bonjour')
fetch("http://localhost:3000/api/cameras").then(response =>{
    return response.json();
}).then(elements =>{
    console.log(elements)
})

let img = document.createElement("img");
img.src = "images/vcam_1.jpg";
img.setAttribute("style", "width:30em", "height:30em");
let img2 = document.createElement("img");
img2.src = "images/vcam_2.jpg";
img2.setAttribute("style", "width:30em", "height:30em");
let img3 = document.createElement("img");
img3.src = "images/vcam_3.jpg";
img3.setAttribute("style", "width:30em", "height:30em");
let img4 = document.createElement("img");
img4.src = "images/vcam_4.jpg";
img4.setAttribute("style", "width:30em", "height:30em");
let img5 = document.createElement("img");
img5.src = "images/vcam_5.jpg";
img5.setAttribute("style", "width:30em", "height:30em");




let div = document.getElementById("x");
div.appendChild(img);
let div2 = document.getElementById("x");
div.appendChild(img2);
let div3 = document.getElementById("x");
div.appendChild(img3);
let div4 = document.getElementById("x");
div.appendChild(img4);
let div5 = document.getElementById("x");
div.appendChild(img5);

