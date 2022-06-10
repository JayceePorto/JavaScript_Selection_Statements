console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const num = 22;

let userInput = window.prompt("Guess a number");

if (userInput < num) {
  alert("Too low");
} else if (userInput > num) {
  alert("Too high");
} else {
  alert("Congratulations. You guessed correctly!");
}

// Exercise 2
let birthMonth = window
  .prompt("What is your birth month?")

switch (birthMonth.toLowerCase()) {
  case "december": 
  case "january": 
  case "february":
    console.log("You were born in Winter.");
    break;
  case "april":
  case "may":
    alert("You were born in Spring.");
    break;
  case "june":
  case "july":
  case "august":
  case "september":
    alert("You were born in Summer.");
    break;
  case "october":
  case "november":
    alert("You were born in Fall.");
    break;
  default:
    alert("You entered a invalid month.");
}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type ="Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BU") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    type ="Other";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    type ="Other";
}

console.log(`Product: ${size} ${color} ${type}`);