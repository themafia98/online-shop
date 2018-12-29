document.getElementById("leaveComment").onclick = newComment;

function newComment() {
    var comment = document.getElementById("textComment").value;
    var element = document.createElement("p");
    var author = document.createElement("small");
    author.className = "text-muted";
    author.innerText = "Author: Name 3/1/17";
    element.innerText  = comment;
    document.getElementById("commentSection").appendChild(element);
    document.getElementById("commentSection").appendChild(author);
    console.log(comment);
}