/*function infoDonnees(){
    let name = document.forms["formulaire"]["name"];
    let surname = document.forms["formulaire"]["surname"];
    let adress = document.forms["formulaire"]["adress"];
    let city = document.forms["formulaire"]["city"];
    let email = document.forms["formulaire"]["email"];
    
    if(type, []){
        name = ['name'];
    }else if(type === []){
        surname = ["surname"];
    }else if(type ===[]){
        adress === ['adress'];
    }else if(type === []){
        city === ['city'];
    }

    do{
        email === ['email'];
    }while(!this.checkEmail(email));

   function checkEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}*/

/*class Contact  {
    constructor (name, surname, address, city, email){
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.email = email;
    }

    infoContact(){
        return `firstName: ${this.name} lastName: ${this.surname} address: ${this.address} city: ${this.city} email: ${this.email}`
    }
    setName(type, original = ""){
        if(type !== 'name' && type !=='surname' && type !== 'address' && type !== 'city'){
            alert("erreur");
        }else{
            this.addContact(type, '')
        }do{
            if (name.length < 2){
                console.log("non");
            }else{
                console.log('oui');
                this.addContact(type, name)
            }
        }while(this.name.length < 2 || this.surname < 2 || this.address < 4 || this.city < 2)
            }
        
        
    
    setEmail(original = ""){
        let email = "";
        do {
            this.email = email;
        }while (!this.checkEmail(this.email));
        console.log(`Email: ${this.email}`);
    }
     
    checkEmail(email) {
             let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }
       
    addContact(type, name){
        if(type === 'name'){
                this.name = name;
           }else if(type === 'surname'){
             this.surname = name;
         }else if(type === 'address'){
             this.address = name;
         }else if(type === 'city'){
             this.city = name;
         }
  }

};*/
class Contact  {
    constructor (name, surname, address, city, email){
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.email = email;
    }

    ajoutNom(){
        let form = document.forms["formulaire"]
        if (form.elements['name'].value !="") {
            return true;
        }else{
            alert('Saisissez le nom');
            return false;
        }do{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(name);
            }
        }while(this.name.length < 2)
    }
    ajoutPrenom(){
        let form = document.forms["formulaire"]
        if (form.elements['surname'].value !="") {
            return true;
        }else{
            alert('Saisissez le prénom');
            return false;
        }do{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(surname.length < 2){
        return false;
            }else{
                return verif.test(surname);
            }
        }while(this.surname.length < 2)
    }
    ajoutAdresse(){
        let form = document.forms["formulaire"]
        if (form.elements['adress'].value !="") {
            return true;
        }else{
            alert('Saisissez adresse');
            return false;
        }do{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.address.length < 2){
        return false;
            }else{
                return verif.test(this.address);
            }
        }while(this.address.length < 2)
    }
    ajoutVille(){
        let form = document.forms["formulaire"]
        if (form.elements['city'].value !="") {
            return true;
        }else{
            alert('Saisissez la ville');
            return false;
        }do{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(city.length < 2){
        return false;
            }else{
                return verif.test(city);
            }
        }while(this.city.length < 2)
    }
    ajoutEmail(){
        let form = document.forms["formulaire"]
        if (form.elements['mail'].value !="") {
            return true;
        }else{
            alert('Saisissez email');
            return false;
        }do{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.email.length < 2){
        return false;
            }else{
                return verif.test(email);
            }
        }while(this.email.length < 2)
    }

   
};
let contact = new Contact();
contact.ajoutNom();
contact.ajoutPrenom();
contact.ajoutAdresse();
contact.ajoutVille();
contact.ajoutEmail();
            

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
            
            
            let bouton = document.createElement('button');
            bouton.textContent = 'Commander';
            bouton.setAttribute  ('type', "summit");
            bouton.setAttribute ('id', 'bouton');
            bouton.addEventListener('click', () =>{
                let sauvForm = JSON.stringify(contact);
                localStorage.setItem('contact', sauvForm);
            })
            
    
    
            
            
            
            
            section.appendChild(tableau);
            tableau.appendChild(cellule);
            cellule.appendChild(ligne);
            cellule.appendChild(ligne2);
            cellule.appendChild(ligne3);
            section.appendChild(bouton);


            
           

    
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

