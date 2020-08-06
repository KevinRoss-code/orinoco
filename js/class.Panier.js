class Panier {
    constructor(){
        this.content = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    }

    ajoutPanier = (item) => {
        
            this.content.push(item);
            localStorage.setItem('panier', JSON.stringify(this.content));
        
        
    }
    
    ajouterLigne(){
        document.getElementById('table');
        let ligne = "";
        for( let index = 0; index < this.content.length; index++){
            let ajoutLigne = table.insertRow(1);
            let ajoutCellule1 = ajoutLigne.insertCell(0);
            ajoutCellule1.innerHTML = '<input type="text" id="nameProduit">';
            document.getElementById("nameProduit").value = this.content[index].name;
            let ajoutCellule2 = ajoutLigne.insertCell(1);
            ajoutCellule2.innerHTML = '<input type="text" id="prixProduit">';
            document.getElementById('prixProduit').value = this.content[index].price;
            let cellDelet = ajoutLigne.insertCell(2);
            cellDelet.innerHTML = `<input type="button" value="supprimer" id="supp_${index}">`;
            cellDelet.addEventListener('click', (e) => {
                this.supprimerPanier(e);
            })
        }
        
    }
    ajouterLignePrix(){
        let table = document.getElementById("table");
        let ajoutLigne2 = table.insertRow();
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

    supprimerPanier(event){

        let choice = localStorage.getItem('panier');
        let idElementPanier = JSON.parse(choice);
        let index = this.content.indexOf(idElementPanier);
        this.content.splice(index, -1);
        alert('fait');

        //let idPAnier = event.target.id.split('_')[1];
        //alert(idPAnier);
    }

}

