const letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
let letterInside = document.querySelector(".letters");

letters.forEach(letter =>{
   let theSpan = document.createElement("span");
theSpan.textContent = letter; 



  letterInside.appendChild(theSpan);

})
const theWords =  ["apple","cherry","banana","berry"];
  

