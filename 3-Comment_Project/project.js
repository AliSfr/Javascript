const writerInput = document.querySelector("#writer");
const contentInput = document.querySelector("#content");
const form = document.querySelector("#comment_form");
const commentBody = document.querySelector("#comment_body");
const cardBody = document.querySelector("#card-body");
const clearComments = document.querySelector("#clear-comments");

eventListeners();
const ui = new UI();
const storage = new Storage();

function eventListeners(){
    form.addEventListener("submit",addNewComment);
    document.addEventListener("DOMContentLoaded",function(){
        let comments = storage.getCommentsFromStorage();
        ui.loadCommentsFromStorage(comments);
    })
    commentBody.addEventListener("click",deleteComment);
    clearComments.addEventListener("click",deleteAllComments);
};

function addNewComment(e){
    const writer = writerInput.value;
    const content = contentInput.value;
    const newComment = new Comment(writer,content);
    if (writer === "" || content ===""){
        ui.showMessage("Lütfen tüm alanları doldurun!","danger");
    }
    else{
        ui.addCommentToUI(newComment);
        storage.addCommentToStorage(newComment);
        ui.showMessage("Yorum başarıyla eklendi!","success");
    }
    ui.clearInputs();
    e.preventDefault();
};

function deleteComment(e){
    if(e.target.id === "delete-comment"){
        ui.deleteCommentFromUI(e.target);
        storage.deleteCommentFromStorage(e.target);
    }
};

function deleteAllComments(){
    if(confirm("Emin misiniz?")){
        ui.clearAllCommentsFromUI();
        storage.deleteAllComments();
    };
};