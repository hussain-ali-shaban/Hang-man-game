const keyboard =document.querySelector(".theletters");
const dis = document.querySelector(".display-word");
let chword = "";
let thisWord;
   if (keyboard){
      for(let i=97;i<=122;i++){
        const createButton = document.createElement("button");
        const theLetter = String.fromCharCode(i);
        createButton.innerText=theLetter;

        
            keyboard.appendChild(createButton);
            createButton.addEventListener("click",h =>initGame(h.target,String.fromCharCode(i)));
        };
        
      }
       
    
    const initGame = (createButton,clickedLetter) =>{
      if(thisWord.includes(clickedLetter)){
        console.log(clickedLetter,"right letter");
      }
      else{
        console.log(clickedLetter,"wrong letter");
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
randomly();
 

  
 
 
  

  


    

    

  

