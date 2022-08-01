const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearAll=document.querySelector("#clear-films");


//UI objesini başlatma ui.js nin içinde obje
const ui=new UI();

//stroge objesi üretme
const storage=new Storage();



//Tüm eventleri yükleme 
eventListeners();

function eventListeners(){
form.addEventListener("submit",addFilm);

document.addEventListener("DOMContentLoaded", function(){//sayfa yüklenince storagedekileri yüklemek için
let films=storage.getFilmsFromStorage();
ui.loadedFilms(films);
});

secondCardBody.addEventListener("click",deleteFilm); //cardbodyde nereye tıklandıgını almak için
clearAll.addEventListener("click", clearAllFilms);
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        //Hata
        ui.displayMessage("Tüm alanları doldurunuz!!!", "danger");
    }
    else{
        //Yeni film oluşturma işlemi
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayüze film ekleme
        storage.addFilmToStorage(newFilm);//strogeye film ekleme
        ui.displayMessage("Film Başarılı bir şekilde eklenmiştir...", "success");
    }


    ui.clearinput(titleElement,directorElement,urlElement);/*Filmleri ekledikten sonra inputları silmek için ui.js den fonksiyonu çagırdık*/
    e.preventDefault();


}

function deleteFilm(e){
   // console.log(e.target);//cardbodyde nereye tıklandıgını görmemeizi saglar..

   if(e.target.id==="delete-film"){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//silinen filmin ismini bulmak için önce bi üst elementine (tr den td ye) çıktık, sonra 2 üst kardeşini aldık.
    ui.displayMessage("Film Başarılı bir şekilde silinmiştir....", "danger");
   }
}

function clearAllFilms(e){
   if(confirm("Emin Misiniz??")){
    if(confirm("Bak Siliyorum Hepsini!!!!")){
    ui.clearAllFilmsUI();//arayüzden silmek için
    storage.clearAllFilmsFromStorage();
   }}
    
}
