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
        if (form.elements['name'].value ==="") {
            return false;
        }else{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(name);
            }
    }
}
    ajoutPrenom(){
        let form = document.forms["formulaire"]
        if (form.elements['surname'].value ==="") {
            return false;
        }else{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(surname);
            }
    }
}
    ajoutAdresse(){
        let form = document.forms["formulaire"]
        if (form.elements['adress'].value ==="") {
            return false;
        }else{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(address);
            }
    }
}
    ajoutVille(){
        let form = document.forms["formulaire"]
        if (form.elements['city'].value ==="") {
            return false;
        }else{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(city);
            }
    }
}
    ajoutEmail(){
        let form = document.forms["formulaire"]
        if (form.elements['name'].value ==="") {
            return false;
        }else{
            let verif = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length < 2){
        return false;
            }else{
                return verif.test(name);
            }
    }
}

   
};

/*let contact = new Contact();
contact.ajoutNom();
contact.ajoutPrenom();
contact.ajoutAdresse();
contact.ajoutVille();
contact.ajoutEmail();*/
            