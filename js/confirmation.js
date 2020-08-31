let prix = localStorage.getItem('prixTotal');
let section = document.getElementById('merci');
let totalPrix = document.createElement('p');
totalPrix.textContent = "Total de votre commande : " + prix +" €";


let commande = localStorage.getItem('commande');
let commandeJson = JSON.parse(commande);
            

                    let name = commandeJson.contact.firstName;
                    let surname = commandeJson.contact.lastName;
                    let address = commandeJson.contact.address;
                    let ville = commandeJson.contact.city;
                    let idClient = commandeJson.orderId;

                    let nom = document.createElement('p');
                    nom.textContent = "Merci " + name + ' ' + surname + " pour votre commande";

                    let adresse = document.createElement('p');
                    adresse.textContent = 'Votre colis vous sera livré à : ' + address + ' ' + ville;

                    let numeroCommande = document.createElement('p');
                    numeroCommande.textContent = "Votre numéro de commande est le : " + idClient;




section.appendChild(nom);
section.appendChild(adresse);
section.appendChild(numeroCommande);
            



section.appendChild(totalPrix);


