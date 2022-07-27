const allTds = document.querySelectorAll(" .tr td");

let equation = "";

// handelClick function on all tds
const handelClick = (e) => {
  if (e.target.innerText === "Sin") {
    equation += "sin(";
  } else if (e.target.innerText === "Cos") {
    equation += "cos(";
  } else if (e.target.innerText === "Tan") {
    equation += "tan(";
  } else {
    equation += `${e.target.innerText}`;
  }
  document.querySelector("#display").value = ` ${equation}`;
};

// calculate button click
const calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", () => {
  if (equation.includes("sin")) {
    const firstBracket = equation.indexOf("(");
    const lastBracket = equation.indexOf(")");
    let sins = equation.slice(firstBracket + 1, lastBracket);
    sins = Math.sin((sins * Math.PI) / 180).toFixed(1);
    document.querySelector("#display").value = `${equation} = ${sins} `;
  } else if (equation.includes("cos")) {
    const firstBracket = equation.indexOf("(");
    const lastBracket = equation.indexOf(")");
    let coss = equation.slice(firstBracket + 1, lastBracket);
    coss = Math.cos((coss * Math.PI) / 180).toFixed(2);
    document.querySelector("#display").value = `${equation} = ${coss} `;
  } else if (equation.includes("tan")) {
    const firstBracket = equation.indexOf("(");
    const lastBracket = equation.indexOf(")");
    let tans = equation.slice(firstBracket + 1, lastBracket);
    tans = Math.tan((tans * Math.PI) / 180).toFixed(1);
    document.querySelector("#display").value = `${equation} = ${tans} `;
  } else {
    const result = eval(equation);
    document.querySelector("#display").value = `${equation} = ${result} `;
  }
});

// catch all click events
allTds.forEach((element) => {
  element.addEventListener("click", handelClick);
});

// clear button click
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  equation = "";
  document.querySelector("#display").value = equation;
});
