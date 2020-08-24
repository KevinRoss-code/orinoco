let panier = new Panier();

let section =  document.getElementById('panier');

            let tableau= document.createElement("table");
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
           
           let form = document.getElementById("formulaire").addEventListener("submit", function(e) {
               
            validation();
                e.preventDefault();
                
                
                
                let formData = new FormData(formulaire);

                
                // il faut créer le contact 
                let contact = {};
                let products = []
                contact.firstName = formData.get('user_surname');
                contact.lastName = formData.get('user_name');
                contact.address = formData.get('user_adress');
                contact.city = formData.get('user_city');
                contact.email = formData.get('user_mail');
                panier.content.forEach(elt => {
                    products.push(elt._id)
                })



                // il faut penser à envoyer aussi la liste des id des produits dans le panier (cf backend)
                
                
                    let requestBody = {contact, products};
                    //console.log(requestBody);
                    const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

                fetch("http://localhost:3000/api/teddies/order", {
                method: 'POST',
                headers: myHeaders,

                body: JSON.stringify(requestBody)
                }).then(respons => respons.json()).then(result => console.log(result));
               

                

                localStorage.setItem('contact', JSON.stringify(requestBody));
                //Object.getOwnPropertyNames(contactJson).forEach (key =>{
                   // let name = contactJson[key].firstName;
                    //console.log(name);
                //})
                //let contactJson = JSON.parse(JSON.stringify(requestBody));
                //console.log(contactJson);
                

                    

                
})

 function validation(){
     // Récupérer la valeur des champs
     let nom = document.getElementById('name');
     let prenom = document.getElementById('surname');
     let adresse = document.getElementById('adress');
     let ville = document.getElementById('city');
     let email = document.getElementById('mail');
     
     let regexTexte = /^[a-zA-Z-\s]+$/;
     
     let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     if (nom.value == ""){
         let myErreur = document.getElementById("erreur");
         myErreur.innerHTML = 'le champs est vide';
         myErreur.style.color = 'red';
         
     } else if (regexTexte.test(nom.value) == false) {
        let myErreur = document.getElementById("erreur");
        myErreur.innerHTML = 'Synthaxe non valide';
        myErreur.style.color = 'red';
        
     }

     if (prenom.value == ""){
        let myErreur = document.getElementById("erreur2");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        
    } else if (regexTexte.test(prenom.value) == false) {
       let myErreur = document.getElementById("erreur2");
       myErreur.innerHTML = 'Synthaxe non valide';
       myErreur.style.color = 'red';
       }

       if (adresse.value == ""){
        let myErreur = document.getElementById("erreur3");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        
    } else if (adresse == true) {
       console.log(adresse)
    }

    if (ville.value == ""){
        let myErreur = document.getElementById("erreur4");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        
    } else if (regexTexte.test(ville.value) == false) {
       let myErreur = document.getElementById("erreur4");
       myErreur.innerHTML = 'Synthaxe non valide';
       myErreur.style.color = 'red';
       
    }

    if (email.value == ""){
        let myErreur = document.getElementById("erreur5");
        myErreur.innerHTML = 'le champs est vide';
        myErreur.style.color = 'red';
        
    } else if (regexEmail.test(email.value) == false) {
       let myErreur = document.getElementById("erreur5");
       myErreur.innerHTML = 'Synthaxe non valide';
       myErreur.style.color = 'red';
       
    } else {
        //trouver un moyen que ça se déclanche que si tout est bon
        return window.location = "./confirmation.html";      
    }
 }






                        
                        