"use strict";

const btn1 = document.querySelectorAll(".btn");
const btn2 = document.querySelectorAll(".btn2");
const valin = document.querySelector(".inputt");
const result = document.querySelector(".result");
const btnConvert = document.querySelector(".convrt-btn");
const valnow = document.querySelector(".valnow");
const valnow2 = document.querySelector(".valnow2");
const valres = document.querySelector(".valres");
const valres2 = document.querySelector(".valres2");
const valnum = document.querySelector(".valnum");
const valnum2 = document.querySelector(".valnum2");

let base = "AZN";
let symbols = "USD";

btn1.forEach((element) => {
  element.addEventListener("click", () => {
    btn1.forEach((nav) => nav.classList.remove("active"));
    element.classList.add("active");
    base = element.innerText;
    valnow.innerText = element.innerText;
    valres2.innerText = element.innerText;

    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((data) => {
        valnum.innerText = (
          (1 / data.rates[base]) *
          data.rates[symbols]
        ).toFixed(2);

        valnum2.innerText = (
          (1 / data.rates[symbols]) *
          data.rates[base]
        ).toFixed(2);
      });
  });
});

btn2.forEach((element) => {
  element.addEventListener("click", () => {
    btn2.forEach((nav) => nav.classList.remove("active"));
    element.classList.add("active");
    symbols = element.innerText;
    valnow2.innerText = element.innerText;
    valres.innerText = element.innerText;

    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((data) => {
        valnum.innerText = (
          (1 / data.rates[base]) *
          data.rates[symbols]
        ).toFixed(2);

        valnum2.innerText = (
          (1 / data.rates[symbols]) *
          data.rates[base]
        ).toFixed(2);
      });
  });
});

btnConvert.addEventListener("click", () => {
  fetch("https://api.exchangerate.host/latest")
    .then((res) => res.json())
    .then((data) => {
      let money = Number(valin.value);
      // let res = result.innerText;
      result.innerText = (
        (money / data.rates[base]) *
        data.rates[symbols]
      ).toFixed(2);
    });
});

console.log(valnum.innerText);
