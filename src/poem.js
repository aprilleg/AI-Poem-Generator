function generatePoem(event) {
  event.preventDefault();
  
  let poemResult = document.querySelector("#poem-result");

  new Typewriter("#poem-result", {
    strings: "This is where the poem show",
    autoStart: true,
    delay: 50,
    cursor: "",
  });

}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);