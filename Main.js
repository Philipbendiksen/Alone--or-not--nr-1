
document.getElementById('startbutton').addEventListener('click', function () {

  window.location.href = 'index.html';

});


window.onload = function () {

  alert('Välkommen till spelet!');
};


/*  Funktion knapp ved */

let knappFörVed = document.getElementById('knappFörVed');
let vedCountElement = document.getElementById('vedCount');

let vedCount = 0;

knappFörVed.addEventListener('click', function () {

  vedCount++;
  vedCountElement.textContent = vedCount;
  localStorage.setItem('vedCount', vedCount);


});

/*  Funktion knapp yxor  */

let knappFörYxa = document.getElementById('knappFörYxa');
let yxaCountElement = document.getElementById('yxaCount');

let yxaCount = 0;

knappFörYxa.addEventListener('click', function () {

  yxaCount++;
  yxaCountElement.textContent = yxaCount;
  localStorage.setItem('yxaCount', yxaCount);


});


/*  funktion knapp svampar  */

let knappFörSvamp = document.getElementById('knappFörSvampar');
let svampCountElement = document.getElementById('svampCount');

let svampCount = 0;

knappFörSvamp.addEventListener('click', function () {

  svampCount++;
  svampCountElement.textContent = svampCount;
  localStorage.setItem('svampCount', svampcount);


});

