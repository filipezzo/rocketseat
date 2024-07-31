const formEl = document.querySelector("form");
const quantityInput = document.querySelector("[data-quantity]");
const fromInput = document.querySelector("[data-from]");
const toInput = document.querySelector("[data-to]");
const checkedEl = document.querySelector('input[type="checkbox"]');
const resultsEl = document.querySelector("#results");
const sectionEl = document.querySelector("[data-section]");

let numberOfRaffles = 1;

quantityInput.oninput = () => {
  quantityInput.value = sanitazeInput(quantityInput.value, 100);
};

fromInput.onchange = () => {
  let value = sanitazeInput(fromInput.value, 99);
  fromInput.value = value < 1 ? 1 : value;
};

toInput.onchange = () => {
  let value = sanitazeInput(toInput.value, 100);
  if (Number(value) < Number(fromInput.value)) {
    value = Number(fromInput.value) + 1;
    toInput.value = value > 100 ? 100 : value;
  } else {
    toInput.value = value;
  }
};

formEl.onsubmit = (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(formEl);
    const quantity = parseInt(formData.get("quantity"));
    const from = parseInt(formData.get("from"));
    const to = parseInt(formData.get("to"));
    let arrayNumbers = [];

    for (let i = 0; i < quantity; i++) {
      let randomNumber;
      randomNumber = Math.floor(Math.random() * (to - from + 1) + from);
      arrayNumbers.push(randomNumber);
    }

    displayNumbers(arrayNumbers);
    numberOfRaffles++;
    sectionEl.style.display = "none";
    resultsEl.style.display = "block";
  } catch (error) {
    console.log(error);
    alert("algo deu errado!");
  }
};

function sanitazeInput(value, max) {
  let sanitazedValue = value.replace(/\D/g, "");
  sanitazedValue = Number(sanitazedValue);
  return sanitazedValue > max ? max : sanitazedValue;
}

function displayNumbers(numbers) {
  try {
    resultsEl.innerHTML = "";
    const divEl = document.createElement("div");
    const h2El = document.createElement("h2");
    const pEl = document.createElement("p");
    const ulEl = document.createElement("ul");
    const btnEl = document.createElement("button");

    ulEl.classList.add("list");

    h2El.textContent = "resultado do sorteio";
    h2El.style.textTransform = "uppercase";
    h2El.style.textAlign = "center";

    pEl.textContent = `${numberOfRaffles} resultado`;
    pEl.style.textTransform = "uppercase";
    pEl.style.marginBlock = "16px";

    numbers.forEach((number) => {
      const itemEl = document.createElement("li");
      itemEl.textContent = number;
      ulEl.append(itemEl);
    });

    btnEl.textContent = "SORTEAR NOVAMENTE";
    btnEl.classList.add("btn");
    btnEl.style.marginTop = "auto";
    btnEl.onclick = () => {
      resultsEl.style.display = "none";
      sectionEl.style.display = "block";
      formEl.reset();
    };
    divEl.append(h2El, pEl, ulEl, btnEl);
    resultsEl.appendChild(divEl);
  } catch (error) {
    alert("algo deu errado");
  }
}
