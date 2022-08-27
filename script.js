window.onload = getDrinks;

const btn = document.querySelector('button');
btn.addEventListener('click', getDrinks);

const prev = document.getElementById('prev');
prev.addEventListener('click', e => {
  scrollDrinks(-1);
});

const next = document.getElementById('next');
next.addEventListener('click', e => {
  scrollDrinks(1);
});

let count = 0;
let drinkArray;

function getDrinks(e) {
  e.preventDefault();
  let drink = document.querySelector('input').value;
  // Sanitize input
  drink = drink.toLowerCase().trim();

  // Deal with spaces
  drink = drink.split(' ').join('%20');

  // Make fetch happen
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      drinkArray = [];
      data.drinks.forEach(drink => drinkArray.push(drink));
      count = 0;
      setDrink(count);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

function scrollDrinks(change) {
  count += change;
  if (count < 0) count = drinkArray.length - 1;
  else if (count >= drinkArray.length) count = 0;
  setDrink(count);
}

function setDrink(count) {
  console.log(drinkArray[count]);
  const drinkName = document.querySelector('h2');
  drinkName.textContent = drinkArray[count].strDrink;
  const img = document.querySelector('img');
  img.src = drinkArray[count].strDrinkThumb;
  const instructions = document.querySelector('p');
  instructions.textContent = drinkArray[count].strInstructions;
}