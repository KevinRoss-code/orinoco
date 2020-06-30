const url = window.location.search;
const params = new URLSearchParams(url);

fetch("http://localhost:3000/api/teddies/" + params.get('id')).then(response =>{
    return response.json();
}).then(elements =>{
    let section = document.getElementById('panier');
    let article = document.createElement('article');
       let nom = document.createElement('h2');
       nom.textContent = elements.name;
       let descri = document.createElement('p');
       descri.textContent = elements.description;
       let prix = document.createElement('p');
       prix.textContent = elements.price + " €";

       section.appendChild(article);
    article.appendChild(nom);
    article.appendChild(descri);
    article.appendChild(prix);
});
class Contact {
    constructor(name = "inconnu", surname = "inconnu", email = "inconnu"){
    this.name = name;
    this.surname = surname;
    this.email = email;
    }
    
    
    displayInfo(){
       return `Nom: ${this.name} Prénom: ${this.surname} Email: ${this.email}`;
        
    }
    
    setName(type, original = ""){
        if(type !== 'name' && type !=='surname'){
            alert("erreur");
        }else{
            this.addName(type, '')
        }do{
            let name = prompt(`Entrer votre ${type}`, original);
            if (name.length < 2){
                console.log("non");
            }else{
                console.log('oui');
                this.addName(type, name)
            }
        }while(this.name.length < 2 || this.surname < 2 )
            }
        
        
    
    setEmail(original = ""){
        let email = "";
        do {
            email = prompt("Entrez votre email");
            this.email = email;
        }while (!this.checkEmail(this.email));
        console.log(`Email: ${this.email}`);
    }
     
    checkEmail(email) {
             let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }
       
    addName(type, name){
        if(type === 'name'){
                this.name = name;
           }else if(type === 'surname'){
             this.surname = name;
         }
  }
}; 
class ContactManager{
    constructor(contactsList = []){
        this.contactsList = contactsList;
    }
    ajoutContact(){
        document.getElementById("ajout").addEventListener('click', (e) => {       
       
            let contact = new Contact();
            contact.setName('name');
           contact.setName("surname");
           contact.setEmail();
           contact.id = this.contactsList.length + 1; 
           console.log(this.contactsList);
           this.contactsList.push(contact);
           console.log(this.contactsList);
            this.updateStorage(); 
           
           })
    }
    updateStorage(){
        let list = JSON.stringify(this.contactsList);
        localStorage.setItem('contactList', list);
        console.log('added');
    }
    loadFromStorage(){
        let listContacts = []
        let list = JSON.parse(localStorage.getItem('contactList'));
        if (list !== null && list.length > 0){
            list.forEach(contact => {
            let contactObject = new Contact(contact.name, contact.surname, contact.email);
            listContacts.push(contactObject);
        })
        }
        
        this.contactsList = listContacts;
    }
    
}

