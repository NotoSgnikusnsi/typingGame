const quotes = [
  "The only thing we have to fear is fear itself.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "The only way to do great work is to love what you do.",
  "It always seems impossible until it's done.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "You miss 100% of the shots you don't take.",
  "The only true wisdom is in knowing you know nothing.",
  "Life is what happens when you're busy making other plans."
]
let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("typed-value");

document.getElementById("start").addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  words = quote.split(" ");
  wordIndex = 0;

  const spanWords = words.map(function (word) { return `<span>${word}</span>` });
  quoteElement.innerHTML = spanWords.join(" ");
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';

  typedValueElement.value = '';
  typedValueElement.focus();

  startTime = new Date().getTime();
})
