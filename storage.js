function Storage(){

}

Storage.prototype.addFilmToStorage=function(newFilm){
  
        let films = this.getFilmsFromStorage();
        films.push(newFilm);//aldıgımız arraya new filmi eklemek için

      localStorage.setItem("films",JSON.stringify(films)); //local storage ye ekledikten sonra yazık

}

Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films")===null){//local stroge boş ise boş bir array oluşturduk
     films = [];
    }
    else{
     films = JSON.parse(localStorage.getItem("films"));//local strogede film varsa  onu array olraka aldık
 
    }
    return films;

}

Storage.prototype.deleteFilmFromStorage=function(filmTitle){
  let films=this.getFilmsFromStorage();//storage den arrayı aldık
  films.forEach(function(film,index) {//filmin bulundugu indexi aldık
    if(film.title===filmTitle){
      films.splice(index,1);//filmin bulundugu indexi sildik
    }
  }); 
localStorage.setItem("films", JSON.stringify(films));//film silindikten sonra local strogeye yazdık
}


Storage.prototype.clearAllFilmsFromStorage=function(){
  localStorage.removeItem("films");//bütün filmlerin key i films oldugu için hepsi silinir
}