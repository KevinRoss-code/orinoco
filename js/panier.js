let panier = new Panier();
let section = document.getElementById('panier');

let tableau = document.createElement("table");
tableau.setAttribute('id', 'table');
let teteTable = document.createElement("thead")
let ligne = document.createElement("tr");
let titreName = document.createElement('th');
titreName.textContent = 'Article(s)';
let titrePrix = document.createElement('th');
titrePrix.textContent = "Prix";
section.appendChild(tableau);
tableau.appendChild(teteTable);
teteTable.appendChild(ligne);
ligne.appendChild(titreName);
ligne.appendChild(titrePrix);
panier.ajouterLigne();
panier.ajouterLignePrix();

let form = document.getElementById("formulaire").addEventListener("submit", function (e) {
    e.preventDefault();
    //Mise en place de formData
    let formData = new FormData(formulaire);
    // il faut créer le contact 
    let contact = {};
    let products = []
    //Créer le champs pour les récuperer plus tard 
    contact.firstName = formData.get('user_surname');
    contact.lastName = formData.get('user_name');
    contact.address = formData.get('user_adress');
    contact.city = formData.get('user_city');
    contact.email = formData.get('user_mail');
    panier.content.forEach(elt => {
        products.push(elt._id)
    })

    if (validation(contact)) {
        //envoi des données des champs pour formData
        let requestBody = { contact, products };
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        fetch("http://localhost:3000/api/teddies/order", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(requestBody)
        }).then(respons => respons.json()).then(result => {
            console.log(result);
            localStorage.setItem('commande', JSON.stringify(result));
            window.location = "./confirmation.html";
        });
    }
})

function validation(contact) {
    let itsOk = true;
    //regex pour savoir quel caractère nous voulons dans les champs 
    let regexTexte = /^[a-zA-Z-\s]+$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Permet de bloquer l'envoi si les champs ne sont pas remplis correctement
    if (contact.lastName == "") {
        let myErreur = document.getElementById("erreur");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (regexTexte.test(contact.lastName) == false) {
        let myErreur = document.getElementById("erreur");
        myErreur.innerHTML = 'Synthaxe non valide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (contact.firstName == "") {
        let myErreur = document.getElementById("erreur2");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (regexTexte.test(contact.firstName) == false) {
        let myErreur = document.getElementById("erreur2");
        myErreur.innerHTML = 'Synthaxe non valide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (contact.address == "") {
        let myErreur = document.getElementById("erreur3");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (contact.city == "") {
        let myErreur = document.getElementById("erreur4");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (regexTexte.test(contact.city) == false) {
        let myErreur = document.getElementById("erreur4");
        myErreur.innerHTML = 'Synthaxe non valide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (contact.email == "") {
        let myErreur = document.getElementById("erreur5");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        itsOk = false;
    }
    if (regexEmail.test(contact.email) == false) {
        let myErreur = document.getElementById("erreur5");
        myErreur.innerHTML = 'Synthaxe non valide';
        myErreur.style.color = 'red';
        itsOk = false;
    };
    return itsOk;
}







