

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




let createItemButton = document.getElementById('createItem');

createItemButton.addEventListener('click', function () {
    let vedCount = parseInt(localStorage.getItem('vedCount')) || 0;

    if (vedCount >= 3 && yxaCount >= 3 && svampCount >= 3) {

        // Öppna en popup om värdet är 3 eller mer när knappen klickas på
        window.open('https://exempel.com/popup-sida', '_blank', 'width=500,height=500');
    } else {

        console.log('Värdet är inte tillräckligt för att öppna en popup.');
    }
});




let resetLocalButton = document.getElementById('resetLocal');

resetLocalButton.addEventListener('click', function () {
    localStorage.clear(); // Detta kommer att ta bort all lagrad data i localStorage
    console.log('localStorage har nollställts.');
});
