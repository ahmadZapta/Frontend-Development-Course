// const btn = document.getElementById("downloadBtn");
// const btn = document.getElementsByClassName("downloadBtn");
const btn = document.querySelector("#downloadBtn");
const names = ["1", "2", "4"];
const namesObj = {
  name: "ahmad",
  degree: "CS"
};
console.log("namesObj ", namesObj.degree);

btn.addEventListener("click", function () {
  alert("CLicked");
});
