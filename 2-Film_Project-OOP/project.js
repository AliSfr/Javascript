const form = document.getElementById("film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const filmList = document.getElementById("films");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI objesini başlatma
const ui = new UI();

eventListeners();

//Storage objesi oluşturma
const storage = new Storage();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
};

// Film ekleme
function addFilm(e){
    const title = titleInput.value;
    const director = directorInput.value;
    const url = urlInput.value;
    
    // Hata
    if (title === "" || director === "" || url === ""){
        ui.showMessages("Tüm alanları doldurun!","danger");
    }
    else{
        // Yeni film
        const newFilm = new Film(title,director,url);

        // Arayüze ekleme
        ui.addFilmToUI(newFilm);

        //Storage'a ekleme
        storage.addFilmToStorage(newFilm);
        
        ui.showMessages("Film başarıyla eklendi!","success");
    }

    // Inputları temizleme
    ui.clearInputs(titleInput,directorInput,urlInput);

    e.preventDefault();
}

//Film silme
function deleteFilm(e){
    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target);
        ui.showMessages("Film başarıyla silindi!","success");
    }
};

function clearAllFilms(){
    if (confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();        
    }
};