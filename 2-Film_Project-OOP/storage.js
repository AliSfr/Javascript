function Storage(){

};

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
};

Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if (localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
};

Storage.prototype.deleteFilmFromStorage = function(element){
    let film = element.parentElement.previousElementSibling.previousElementSibling.textContent;
    let films = this.getFilmsFromStorage();
    films.forEach(function(deleteFilm,index){
        if (deleteFilm.title === film){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
};

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}