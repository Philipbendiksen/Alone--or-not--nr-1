
/*  Funktions knapp ved */

let knappFörVed = document.getElementById('knappFörVed');
let vedCountElement = document.getElementById('vedCount');

let vedCount = 0;

knappFörVed.addEventListener('click', function () {

  vedCount++;
  vedCountElement.textContent = vedCount;
  localStorage.setItem('vedCount', vedCount);


});

/*  Funktions knapp stenar (heter yxor tills jag ändrat)  */

let knappFörYxa = document.getElementById('knappFörYxa');
let yxaCountElement = document.getElementById('yxaCount');

let yxaCount = 0;

knappFörYxa.addEventListener('click', function () {

  yxaCount++;
  yxaCountElement.textContent = yxaCount;
  localStorage.setItem('yxaCount', yxaCount);

});


/*  funktions knapp svampar  */

let knappFörSvamp = document.getElementById('knappFörSvamp');
let svampCountElement = document.getElementById('svampCount');

let svampCount = 0;

knappFörSvamp.addEventListener('click', function () {

  svampCount++;
  svampCountElement.textContent = svampCount;
  localStorage.setItem('svampCount', svampCount);


});

