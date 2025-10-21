function showPoem(response) {
  new Typewriter("#poem-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "3b40dec40fdfb23oc0442e98b7f7at2b";
  let context =
    "You are a poet who writes short poems on any topic.Each line should end with <br />.After the poem, add <br /> and then write by SheCodes AI using the <strong> tag";
  let topic = document.querySelector("#topic");
  let prompt = `Write a short poem about ${topic.value}`;
  let formattedTopic =
    topic.value.charAt(0).toUpperCase() + topic.value.slice(1).toLowerCase();
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemResult = document.querySelector("#poem-result");
  poemResult.classList.remove("hidden");
  poemResult.innerHTML = `<div class="animate__heartBeat">Generating a poem about ${formattedTopic}...</div>`;
  axios.get(apiURL).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
