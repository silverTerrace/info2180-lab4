"use strict";

document.addEventListener("DOMContentLoaded", load);

function load() {
  document.querySelector("button").onclick = getList;
}

function getList() {
  fetch("http://localhost/info2180-lab4/superheroes.php")
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
