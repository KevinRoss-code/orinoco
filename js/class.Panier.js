class Panier {
    constructor(){
        this.content = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    }

    ajoutPanier = (item) => {
        
            this.content.push(item);
            localStorage.setItem('panier', JSON.stringify(this.content));
        
        
    }
    supprimerPanier(){
        let choice = parseInt(document.getElementById('supp').value);
        if (choice > 0 && choice <= this.ajouterLigne()){
            let produit = this.ajouterLigne()[choice-1];
        }
    }

    ajouterLigne(){
        document.getElementById('table');
        let ligne = ""
        for( let index = 0; index < this.content.length; index++){
            let ajoutLigne = table.insertRow(1);
            let ajoutCellule1 = ajoutLigne.insertCell(0);
            ajoutCellule1.innerHTML = '<input type="text" id="nameProduit">';
            //https://blog.arcoptimizer.com/options-de-stockage-dans-le-navigateur-partie-1
            let name =  JSON.parse(localStorage.getItem('panier'));
            let cle = Object.keys("name");
            console.log(cle);
            document.getElementById("nameProduit").value = this.content;
            
            console.log(name);
            let ajoutCellule2 = ajoutLigne.insertCell(1);
            ajoutCellule2.textContent = "price";
            let cellDelet = ajoutLigne.insertCell(2);
            cellDelet.innerHTML = '<input type="button" value="supprimer" id="supp">';
            cellDelet.addEventListener('click', () => {
                this.supprimerPanier();
            })
        }
        
    }
    ajouterLignePrix(){
        let table = document.getElementById("table");
        let ajoutLigne2 = table.insertRow(2);
        let ajoutCellule = ajoutLigne2.insertCell(0);
        ajoutCellule.textContent = 'Total';
        let ajoutCellPrice = ajoutLigne2.insertCell(1);
        ajoutCellPrice.innerHTML = this.additionPrix();
    }


    additionPrix(){
        document.getElementById("table");
        let totalPrice = 0
            for(let index = 0; index < this.content.length; index++){
                totalPrice += this.content[index].price
            }
            return totalPrice;
          

        
    }
}

