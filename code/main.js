// Eighton-Lee Paulse - Code to push user debts into an array NB: This is not able to be tested at this moment so it will be commented

let debts = [];
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const add = document.querySelector("#btn");
const debt = document.querySelector("#debt");
let container = document.querySelector("#appendHere");
let dataa = JSON.parse(localStorage.getItem("debtss"));
const text = document.querySelector('.price-text')
console.log(text)
display();

window.addEventListener('load',()=>{
  let newVar = JSON.parse(localStorage.getItem("debtss"))
  console.log("HI")
  nameInput.value = ''
  priceInput.value = ''
  container.innerHTML = ''
  newVar.forEach((cb)=>{
    container.innerHTML += `
   <div class="container text-center indicator p-2 justify-content-center" id="debt">
   <p>Jon Doe</p>
   <p>${cb.name}</p>
   <br />
   <div class="row">
     <div class="col text-center">
       <p class="fs-4">Your total debt is :</p>
       <p class="fs-4">R${cb.price}</p>
     </div>
   </div>
   </div>
   `
})
})

function display(){
  if(nameInput.value && priceInput.value){
    let newObject = {
      name: nameInput.value,
      price:priceInput.value
    }
    debts.push(newObject)
    localStorage.setItem("debtss", JSON.stringify(debts))

    let newVar = JSON.parse(localStorage.getItem("debtss"))

    nameInput.value = ''
    priceInput.value = ''
    container.innerHTML = ''
    newVar.forEach((cb)=>{
      container.innerHTML += `
     <div class="container text-center indicator p-2 justify-content-center" id="debt">
     <p>Jon Doe</p>
     <p>${cb.name}</p>
     <br />
     <div class="row">
       <div class="col text-center">
         <p class="fs-4">Your total debt is :</p>
         <p class="fs-4">R${cb.price}</p>
       </div>
     </div>
     </div>
     `
    })
  } else{
    console.log("AN ERROR HAS OCCURED")
  }
}

// add.addEventListener("click", push);

// function push() {
//   if (nameInput.value && priceInput.value) {
//     let newObject = {
//       name: nameInput.value,
//       price: priceInput.value,
//     };
//     debts.push(newObject);
//     console.log(debts);
//     localStorage.setItem("debtss", JSON.stringify(debts));
//   } else {
//     console.log("ERROR HAS OCCURED");
//   }

//   if (!nameInput.value && !priceInput.value) {
//     alert("Please Enter a value!");
//   } else {
//     console.log("WORKING");
//     nameInput.value = "";
//     priceInput.value = "";
//     container.innerHTML = "";
//     display();
//   }
// }

// function display() {
//   console.log(dataa);
//   if (!dataa) {
//     alert("TECHNICAL DIFFICULTIES");
//   } else {
//     dataa.forEach((cb) => {
//       container.innerHTML += `
//       <div class="container text-center indicator p-2 justify-content-center" id="debt">
//       <p>Jon Doe</p>
//       <p>${cb.name}</p>
//       <br />
//       <div class="row">
//         <div class="col text-center">
//           <p class="fs-4">Your total debt is :</p>
//           <p class="fs-4">R${cb.price}</p>
//         </div>
//       </div>
//       </div>
//       `;
//     });
//   }
// }
