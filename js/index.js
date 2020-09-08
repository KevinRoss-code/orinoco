//appel de l'api 
retrieveContent('http://localhost:3000/api/teddies').then(elements => {
    //permet d'afficher les éléments de l'api
    elements.forEach(element => {
        affichage(element, "x")
    });
}).catch(error => { document.getElementById('x').innerHTML = '<h1>Erreur</h1>' });

function affichage(element, container) {
    let articlesElt = document.getElementById(container);
    let article = document.createElement("article");
    let titreElt = document.createElement("h2");
    titreElt.textContent = element.name;
    let imageElt = document.createElement("img");
    imageElt.src = element.imageUrl;
    let idElt = document.createElement("p");
    idElt.textContent = element._id;
    let lien = document.createElement('a');
    lien.setAttribute('href', "produit.html?" + "id=" + `${element._id}`);
    //permet d'afficher les éléments dans le html
    article.appendChild(titreElt);
    article.appendChild(lien);
    articlesElt.appendChild(article);
    lien.appendChild(imageElt);
    article.appendChild(idElt);
}

