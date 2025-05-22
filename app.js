const keyboard = querySelector(".kbd");

for(i=0;i<=26;i++){
    

}




const letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
let letterInside = document.querySelector(".letters");

letters.forEach(letter =>{
    let theSpan = document.createElement("span");
 theSpan.textContent = letter; 



  //  letterInside.appendChild(theSpan);

 })
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

 
  


 
 

 


    

    

  

