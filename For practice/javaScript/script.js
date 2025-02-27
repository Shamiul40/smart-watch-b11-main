/**
 * !Band color button activities
 */

const ringColor = document.querySelectorAll(".ring-button");
const productImageBase = "../images/";

for(let i=0; i<ringColor.length; i++) {

   const singleButton = ringColor[i];
   
   singleButton.addEventListener("click", (event)=> {
   for (let j = 0 ; j<ringColor.length ; j++){
    ringColor[j].classList.remove("border-purple-600");
    ringColor[j].classList.add("border-gray-300");
   }
   event.target.classList.remove("border-gray-300");
   event.target.classList.add("border-purple-600");

   const productImage = document.getElementById("product-image");
   const color = event.target.id.replace("-color", "")
   productImage.src= productImageBase + color +".png";  
   })
}

/**
 * !wrist size button activities
 */
function selectWristSize (size) {
   const sizes = ["S", "M", "L", "XL"];
  for(let i=0; i<sizes.length; i++) {
   const button = document.getElementById("size-" + sizes[i]);
   const elemnt = sizes[i];
   if(elemnt === size) {
      button.classList.add("border-purple-600");
   }
   else{
      button.classList.remove("border-purple-600")
   }
  }
}

/**
 * !quantity button
 */
const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
   btn.addEventListener("click", (event)=>{
      const amount = event.target.innerText ==="+" ? 1: -1;
      const  quantityEelemnt = document.getElementById("quantity");
      const currentQuantity = parseInt(quantityEelemnt.innerText);
      const newQuantity = Math.max(0, currentQuantity + amount);
      quantityEelemnt.innerText = newQuantity;

   })
}




/**
* !add to cart button
*/
let cartCount =0;
let cartItems =[];
document.getElementById("add-to-cart").addEventListener("click", ()=>{
  document.getElementById("checkout-container").classList.remove("hidden");

  const quantity = parseInt(document.getElementById("quantity").innerText);
  
  if(quantity>0){
   cartCount =cartCount+quantity;
  document.getElementById("cart-count").innerText= cartCount;

   const selectedColorButton = document.querySelector('button.border-purple-600.w-6');
   const selectedColor = selectedColorButton.id.split("-")[0];
   const selectedSizeButtons = document.querySelector("button.border-purple-600:not(.w-6)");
   const selectedSize = selectedSizeButtons.id.split("-")[1];
   const selectedPrice = selectedSizeButtons.innerText.split("$")[1];
   
   
   cartItems.push({
      image : selectedColor + ".png",
      title : "Classy Modern Smart Watch",
      color : selectedColor,
      size : selectedSize,
      quantity : quantity,
      price : quantity * parseInt(selectedPrice)
   })
   

  }
  else{
   alert("plese select a quantity")
  }
})


/**
 * !checkout button
 */
document.getElementById("checkout-btn").addEventListener("click", ()=>{
   const cartModal = document.getElementById("cart-modal");
   const cartConatainer =document.getElementById("cart-items");
   cartModal.classList.remove("hidden")
   
   for(let i=0; i<cartItems.length; i++){
      const item = cartItems[i];
      const row = document.createElement("tr");
      row.classList.add("border-b");
      

      row.innerHTML=`
      <td class="py-2 px-4">
         <div class="flex items-center space-x-2">
            <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
            <span>${item.title}</span>
         </div>
      </td>
      <td class="py-2 px-4">${item.color}</td>
      <td class="py-2 px-4">${item.size}</td>
      <td class="py-2 px-4">${item.quantity}</td>
      <td class="py-2 px-4">${item.price}</td>
      `;
      cartConatainer.appendChild(row);
   }
})

document.getElementById("continue-shopping").addEventListener("click", ()=>{
   document.getElementById("cart-modal").classList.add("hidden");
})