let prix = localStorage.getItem('prixTotal');
let section = document.getElementById('merci');
let totalPrix = document.createElement('p');
totalPrix.textContent = "Total de votre commande : " + prix +" €";


let contact = localStorage.getItem('contact');
let contactJson = JSON.parse(contact);
            //console.log(contactJson);
            Object.getOwnPropertyNames(contactJson).forEach (key =>{
                    let name = contactJson[key].firstName;
                    let surname = contactJson[key].lastName;
                    let address = contactJson[key].address;
                    let ville = contactJson[key].city;

                    let nom = document.createElement('p');
                    nom.textContent = "Merci " + name + ' ' + surname + " pour votre commande";

                    let adresse = document.createElement('p');
                    adresse.textContent = 'Votre colis vous sera livré à : ' + address + ' ' + ville;


section.appendChild(nom);
section.appendChild(adresse);
                })



section.appendChild(totalPrix);


