

/*  Funktion knapp ved */
let vedCountElement = document.getElementById('vedCount');

// Hämtar värde från localStorage (om det finns)
let vedCount = parseInt(localStorage.getItem('vedCount')) || 0;
vedCountElement.textContent = vedCount;



/*  Funktion knapp stenar  (heter yxor tills jag ändrat)  */


let yxaCountElement = document.getElementById('yxaCount');

let yxaCount = parseInt(localStorage.getItem('yxaCount')) || 0;
yxaCountElement.textContent = yxaCount;

/*  funktion knapp svampar  */

let svampCountElement = document.getElementById('svampCount');

let svampCount = parseInt(localStorage.getItem('svampCount')) || 0;
svampCountElement.textContent = svampCount;





