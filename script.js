const API_KEY = "JiF6snLYmMNeUgIoY8BHVQ==BRK76oel4HhOifhn";
const apiURL = "https://api.api-ninjas.com/v1/quotes";

function getQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const loader = document.getElementById("loader");

  loader.classList.remove("hidden");
  quote.textContent = "";
  author.textContent = "";

  fetch(apiURL, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `There was an error with your request: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      const quoteData = data[0];
      quote.textContent = `“${quoteData.quote}”`;
      author.textContent = `- ${quoteData.author}`;
    })
    .catch((error) => {
      console.error("Error calling API:", error);
    })
    .finally(() => {
      loader.classList.add("hidden");
    });
}
