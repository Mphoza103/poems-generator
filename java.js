function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    dealay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let rulesInput = document.querySelector("#user-rules");
  let apiKey = "8a41t5bf055f3b901f1e9o1741935a65";
  let prompt = `User instructions are: Generate a poem about ${rulesInput.value}`;
  let context =
    "You are an excellent poem writer and you are required to write a poem that follows user instructions. Write the 5 lines on any topic the user enters. Include a line <br /> and a signature at the bottom of the page 'Shecodes AI`.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a poem about ${rulesInput.value}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#ai-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
