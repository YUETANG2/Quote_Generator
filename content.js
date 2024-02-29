/* 
* Message Passing Documentation: 
* https://developer.chrome.com/docs/extensions/develop/concepts/messaging
*/

console.log("content script is on!")
let hello = document.createElement("p"); 
let header = document.getElementsByTagName("h1")[0];
header.innerHTML = "";
header.appendChild(hello);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //generate a random quote upon receiving message 
  if (request.message === 'generateQuote') {
    const quotes = [
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
      'The way to get started is to quit talking and begin doing. - Walt Disney',
      'Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats',
      'You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one. -John Lennon',
      'Do one thing every day that scares you. -Eleanor Roosevelt',
      'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson'
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    //display the quote
    hello.innerHTML = randomQuote;
  }
});


