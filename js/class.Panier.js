class Panier {
    constructor(){
        this.content = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    }

    ajoutPanier = (item) => {
        
            this.content.push(item);
            localStorage.setItem('panier', JSON.stringify(this.content));
        
        
    }
    supprimerPanier(item){
        let produit = this.content.find(elements => elements._id === choice);
        if(produit != undefined){
            let index = this.content.indexOf(item);
            this.content.splice(index, 0);
            localStorage.setItem("panier", JSON.stringify(this.content))
        }
    }

    afficherPanier = () => {
        let produit = document.getElementById('table');
        produit.innerHTML = "";
        this.content.forEach(elements => {
            let colonnes = document.createElement("td");
            colonnes.classList.add('prix');
            colonnes.innerHTML = `${elements.price}`

        });
        
    }
    additionPrix(){
        document.getElementById("table");
        let totalPrice = 0
            for(let index = 0; index < this.content.length; index++){
                totalPrice += this.content[index].price
            }
            console.log(totalPrice);
          

        
    }
}

