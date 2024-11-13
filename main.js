let userInput=document.getElementById("userInput");
let homeContent=document.getElementById("homeContent");
let items=[];
displayItems();
function addItem(){
    let rgx=/^[A-Z][a-z]{1,}/
    if(rgx.test(userInput.value)){
        items.push(userInput.value);
    displayItems();
    userInput.value="";
    console.log(items);

    }else {
        prompt("enter a valid name");
    }

    
}
function displayItems(){
    let cartona=``;
    items.forEach((item,ind)=>{
        cartona+=`<div
          class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
          <p id="item" class="m-0 p-0">${item}</p>
          <i class="fa-sharp fa-solid fa-trash" onclick="deleteItems(${ind})"></i>
        </div>`
    })
    homeContent.innerHTML=cartona;
}
function deleteItems(index){
    items.splice(index,1);
    displayItems();

}