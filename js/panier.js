
           let section =  document.getElementById('panier');

            let tableau= document.createElement("table");
            let cellule = document.createElement("tr");
            cellule.textContent = ('Résumer article');
            let ligne = document.createElement('td');
            ligne.textContent = localStorage.getItem('couleur');

            

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
            
    
    
            
            
            
            
            section.appendChild(tableau);
            tableau.appendChild(cellule);
            cellule.appendChild(ligne);


            
           

    
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

