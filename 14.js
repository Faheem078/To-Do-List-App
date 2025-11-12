
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function() {
    let item = document.createElement("li");
    item.innerText= inp.value;

    let delebtn = document.createElement("button");
    delebtn.innerHTML = "delete";
    delebtn.classList.add("delete");
    item.appendChild(delebtn);
    ul.appendChild(item);
        console.log("inp.value");
        inp.value= "";
    
});

ul.addEventListener("click" , function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }
})



// let delebtns = document.querySelectorAll(".delete");
// for(delbtn of delebtns){
//     delbtn.addEventListener("click" , function () {
//         let para = this.parentElement;
//         console.log(para);
//         para.remove(); 
//     })
// }