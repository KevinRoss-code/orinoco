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
           

                    let contact = {};
                    Verification(contact);

                    

                    let sauvForm = JSON.stringify(contact);
                    localStorage.setItem('client', sauvForm);
                window.location = "./confirmation.html";
                    })
                    
            




            
            

            
	 
               /* let erreur;
             
                let inputs = this.getElementsByTagName("input");
             
                for (let i = 0; i < inputs.length; i++) {
                    console.log(inputs[i]);
                    if (!inputs[i].value) {
                        erreur = "Veuillez renseigner tous les champs";
                    }
                }
             
                if (erreur) {
                    e.preventDefault();
                    document.getElementById("erreur").innerHTML = erreur;
                    return false;
                } else {
                    alert('Formulaire envoyé !');
                }
             
             
                let name = document.getElementById("name");
                let surname = document.getElementById("surname");
                let adress = document.getElementById("adress");
                let city = document.getElementById("city");
                let email = document.getElementById("mail");
                
                
             
                if (!email.value) {
                    erreur = "Veuillez renseigner un email";
                }
                if (!city.value) {
                    erreur = "Veuillez renseigner une ville";
                }
                if (!adress.value) {
                    erreur = "Veuillez renseigner une adresse";
                }
                if(!surname.value) {
                    erreur = "Veuillez renseigner un prénom";
                }
                if(!name.value){
                    erreur = "Veuillez renseigner un nom"
                }
            })

            //let formDate = new FormData([formulaire]);

            /*formulaire.onsubmit = async (e) =>{
                document.getElementById('formulaire').addEventListener("submit", (e) =>{
                    e.preventDefault(); 
                    alert('Formulaire envoyé')
                })
            }
                

              
                let response = await fetch("http://localhost:3000/api/teddies/", {
                    method: 'POST',
                    body: new FormData(formulaire)
                });

                //let result = await response.json();
                //alert(result.message);
            }
        document.getElementById("envoi").addEventListener('click', () => {
            let sauv = JSON.stringify(formulaire);
            localStorage.setItem('contact', sauv);
        })
            
    
    
            
            
            
            
            


            
           

    
      /*let order = {
            contact: {
                    firstName:  contact.ajoutNom(),
                    lastName: contact.ajoutPrenom(),
                    address:  contact.ajoutAdresse(),
                    city: contact.ajoutVille(),
                    email:  contact.ajoutEmail()
                },
             products: []
        }
        
        fetch('http://localhost:3000/api/teddies/order', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(order)
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    console.log(data);
                    alert(data.orderId);
        
                })*/

function Verification(contact) {
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