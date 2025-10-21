function showPoem(response){
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
  let context = "You are a professional Poet, who can write amazing short poems in any topic.Separate each line with <br /> and at the end of the poem, insert <br  /> then insert below `by SheCodes AI` using <strong></strong> element";
  let topic = document.querySelector("#topic");
  let prompt = `Write a short poem about ${topic.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemResult = document.querySelector("#poem-result");
  console.log("Generating a poem for you")  
  axios.get(apiURL).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);