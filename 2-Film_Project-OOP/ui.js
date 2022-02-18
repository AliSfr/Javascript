function UI(){

};

UI.prototype.addFilmToUI = function(newFilm){
//     <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
    filmList.innerHTML += `
    
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    
    `;
};

UI.prototype.clearInputs = function(title,director,url){
    title.value = "";
    director.value = "";
    url.value = "";
};

UI.prototype.showMessages = function(message,role){
    // Div oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${role}`;
    div.textContent = message;
    firstCardBody.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000)
};

UI.prototype.loadAllFilms = function(films){
    films.forEach(function(film){
        filmList.innerHTML += `
    
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        
        `;
    });
};

UI.prototype.deleteFilmFromUI = function(elemet){
    elemet.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){
    while (filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
};