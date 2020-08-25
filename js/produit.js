

const url = window.location.search;
const params = new URLSearchParams(url);
let panier = new Panier();
let selectedColor = "";




fetch("http://localhost:3000/api/teddies/" + params.get('id')).then(response =>{
    return response.json();
}).then(elements =>{


    
    let section = document.getElementById('produit');
    let article = document.createElement('article');
    let nom = document.createElement('h2');
    nom.textContent = elements.name;
    let image = document.createElement('img');
    image.src = elements.imageUrl;
    let prix = document.createElement('p');
    prix.textContent = elements.price + " €";
    prix.setAttribute('id', "prix");

    let descr = document.createElement('p');
    descr.textContent = elements.description;
    let select = document.getElementById("selectNumber");
    let options = elements.colors;
    for (let i = 0; i < options.length; i++){
        let opt = options[i];
        let el = document.createElement('option');
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
        el.addEventListener("click", () =>{
            let sauvJson = JSON.stringify(opt);
            selectedColor = sauvJson;
            }, true); 
    };

    let bouton = document.createElement('button');
    bouton.setAttribute('class', "page panier");
    bouton.setAttribute('type', 'button');
    bouton.textContent = "ajout";
    bouton.addEventListener('click', () =>{
        elements.selectedColor = selectedColor;
        panier.ajoutPanier(elements);
        window.location = "./panier.html";
    })





    section.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(descr);
    article.appendChild(prix);
    article.appendChild(select)
    article.appendChild(bouton);



});





