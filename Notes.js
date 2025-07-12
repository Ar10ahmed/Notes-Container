const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");
btn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="D:/webdev/notes-app-img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG")
    {
        e.target.parentElement.remove();
    }
});