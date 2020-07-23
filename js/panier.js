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
           
            

            //let formDate = new FormData([formulaire]);

            formulaire.onsubmit = async (e) =>{
                e.preventDefault();

                let response = await fetch('/article/formdate/post/user', {
                    method: 'POST',
                    body: new FormData(formulaire)
                });

                let result = await response.json();
                alert(result.message);
            }
        document.getElementById("envoi").addEventListener('click', () => {
            let sauv = JSON.stringify(formulaire);
            localStorage.setItem('contact', sauv);
        })
            
    
    
            
            
            
            
            


            
           

    
      /*  let order = {
            contact: {
                    firstName: "",
                    lastName: "",
                    address: "",
                    city: "",
                    email: ""
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
        
                })*/

