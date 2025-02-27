const ringColor = document.querySelectorAll(".ring-button");
for(let i=0; i<ringColor.length; i++) {

   const singleButton = ringColor[i];
   
   singleButton.addEventListener("click", (event)=> {
   for (let j = 0 ; j<ringColor.length ; j++){
    ringColor[j].classList.remove("border-purple-600");
    ringColor[j].classList.add("border-gray-300");
   }
   event.target.classList.remove("border-gray-300");
   event.target.classList.add("border-purple-600");
   })



}
