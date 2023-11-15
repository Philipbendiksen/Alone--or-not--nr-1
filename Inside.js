

/*  Funktion knapp ved */

let vedCountElement = document.getElementById('vedCount');

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



/* Funktion för att create item knappen ska fungera om värdet i Inventory är mer än 3 för varje objekt */

let createItemButton = document.getElementById('createItem');

createItemButton.addEventListener('click', function () {
    let vedCount = parseInt(localStorage.getItem('vedCount')) || 0;

    if (vedCount >= 3 && yxaCount >= 3 && svampCount >= 3) {


        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank', 'width=500,height=500');
    } else {

        console.log('Finns inte 3 av varje i inventory.');
    }
});




/* Knapp för att ta bort local storage för att spela igen  */

let resetLocalButton = document.getElementById('resetLocal');

resetLocalButton.addEventListener('click', function () {
    localStorage.clear();
    console.log('Åerställd');
});


