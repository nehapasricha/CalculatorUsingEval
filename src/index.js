import "./styles.css";

document.getElementById("container").addEventListener("click", (ev) => {
  const val = ev.target.value;
  if (val === "C") {
    document.calculator2.answer2.value = "";
  } else {
    document.calculator2.answer2.value += val;
  }
});

document.querySelector(".equals").addEventListener("click", () => {
  document.calculator2.answer2.value = eval(document.calculator2.answer2.value);
});
