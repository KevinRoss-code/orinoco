let order = {
    contact: {
            firstName: "Rossignol",
            lastName: "kevin",
            address: "3 place de la liberté",
            city: "Saint_Branchs",
            email: "loursenrage36@gmail.com"
        },
     products: ["5be9c8541c9d440000665243"] 
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


           let section =  document.getElementById('panier');

            let tableau= document.createElement("table");
            let cellule = document.createElement("tr");
            cellule.textContent = ('Résumer article');
            let ligne = document.createElement('td');
            let ligne2 = document.createElement('td');
            let ligne3 = document.createElement('td');
            ligne.textContent = localStorage.getItem('couleur');
            ligne2.textContent = localStorage.getItem('produit');
            ligne3.textContent = localStorage.getItem('prix');
            
            let formulaire = document.createElement('form');
            formulaire.setAttribute ('id', "formulaire");
            let labelName = document.createElement('label');
            labelName.textContent = 'Nom : '
            labelName.setAttribute  ('for', 'name');
            let inputName = document.createElement('input');
            inputName.setAttribute  ("type", 'text');
            inputName.setAttribute  ("id", 'name');
            inputName.setAttribute  ("name", 'user_name');

            let labelSurmane = document.createElement('label');
            labelSurmane.textContent = "Prénom : ";
            labelSurmane.setAttribute ('for', 'surname');
            let inputSurname = document.createElement('input');
            inputSurname.setAttribute ("type", 'text');
            inputSurname.setAttribute ("id", 'surname');
            inputSurname.setAttribute ("name", 'user_surname');
            
            let labelAdress = document.createElement('label');
            labelAdress.textContent = 'Adresse : ';
            labelAdress.setAttribute  ('for', 'adress');
            let inputAdress = document.createElement('input');
            inputAdress.setAttribute  ("type", 'text');
            inputAdress.setAttribute  ("id", 'adress');
            inputAdress.setAttribute  ("name", 'user_adress');

            let labelCity = document.createElement('label');
            labelCity.textContent = 'Ville : ';
            labelCity.setAttribute  ('for', 'city');
            let inputCity = document.createElement('input');
            inputCity.setAttribute  ("type", 'text');
            inputCity.setAttribute  ("id", 'city');
            inputCity.setAttribute  ("name", 'user_city');
            
            let labelEmail = document.createElement('label');
            labelEmail.textContent = 'Email : ';
            labelEmail.setAttribute  ('for', 'email');
            let inputEmail = document.createElement('input');
            inputEmail.setAttribute  ("type", 'text');
            inputEmail.setAttribute  ("id", 'email');
            inputEmail.setAttribute  ("name", 'user_email');
            
            let bouton = document.createElement('button');
            bouton.textContent = 'Commander';
            bouton.setAttribute  ('type', "summit");
            bouton.setAttribute ('id', 'bouton');
            
            
            
            
            section.appendChild(tableau);
            tableau.appendChild(cellule);
            cellule.appendChild(ligne);
            cellule.appendChild(ligne2);
            cellule.appendChild(ligne3);
            section.appendChild(formulaire);
            formulaire.appendChild(labelName);
            labelName.appendChild(inputName);
            formulaire.appendChild(labelSurmane);
            labelSurmane.appendChild(inputSurname);
            formulaire.appendChild(labelAdress);
            labelAdress.appendChild(inputAdress);
            formulaire.appendChild(labelCity);
            labelCity.appendChild(inputCity);
            formulaire.appendChild(labelEmail);
            labelEmail.appendChild(inputEmail);
            section.appendChild(bouton);

            let sauvegarde = JSON.stringify(order);
            localStorage.setItem("contact", sauvegarde);

            
           
        });
    



