function displayPoem(response) {
  console.log("poem generated ");
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
    "You are a romantic poem expect and love to write short poems. Your mission is to write a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.Do not include a title to the poem. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);

  poemElement.innerHTML = "No man exist alone";
}

let poemFormElement = document.querySelector("#ai-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
