let articlesElt = document.getElementById("x");
fetch("http://localhost:3000/api/teddies").then(response =>{
    return response.json();
}).then(elements =>{
    elements.forEach ( elements => {
        let article = document.createElement("artcile")
        let titreElt = document.createElement("h2");
        titreElt.textContent = elements.name;
        let imageElt = document.createElement("img");
        imageElt.src = elements.imageUrl;
        articlesElt.appendChild(article);
        article.appendChild(titreElt);
        article.appendChild(imageElt);
        
    });
   function versPageDeux (){
       document.location.href="G:/open/orinoco/front_end/produit.html"
   }
});

