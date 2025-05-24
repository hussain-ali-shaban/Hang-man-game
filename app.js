const hangmanimg = document.querySelector(".hangman-view img")
const keyboard =document.querySelector(".theletters");
const dis = document.querySelector(".display-word");
let chword = "";
let wrongLetter=0;
let thisWord;
const chances = 6;
   if (keyboard){
      for(let i=97;i<=122;i++){
        const createButton = document.createElement("button");
        const theLetter = String.fromCharCode(i);
        createButton.innerText=theLetter;

        
            keyboard.appendChild(createButton);
            createButton.addEventListener("click",h =>startGame(h.target,String.fromCharCode(i)));
        };
        
      }
       
    
    const startGame = (createButton,clickedLetter) =>{
      if(thisWord.includes(clickedLetter)){
       [...thisWord].forEach((letter,index)=>{
          if(letter===clickedLetter){
            dis.querySelectorAll("li")[index].innerText=letter;
             dis.querySelectorAll("li")[index].classList.add("guessed")
          }
       }
      )}
      else{
       wrongLetter++;
       hangmanimg.src = `images/hangman-${wrongLetter}.jpg`
      }}
    
    const randomly = () =>{
const theWords =  ["apple","cherry","banana","berry"];
const randomWord =Math.floor(Math.random() * theWords.length);
const choosenWord = theWords[randomWord];
thisWord=choosenWord;
console.log(choosenWord); 
     dis.innerHTML="";

    
 for(i=0;i<choosenWord.length;i++){
  const li = document.createElement("li");
  li.classList.add("letter");
  li.textContent = "_";
  dis.appendChild(li);
 }
let letter1 = Array.from(choosenWord);
   console.log(letter1);
}
document.getElementById("restart").addEventListener("click",() => {
 location.reload();
  
 
})
 randomly();

 

  
 
 
  

  


    

    

  

