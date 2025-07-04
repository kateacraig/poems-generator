function displayNewPoem{
    console.log("poem generated");

  new Typewriter("#spanish-poem", {
    strings: translatePoem(response.data.answer),
    autoStart: true,
    delay: 50,
    cursor: null,
    loop: false,
  }); 
}

function translatePoem (response){
    let newApiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
    let newPrompt = displayPoem(response.data.answer);
    let newContext = `Translate ${displayPoem(response.data.answer)} into Spanish.`;
    let newApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${newPrompt}&context=${newContext}&key=${newApiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${newPrompt}`);
    console.log(`Context: ${newContext}`);

     axios(newApiUrl).then(displayNewPoem);
}

function displayPoem(response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
    loop: false,
  });

  function translatePoem();
}

function poemGenerator(event) {
  event.preventDefault();

  let apiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
  let context =
    "You are nature poet who loves to write short poems. Your mission is to generate a 4 line poem in HTML and separate each line with a <br />. Make sure to follow the user input. Do not include a poem title. Sign the poem with 'SheCodes AI' at the end of the poem (NOT at the beginning) after two <br/>s inside a <strong> element. Do NOT write '```HTML' at the beginning of the poem. Do not write '```' at the end of the poem or the end of signing the poem.";
  let poemInput = document.querySelector("#poem-input");
  let prompt = `User input is: Write a poem about ${poemInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
