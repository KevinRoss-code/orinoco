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
               
                e.preventDefault();
                let formData = new FormData(formulaire);
                // test de formdata
                console.log(formData.get('user_name'));
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
                /**
                *
                * Expects request to contain:
                * contact: {
                *   firstName: string,
                *   lastName: string,
                *   address: string,
                *   city: string,
                *   email: string
                * }
                * products: [string] <-- array of product _id
                *
                */
                    let requestBody = {contact, products};
                    console.log(requestBody);
                    const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

                fetch("http://localhost:3000/api/teddies/order", {
                method: 'POST',
                headers: myHeaders,

                body: JSON.stringify(requestBody)
                }).then(respons => respons.json()).then(result => console.log(result));
               
                //verification(contact);

                    

                    //let sauvForm = JSON.stringify(contact);
                    //localStorage.setItem('client', sauvForm);
                //window.location = "./confirmation.html";
})




function verification(contact) {
                    // Récupérer la valeur des champs
                    contact.nom = document.getElementById('name').value;
                    contact.prenom = document.getElementById('surname').value;
                    contact.adresse = document.getElementById('adress').value;
                    contact.ville = document.getElementById('city').value;
                    contact.email = document.getElementById('mail').value;
                    
                    
                    if(contact.nom ==''){
                        alert('Vous devez compléter votre nom !');
                        document.getElementById('name').style.backgroundColor="red";
                        document.getElementById('name').style.color="#FFF";
                    
                    
                    return false;
                    }
                    if(contact.prenom ==''){
                        alert('Vous devez compléter votre prénom !');
                        document.getElementById('surname').style.backgroundColor="red";
                        document.getElementById('surname').style.color="#FFF";
                    
                    
                    return false;
                    }

                    if(contact.adresse==''){
                        alert('Vous devez compléter votre adresse !');
                    document.getElementById('adress').style.backgroundColor="red";
                    document.getElementById('adress').style.color="#FFF";
                    
                    
                    return false;
                    }

                    if(contact.ville==''){
                        alert('Vous devez compléter votre ville !');
                    document.getElementById('city').style.backgroundColor="red";
                    document.getElementById('city').style.color="#FFF";
                    
                    
                    return false;
                    }
                    else{
                    ///document.getElementsByTagName('input').style.backgroundColor="#9C6";
                    }
                    
                    // Contrôle sur l'email
                    if(contact.email=='') {
                    alert('Vous devez compléter votre adresse email');
                    document.getElementById('mail').style.backgroundColor="red";
                    document.getElementById('mail').style.color="#FFF";
                    return false;
                    }
                    
                    else{
                    document.getElementById('mail').style.backgroundColor="#9C6";
                    }
                    }



                    function validateEmail(email) {
                        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                        return re.test(email);
                        } 


           /*let section =  document.getElementById('panier');

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

            

            let form = document.getElementById("formulaire").addEventListener("submit", async function(e) {
                e.preventDefault();
                window.location = "./confirmation.html";
                let data = new FormData(form);
                let response = await fetch('http://localhost:3000/api/teddies/', {
                    method: 'POST',
                    body: data
                })
                let responsData = await response.json();
           
                let contact = {};
                verification(contact);
                //let sauvForm = JSON.stringify(contact);
                //localStorage.setItem('client', sauvForm);
                
            }); 
            
            
            

                
                


function verification(contact) {
                    // Récupérer la valeur des champs
                    contact.nom = document.getElementById('name').value;
                    contact.prenom = document.getElementById('surname').value;
                    contact.adresse = document.getElementById('adress').value;
                    contact.ville = document.getElementById('city').value;
                    contact.email = document.getElementById('mail').value;
                    
                    
                    if(contact.nom ==''){
                        alert('Vous devez compléter votre nom !');
                        document.getElementById('name').style.backgroundColor="red";
                        document.getElementById('name').style.color="#FFF";
                    
                    
                    return false;
                    }
                    if(contact.prenom ==''){
                        alert('Vous devez compléter votre prénom !');
                        document.getElementById('surname').style.backgroundColor="red";
                        document.getElementById('surname').style.color="#FFF";
                    
                    
                    return false;
                    }

                    if(contact.adresse==''){
                        alert('Vous devez compléter votre adresse !');
                    document.getElementById('adress').style.backgroundColor="red";
                    document.getElementById('adress').style.color="#FFF";
                    
                    
                    return false;
                    }

                    if(contact.ville==''){
                        alert('Vous devez compléter votre ville !');
                    document.getElementById('city').style.backgroundColor="red";
                    document.getElementById('city').style.color="#FFF";
                    
                    
                    return false;
                    }
                    else{
                    //document.getElementsByTagName('input').style.backgroundColor="#9C6";
                    }
                    
                    // Contrôle sur l'email
                    if(contact.email=='') {
                    alert('Vous devez compléter votre adresse email');
                    document.getElementById('mail').style.backgroundColor="red";
                    document.getElementById('mail').style.color="#FFF";
                    return false;
                    }
                    
                    else{
                    document.getElementById('mail').style.backgroundColor="#9C6";
                    }

                    
}
                    function validateEmail(email) {
                        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                        return re.test(email);
                        }
                        
                     
                        /*let formData = new FormData();
                        let searchParams = new URLSearchParams();
        
                        
                        fetch('http://localhost:3000/api/teddies/posts', {
                            method: 'post',
                            body: formData
                        }).then(response =>{
                            return response.text();
                        }).then(text =>{
                            console.log(text);
                        }).catch(erreur =>{
                            console.log(erreur);
                        })*/
        


                        
                        