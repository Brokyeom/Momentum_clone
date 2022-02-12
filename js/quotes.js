const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ]; // 명언들을 모아놓은 배열
  
  const quote = document.querySelector("#quote span:first-child"); // #quote 의 첫 번쨰 span 을 변수로 선언한다.
  const author = document.querySelector("#quote span:last-child"); // #quote 의 두 번쨰 span 을 변수로 선언한다.
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Math.random 을 quote의 명언 수만큼 랜덤으로 출력하는 변수를 선언한다.
  
  quote.innerText = todaysQuote.quote;
  author.innerText = ` - ${todaysQuote.author}`;