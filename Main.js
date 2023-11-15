
/*  Funktions knapp ved */

let knappFörVed = document.getElementById('knappFörVed');
let vedCountElement = document.getElementById('vedCount');

// Hämtar värde från localStorage (om det finns)
let vedCount = parseInt(localStorage.getItem('vedCount')) || 0;
vedCountElement.textContent = vedCount;

knappFörVed?.addEventListener('click', function () {
  vedCount++;
  vedCountElement.textContent = vedCount;

  // Sparar det nya värdet i localStorage som en sträng

  localStorage.setItem('vedCount', vedCount.toString());
});



/*  Funktions knapp stenar (heter yxor tills jag ändrat)  */

let knappFörYxa = document.getElementById('knappFörYxa');
let yxaCountElement = document.getElementById('yxaCount');

let yxaCount = parseInt(localStorage.getItem('yxaCount')) || 0;
yxaCountElement.textContent = yxaCount;

knappFörYxa?.addEventListener('click', function () {
  yxaCount++;
  yxaCountElement.textContent = yxaCount;

  localStorage.setItem('yxaCount', yxaCount.toString());

});



/*  funktions knapp svampar  */


let knappFörSvamp = document.getElementById('knappFörSvamp');
let svampCountElement = document.getElementById('svampCount');

let svampCount = parseInt(localStorage.getItem('svampCount')) || 0;
svampCountElement.textContent = svampCount;

knappFörSvamp?.addEventListener('click', function () {
  svampCount++;
  svampCountElement.textContent = svampCount;

  localStorage.setItem('svampCount', svampCount.toString());

});


