let button = document.querySelector("button");
let div = document.querySelector("div");
const classiferModule = document.querySelector("#classifier-Module");

button.addEventListener("click",()=>{
  const div = document.createElement('div');
  div.classList = "classifier";
  div.innerHTML = `
  <header class="section header"></header>
  <h2>Class</h2>
  <span id="edit-icon-container"></span>
  <hr class="line-style2">
  <p>Add Image Samples:</p>`;

  classiferModule.appendChild(div);
    
})
function showBlock(){
  document.getElementsByClassName("add-class").style.display="";
}
