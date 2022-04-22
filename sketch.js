let button = document.querySelector("#add-class");
let div = document.querySelector("div");
const classiferModule = document.querySelector("#classifier-Module");

button.addEventListener("click",()=>{
  const div = document.createElement('div');
  div.classList = "classifier";
  div.innerHTML = `
  <header class="section header"></header>
  <h2>Class</h2> 
  <button class="close-button">x</span>
  </button>
  <span id="edit-icon-container"></span>
  <hr class="line-style2">
  <p>Add Image Samples:</p>`;

  // div.innerHTML =`
  // <header class="section header"></header>
  // <h2>Class<button id="close-button">X</button></h2>
  // <span id="edit-icon-container"></span>
  // <hr class="line-style">
  // <p>Add Image Samples:</p>`;


  classiferModule.appendChild(div);
    
})
function showBlock(){
  document.getElementsByClassName("add-class").style.display="";
}

// close button 
// window.onload = function(){
//   document.getElementsByClassName("add-class").onclick = function(){
//     this.parentNode.remove()
//     return false;
//   };
// };