let prix = localStorage.getItem('prixTotal');
let section = document.getElementById('flemme');
let div = document.createElement('p');
div.textContent = "Total de votre commande " + prix +"€";

function client(){
    let contact = localStorage.getItem('client');
    //json.parse pas besoin boucle
    for( let index = 0; index < contact.length; index++){
        document.getElementById('merci').innerHTML = contact[index].nom;
    }
}
client();

//console.log(contact);


section.appendChild(div);
//console.log(prix);