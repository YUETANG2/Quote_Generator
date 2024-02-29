console.log(document.getElementById("generateButton").innerHTML);

//when button is clicked
document.getElementById("generateButton").addEventListener("click", () => {
  //Send request to content.js to generate a random quote
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'generateQuote' });
  });
});
