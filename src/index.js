function poemGenerator(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "I had no thought of violets of late",
    autoStart: true,
    delay: 35,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
