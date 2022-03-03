const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  const inputs = document.getElementsByTagName("input");
  const arrInputs = Array.from(inputs);
  arrInputs.forEach((elm) => (elm.value = ""));
});
