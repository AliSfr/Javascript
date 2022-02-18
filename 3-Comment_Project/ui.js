class UI{
    addCommentToUI(newComment){
    //  <div class = "comment">
    //     <ul>
    //         <li class = "comment_writer"> Yazar </li>
    //         <hr class = "comment_hr">
    //         <li class = "comment_content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias laboriosam repellendus molestiae tempora nemo ipsa modi? Unde, architecto blanditiis accusamus, tempora iste ducimus natus quo itaque dolores deserunt id! </li>
    //         <li><a href="#" class = "delete-comment"> Yorumu Sil</a></li>
    //     </ul>
    // </div>
    commentBody.innerHTML += `
      <div class = "comment">
         <ul>
             <li class = "comment_writer"> ${newComment.writer} </li>
             <hr class = "comment_hr">
             <li class = "comment_content"> ${newComment.content} </li>
             <li><a href="#" class = "delete-comment" id = "delete-comment"> Yorumu Sil</a></li>
         </ul>
      </div>
    `
    };

    showMessage(message,role){
        const div = document.createElement("div");
        div.className = `alert alert-${role}`;
        div.textContent = message;
        cardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000)
    };

    loadCommentsFromStorage(comments){
        comments.forEach(function(comment){
            commentBody.innerHTML += `
            <div class = "comment">
               <ul>
                   <li class = "comment_writer"> ${comment.writer} </li>
                   <hr class = "comment_hr">
                   <li class = "comment_content"> ${comment.content} </li>
                   <li><a href="#" class = "delete-comment" id = "delete-comment"> Yorumu Sil</a></li>
               </ul>
            </div>g
          `
        })
    };

    deleteCommentFromUI(element){
        element.parentElement.parentElement.parentElement.remove();
    };

    clearAllCommentsFromUI(){
        while(commentBody.firstElementChild !== null){
            commentBody.firstElementChild.remove();
        };
    };

    clearInputs(){
        writerInput.value = "";
        contentInput.value = "";
    };
};