class Panier {
    constructor(){
        this.content = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];
    }
ajoutPanier = (item) => {
    //Sauve l'élément pour par la suite ajouter au tableau 
    this.content.push(item);
    localStorage.setItem('panier', JSON.stringify(this.content));
}
ajouterLigne(){
    document.getElementById('table');
    let ligne = "";
    //boucle pour afficher l'élement de façon dynamique dans le tableau
    for( let index = 0; index < this.content.length; index++){
    let ajoutLigne = table.insertRow(1);
    ajoutLigne.id = 'produit_' + index;
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
    //ajout le prix de l'élément de façon dynamique
    let table = document.getElementById("table");
    let ajoutLigne2 = table.insertRow();
    let ajoutCellule = ajoutLigne2.insertCell(0);
    ajoutCellule.textContent = 'Total';
    let ajoutCellPrice = ajoutLigne2.insertCell(1);
    ajoutCellPrice.id = "totalPrice";
    ajoutCellPrice.innerHTML = this.additionPrix();
}
additionPrix(){
    //permet de faire l'addition de tous les prix
    document.getElementById("table");
    let totalPrice = 0
        for(let index = 0; index < this.content.length; index++){
            totalPrice += this.content[index].price
        }
    localStorage.setItem('prixTotal', totalPrice);
    return totalPrice;
}
supprimerPanier(event){
    //enleve l'espace entre l'élément et l'id
    let id = event.target.id.split('_')[1];
    this.content.splice(id, 1);
    //on sauvegarde la manip
    localStorage.setItem('panier', JSON.stringify(this.content));
    //faire en deux temps avec variable
    let produit = document.getElementById('produit_'+ id)
    //permet de supprimer la ligne en remontant au noeud 
    produit.parentNode.removeChild(document.getElementById('produit_'+ id));
    document.getElementById('totalPrice').textContent = this.additionPrix();
}
}

