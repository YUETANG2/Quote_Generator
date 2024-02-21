// popup.js
console.log(document.getElementById("generateButton").innerHTML);

document.getElementById("generateButton").addEventListener("click", () => {
  console.log("button is clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'generateQuote' });
  });
});
