let userResult = document.querySelector("h2");
let btn = document.querySelector(".btn");
let userInput = document.querySelector("#input").value;
let userPick = document.querySelector("input");

userPick.addEventListener("change", () => {
  userInput = Number(userPick.value);
});
btn.addEventListener("click", function () {
  if (userInput % 2 !== 0) {
    userResult.innerHTML = `${userInput} is Odd number`;
  } else if (userInput == 0) {
    userResult.innerHTML = `Please enter a number`;
  } else {
    userResult.innerHTML = `${userInput} is Even number`;
  }

  userInput = "";
});
