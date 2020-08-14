let prix = localStorage.getItem('prixTotal');
let section = document.getElementById('flemme');
let div = document.createElement('p');
div.textContent = "Total de votre commande : " + prix +"€";



    let contact = localStorage.getItem('client');
    let contactTry = JSON.parse(contact);

    document.getElementById('merci').innerHTML = 'Merci pour votre commande : ' + contactTry.nom + ' ' + contactTry.prenom + '</br>' + 'Votre commande vous sera envoyé au : ' + contactTry.adresse + ' ' + contactTry.ville;


section.appendChild(div);