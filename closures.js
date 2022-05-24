function counter() {
  let count = 0;

  return {
    increase: function () {
      ++count;
      return this;
    },

    decrease() {
      --count;
      return this;
    },

    reset() {
      count = 0;
      return this;
    },

    get count() {
      return count;
    },
  };
}

const counter1 = counter();
const counter2 = counter();

const count1 = counter1.increase().increase().count;
const count2 = counter2.increase().count;

console.log(count1);
console.log(count2);

function createHelpfulUi() {
  const config = [
    { id: "main", hint: "Back to the main page" },
    { id: "about", hint: "More information about the company" },
    { id: "products", hint: "List of the current products" },
  ];

  const hintBox = document.getElementById("hint");

  for (const item of config) {
    const { id, hint } = item;
    const btn = document.getElementById(id);
    btn.addEventListener("mouseenter", function () {
      hintBox.innerText = hint;
    });
    btn.addEventListener("mouseleave", function () {
      hintBox.innerText = "";
    });
  }
}

if (typeof window !== 'undefined') {
  createHelpfulUi();
}