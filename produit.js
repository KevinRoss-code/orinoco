let articlesElt = document.getElementById("produit");
fetch("http://localhost:3000/api/teddies").then(response =>{
    return response.json();
}).then(elements =>{
    elements.forEach ( elements => {
        let id = elements._id;
        if (id = true){
                let article = document.createElement('article');
                let nom = document.createElement('h2');
                nom.textContent = elements.name;
                let image = document.createElement('img');
                image.src = elements.imageUrl;
                let description = document.createElement('p');
                description.textContent = elements.description;
                let couleur = document.createElement('button');
                couleur.textContent = "Choisir la couleur";
                let prix = document.createElement('p');
                prix.textContent = elements.price;
        
            articlesElt.appendChild(article);
            article.appendChild(nom);
            article.appendChild(image);
            article.appendChild(description);
            article.appendChild(couleur);
            article.appendChild(prix);
            
            couleur.setAttribute('id', "couleurs");
            let couleurs = document.getElementById('couleurs').addEventListener('click', (elements) => {
                elements.colors;
            })
            
            
            }else{
                return false;
        }
            })
    
    
});


