const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber)


if (randomNumber == 1) {
  let selectedFortune = fortune1;
  console.log(selectedFortune);
}
else if (randomNumber == 2) {
  let selectedFortune = fortune2;
  console.log(selectedFortune);
}
else if (randomNumber == 3) {
  let selectedFortune = fortune3;
  console.log(selectedFortune);
}
else if (randomNumber == 4) {
  let selectedFortune = fortune4;
  console.log(selectedFortune);
}
else if (randomNumber == 5) {
  let selectedFortune = fortune5;
  console.log(selectedFortune);
}

