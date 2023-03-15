const numbersList = ["1", "2", "3", "4", "5"];
let x;

// container
const container = document.querySelector(".container");

// numbers
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

// submit button
const btn = document.querySelector(".btn");

one.addEventListener("click", () => {
  x = 1;
});
two.addEventListener("click", () => {
  x = 2;
});
three.addEventListener("click", () => {
  x = 3;
});
four.addEventListener("click", () => {
  x = 4;
});
five.addEventListener("click", () => {
  x = 5;
});

btn.addEventListener("click", () => {
  console.log(x);
  container.style.textAlign = "center";
  container.innerHTML = `
        <img id='thankImg' src="images/illustration-thank-you.svg" alt="thank you image" />
        <p id='bubble'>You selected ${x} out of 5</p>
        <h1 id='thankYou'>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more
    support, don’t hesitate to get in touch!</p>
  `;
});
