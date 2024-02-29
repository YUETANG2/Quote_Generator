chrome.runtime.onInstalled.addListener(function () {
    //open a new tab with the link below
  chrome.tabs.create({ url: "https://download-directory.github.io/" }); 
});
