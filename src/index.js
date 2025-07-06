function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
    loop: false,
  });
}

function poemGenerator(event) {
  event.preventDefault();

  let apiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
  let context =
    "You are nature poet who loves to write short poems. Your mission is to generate a 4 line English poem in HTML and separate each line with a <br />. Make sure to follow the user input. Do not include a poem title. Then add 1 <br/> and then translate the English poem into Spanish, using basic HTML and separating each line using a <br/> following the same 4 line format. 1 line above the Spanish translated poem, add '(Translated to Spanish)' with a font style of italics and a font weight of 300. Sign the poem with 'SheCodes AI' at the end of the Spanish poem (NOT at the beginning) after 2 <br/>s inside a <strong> element. Do NOT write '```HTML' at the beginning of the poem. Do not write '```' at the end of the poem or the end of signing the poem.";
  let poemInput = document.querySelector("#poem-input");
  let prompt = `User input is: Write a poem about ${poemInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">
      ⏳ Generating a nature poem about a ${poemInput.value}.
    </div>`;

  axios(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
