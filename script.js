const API_KEY = "JiF6snLYmMNeUgIoY8BHVQ==BRK76oel4HhOifhn";
const apiURL = "https://api.api-ninjas.com/v1/quotes";

function getQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const category = document.getElementById("category");
  const loader = document.getElementById("loader");

  loader.classList.remove("hidden");
  quote.textContent = "";
  author.textContent = "";
  category.textContent = "";

  fetch(apiURL, {
    method: "GET",
    headers: { "X-Api-Key": API_KEY },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`ERR ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const d = data[0];
      quote.textContent = `"${d.quote}"`;
      author.textContent = `-- ${d.author}`;
      if (d.category) category.textContent = `[${d.category.toUpperCase()}]`;
    })
    .catch((error) => {
      quote.textContent = `ERROR: ${error.message}`;
    })
    .finally(() => {
      loader.classList.add("hidden");
    });
}

function toggleTheme() {
  const body = document.getElementById("body");
  const btn = document.getElementById("modeBtn");
  const isAmber = body.classList.toggle("amber");
  btn.textContent = isAmber ? "[SWITCH TO GREEN]" : "[SWITCH TO AMBER]";
}

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);
