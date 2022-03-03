const resetButton = document.getElementById("reset");
const typeInput = document.getElementById("type");
const questionInput = document.getElementById("question");
const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const thirdInput = document.getElementById("third");

resetButton.addEventListener("click", function () {
  const inputs = document.getElementsByTagName("input");
  const arrInputs = Array.from(inputs);
  //   console.log(arrInputs);
  arrInputs.forEach((elm) => (elm.value = ""));
});
