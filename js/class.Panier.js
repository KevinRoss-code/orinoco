class Panier {
    constructor(){
        this.content = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    }

    ajoutPanier = (item) => {
        if(item === ""){
            this.content.push(item);
            localStorage.setItem('panier', JSON.stringify(this.content));
        }
        
    }
    supprimerPanier(item){

    }

    afficherPanier = () => {
        
    }
}

