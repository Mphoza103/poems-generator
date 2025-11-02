function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "No man exist alone",
    autoStart: true,
    dealay: 1,
    cursor: "",
  });

  poemElement.innerHTML = "No man exist alone";
}

let poemFormElement = document.querySelector("#ai-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
