let a = ""; // first number
let b = ""; // second number
let sign = ""; // just sign
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// screen
const out = document.querySelector(".calc-screen p");

function clearAll() {
   a = ""; // first number and result
   b = ""; // second number
   sign = ""; // just sign
   out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll(); // button ac
document.querySelector(".buttons").onclick = (event) => {
   // no button pressed
   if (!event.target.classList.contains("btn")) return;
   // button AC pressed
   if (event.target.classList.contains("ac")) return;

   out.textContent = "";
   // return pressed button
   const key = event.target.textContent;

   // if pressed 0-9 or .
   if (digit.includes(key)) {
      if (b === "" && sign === "") {
         a += key;
         out.textContent = a;
      } else if (a !== "" && b !== "" && finish) {
         b = key;
         finish = false;
         out.textContent = b;
      } else {
         b += key;
         out.textContent = b;
      }
      console.table(a, b, sign);
      return;
   }

   // if pressed +, -, /, X or %
   if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.table(a, b, sign);
      return;
   }

   // if pressed =
   if (key === "=") {
      if (b === "") b = a;
      switch (sign) {
         case "+":
            a = +a + +b;
            break;
         case "-":
            a = a - b;
            break;
         case "X":
            a = a * b;
            break;
         case "/":
            if (b === "0") {
               out.textContent = "Error";
               a = "";
               b = "";
               sign = "";
               return;
            }
            a = a / b;
            break;
      }
      finish = true;
      out.textContent = a; // output result to field
      console.table(a, b, sign); // output result to console
   }
};
