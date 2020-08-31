//appel de l'api 
let articlesElt = document.getElementById("x");
fetch("http://localhost:3000/api/teddies").then(response =>{
    return response.json();
}).then(elements =>{
    //permet d'afficher les éléments de l'api
    elements.forEach ( elements => {
        let article = document.createElement("article");
        let titreElt = document.createElement("h2");
        titreElt.textContent = elements.name;
        let imageElt = document.createElement("img");
        imageElt.src = elements.imageUrl;
        let idElt = document.createElement("p");
        idElt.textContent = elements._id;
        
         let lien = document.createElement('a');
        lien.setAttribute('href', "produit.html?" + "id=" + `${elements._id}`)  ;

        //permet d'afficher les éléments dans le html
        article.appendChild(titreElt);
        article.appendChild(lien);
        articlesElt.appendChild(article);
        lien.appendChild(imageElt);
        article.appendChild(idElt);
       
    
    });
    
});

