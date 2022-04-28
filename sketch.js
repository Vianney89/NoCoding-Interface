let button = document.querySelector("#add-class");
let div = document.querySelector("div");
const classiferModule = document.querySelector("#classifier-Module");
// console.log(classiferModule.hasChildNodes);
let count =2;


button.addEventListener("click",()=>{
  const div = document.createElement('div');
  div.classList = "classifier";
  count++;

  div.innerHTML = `
  <header class="section header"></header>
  <h2>Class ${count}</h2> 
  <button class="close-button">x</span>
  </button>
  <span id="edit-icon-container"></span>
  <hr class="line-style2">
  <p>Add Image Samples:</p>`;

  var closeButton = div.getElementsByClassName("close-button");
  var i;
  
  for (i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", function () {
    this.parentNode.style.display = "none";
    count--;
          });
      };
  
  classiferModule.appendChild(div);
});

// function showBlock(){
//   document.getElementsByClassName("add-class").style.display="";
// };


// add a number for each div

// button.addEventListener("click",()=>{
//   div.innerText=count;
//   count++;
// })