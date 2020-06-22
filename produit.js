
//https://www.bonbache.fr/recuperer-les-parametres-d-url-d-une-page-web-en-javascript-258.html
let url = window.location.search
let params = new URLSearchParams(url);



//document.getElementById("produit").textContent = params.get('id');

fetch("http://localhost:3000/api/teddies").then(responce =>{
    return responce.json();
}).then(elements =>{
   let position = window.location.href.indexOf('?');
//alert(position)
   // elements.forEach ( elements =>{
        if (position!=-1){
    var id_num='elements.name'; 
    var text_id='';
var fin_url = window.location.href.substr(position + 1);
    fin_url = fin_url.replace(/=/g," ");
    id_num = fin_url.substr(0,2);
    text_id = fin_url.substr(3);
    //alert(fin_url);
   let section = document.getElementById("produit");
  let essaie = document.getElementById('info').innerHTML = "<img src = elements.imageUrl + id_num + atl ='+text_id+'/>";
    
    //let article = document.createElement("article");
   // let nom = document.createElement("h2");
  //  nom.textContent = elements.name;
  //  let lienImage =  document.createElement('img');
   // lienImage.src = elements.imageUrl;
    
  //  section.appendChild(article);
  //  article.appendChild(nom);
  //  article.appendChild(lienImage);
}
    ///})

})