const cupsContainer = document.querySelector(".cups-container");
const smallCup = document.querySelectorAll(".cup-small");
const litersBottle = document.getElementById("liters");
const remainedBottle = document.getElementById("remained");
const percentageBottle = document.getElementById("percentage");
const goal = document.getElementById("goal");
const quantityMinus = document.getElementById("quantity-minus");
const quantityPlus = document.getElementById("quantity-plus");


let amountOfCups = countEmptyCups();
let cupCounter = smallCup.length;


function addClickEvent(element) {
   element.addEventListener("click", function () {
      if ((element.classList.contains("full")) == false) {
         element.classList.add("full");
      }
      else element.classList.remove("full");
      countEmptyCups();
   });
}

smallCup.forEach(addClickEvent);

// smallCup.forEach((cup) => {
//    cup.addEventListener("click", function () {
//       if ((cup.classList.contains("full")) == false) {
//          cup.classList.add("full");
//       }
//       else cup.classList.remove("full");
//       countEmptyCups();
//    })
// });

function countEmptyCups() {
   let fullCups = document.querySelectorAll(".full").length;
   let amountOfCups = document.querySelectorAll(".cup-small");
   let emptyCups = amountOfCups.length - fullCups;
   console.log(fullCups + " full");


   if (emptyCups === 0) {
      percentageBottle.style.visibility = 'hidden';
      percentageBottle.style.height = 0;
   }

   else {
      percentageBottle.style.visibility = 'visible';
      percentageBottle.style.height = `${emptyCups / amountOfCups.length * 360}px`;
      percentageBottle.innerText = `${Math.floor((emptyCups / amountOfCups.length) * 100)}%`;
   }

   if (emptyCups === amountOfCups.length) {
      remainedBottle.style.visibility = 'hidden';
      remainedBottle.style.height = 0;
   }
   else {
      remainedBottle.style.visibility = 'visible';
      litersBottle.innerText = `${fullCups * 0.25}L`;
   }

}

//New Code



quantityMinus.addEventListener("click", function () {

   if (cupCounter <= 8) {
      alert("Min amount is 2 liter");
   }
   else {
      const updatedCups = document.querySelectorAll(".cup-small");
      cupsContainer.removeChild(updatedCups[updatedCups.length - 1]);
      cupCounter--;
      updateGoal();
      countEmptyCups();
   }
})

quantityPlus.addEventListener("click", function () {
   if (cupCounter >= 16) {
      alert("Max amount is 4 liter");
   }
   else {
      createNewBottle();
      cupCounter++;
      countEmptyCups();
   }

   console.log(cupCounter);
   updateGoal();
})

function createNewBottle() {
   const newBottle = document.createElement('div');
   newBottle.className = "cup cup-small full";
   newBottle.appendChild(document.createTextNode("250ml"));
   cupsContainer.appendChild(newBottle);
   console.log(newBottle);
   addClickEvent(newBottle);
}

function updateGoal() {
   goal.innerText = `${cupCounter * 0.25}`;
   console.log(goal);
}