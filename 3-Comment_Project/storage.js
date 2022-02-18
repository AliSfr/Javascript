class Storage{
    getCommentsFromStorage(){
        let comments;
        if(localStorage.getItem("comments") === null){
            comments = [];
        }
        else{
            comments = JSON.parse(localStorage.getItem("comments"));
        }
        return comments;
    }
    addCommentToStorage(newComment){
        let comments = this.getCommentsFromStorage();
        comments.push(newComment);
        localStorage.setItem("comments",JSON.stringify(comments));
    };
    deleteCommentFromStorage(element){
        let comment = element.parentElement.previousElementSibling.textContent;
        let comments = this.getCommentsFromStorage();
        comments.forEach(function(deleteComment,index){
            if(deleteComment.content.trim() == comment.trim()){
                comments.splice(index,1);
            };
        localStorage.setItem("comments",JSON.stringify(comments));
        });
    };
    deleteAllComments(){
        localStorage.removeItem("comments");
    };
};