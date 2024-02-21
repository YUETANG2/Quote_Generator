// content.js
console.log("Content Script is on");

function injectQuote(quote) {
  const quoteElement = document.createElement("div");
  quoteElement.style.position = "fixed";
  quoteElement.style.bottom = "20px";
  quoteElement.style.right = "20px";
  quoteElement.style.background = "rgba(255, 255, 255, 0.9)";
  quoteElement.style.padding = "10px";
  quoteElement.style.borderRadius = "5px";
  quoteElement.innerText = `Random Quote: ${quote}`;
  document.body.appendChild(quoteElement);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'generateQuote') {
    const quotes = [
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
      'The way to get started is to quit talking and begin doing. - Walt Disney',
      'Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats'
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
  }
});
