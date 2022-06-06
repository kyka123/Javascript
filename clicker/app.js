const button = document.querySelector("#button");

const addOne = () => {
  const current = Number(button.innerText);
  button.innerText = current + 1;
};

const clickEffect = (event) => {
  const effect = document.createElement("div");

  effect.classList.add("effect");

  effect.style.top = `${event.clientY - 20}px`;
  effect.style.left = `${event.clientX - 20}px`;

  document.body.appendChild(effect);
};

const handleClick = (event) => {
  if (event.target === button || event.target.classList.contains("effect")) {
    addOne();
    clickEffect(event);
  }
};

document.addEventListener("click", handleClick);
document.addEventListener("touchstart", handleClick);
