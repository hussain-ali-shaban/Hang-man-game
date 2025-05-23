const keyboard =document.querySelector(".theletters");

   if (keyboard){
      for(let i=97;i<=122;i++){
        const createButton = document.createElement("button");
        const theLetter = String.fromCharCode(i);
        createButton.innerText=theLetter;

        createButton.addEventListener("click",function(){
          const guessedLetter = this.innerText;
           console.log("you click:",guessedLetter);
        })
         keyboard.appendChild(createButton);
      }
       
    }
const theWords =  ["apple","cherry","banana","berry"];
const randomWord =Math.floor(Math.random() * theWords.length);
const choosenWord = theWords[randomWord];
console.log(choosenWord); 

 const dis = document.querySelector(".display-word");

 for(i=0;i>choosenWord.length;i++){
  const li = document.createElement("li");
  li.classList.add("letter");
  li.textContent = "_";
  dis.appendChild(li);
 }
let letter1 = Array.from(choosenWord);
  
 console.log(letter1);    
  
 
 
  

  


    

    

  

