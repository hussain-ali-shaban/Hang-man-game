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

document.addEventListener('keypress',(event) => {
  console.log(event.key.toLowerCase());
});
  console.log(theWords)

// const lettersInWord = word.length;

 theWords.forEach(word => {
if( word==='apple'|| word==='berry'){
    console.log('- - - - -')
    console.log(word)
 }
  if (  word=== 'cherry'|| word==='banana'){
   console.log('- - - - - -')
  console.log(word)
  } }) 

 
  


 
 

 


    

    

  

