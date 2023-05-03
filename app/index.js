const currentNumber = () =>
  parseInt(document.getElementById("number").innerHTML);

document.getElementById("increment").onclick = () => {
  const updatedValue = currentNumber() + 1;
  updateNumber(updatedValue);
};

document.getElementById("decrease").onclick = () => {
  if (currentNumber() === 0) {
    alert("Current value is already 0 !");
    return;
  }

  const updatedValue = currentNumber() - 1;
  updateNumber(updatedValue);
};

document.getElementById("restart").onclick = () => {
  updateNumber(0);
};

const updateNumber = (newValue) => {
  document.getElementById("number").innerHTML = newValue;
};
