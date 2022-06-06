const button = document.querySelector("#button");
const result = document.querySelector("#result");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

button.addEventListener("click", () => {
  recognition.start();
});

recognition.onend = (e) => {
  console.log("koniec");
};

recognition.onstart = (e) => {
  console.log("Misrpopchone is ready ( :");
};

recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  result.innerHTML = transcript;
};

recognition.onerror = (e) => {
  console.log("Błąd");
  console.log(e.error);
};
