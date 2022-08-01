function UI(){


}


UI.prototype.addFilmToUI=function(newFilm){
    /*<tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>*/
   const filmList=document.getElementById("films");
  filmList.innerHTML+=`
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
`;


}

UI.prototype.clearinput=function(element1,element2,element3){/*Filmleri ekledikten sonra inputları silmek için*/
    element1.value="";
    element2.value="";
    element3.value="";

}


UI.prototype.displayMessage=function(message,type){
  const cardbody=document.querySelectorAll(".card-body")[0];
  //**alert diviniz oluşturuyoruz */
  const div=document.createElement("div");

  div.className=`alert alert-${type}`;
  div.textContent=message;
  cardbody.appendChild(div);/*cardbody nın son cocugu olarak divi ekledik */

  setTimeout(function(){//hata mesajının 2 saniye sonra silinmesi için
    div.remove();
  },2000)
}

UI.prototype.loadedFilms = function(films){//sayfa yüklendiğinde filmleri storage den almak için
  const filmList=document.getElementById("films");

films.forEach(function(film){
  filmList.innerHTML+=`
  <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
  
});

}

UI.prototype.deleteFilmFromUI=function(element){//filmleri arayüzden silmek için fonksiyon
  
  element.parentElement.parentElement.remove();//silinecek filmde tüm satırı silmek için a etiketinden 2 üst elemente çıktık tr


}
UI.prototype.clearAllFilmsUI=function(){
  const filmList=document.getElementById("films");

 // filmList.innerHTML="";//ilk yol içeriği boş ile degiştirir ama yavaş çalışır
 while(filmList.firstElementChild !==null){//ilk çocuk boş olana kadar çalışır
  filmList.firstElementChild.remove();//Sürekli ilk çocugu siler

 }

}