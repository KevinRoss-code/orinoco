

const url = window.location.search;
const params = new URLSearchParams(url);



//document.getElementById("produit").textContent = params.get('id');

fetch("http://localhost:3000/api/teddies/" + params.get('id')).then(response =>{
    return response.json();
}).then(elements =>{
       //penser à faire document.getElementById
      let section = document.getElementById('produit');
      let article = document.createElement('article');
       let nom = document.createElement('h2');
       nom.textContent = elements.name;
       let image = document.createElement('img');
       image.src = elements.imageUrl;
       let prix = document.createElement('p');
       prix.textContent = elements.price + " €";
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
      };

   let bouton = document.createElement('input');
    bouton.setAttribute('type', "button");
    bouton.setAttribute('value', 'ajouter au panier');    
    let lien = document.createElement('a');
    lien.setAttribute("herf", "panier.html");

    




    section.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(prix);
    article.appendChild(descr);
    article.appendChild(lien);
    lien.appendChild(bouton);
    });

    

