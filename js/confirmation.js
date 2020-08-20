let prix = localStorage.getItem('prixTotal');
let section = document.getElementById('flemme');
let div = document.createElement('p');
div.textContent = "Total de votre commande : " + prix +"€";



    


    
    fetch("http://localhost:3000/api/teddies/", {
        method: 'GET',
    
    }).then(response =>{
        return response.json();
    }).then(response =>{
        response.forEach(element => {
            document.getElementById('merci');
            let remerciment = document.createElement("p");
        remerciment.textContent = element.lastName;

        section.appendChild(remerciment);
        });
        

        
    })


section.appendChild(div);
