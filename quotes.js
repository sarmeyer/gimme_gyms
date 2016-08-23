$(document).ready(function(){
  var newQuote = document.createElement('blockquote');
  var author = document.createElement('p');
  var quotes = [
  {
  quote: "If you want to achieve greatness stop asking for permission.",
  author: "--Anonymous"
  },
  {
  quote: "If you want to achieve greatness stop asking for permission.",
  author: "--Anonymous"
  },
  {
  quote: "Things work out best for those who make the best of how things work out.",
  author: "--John Wooden"
  },
  {
  quote: "To live a creative life, we must lose our fear of being wrong.",
  author: "--Anonymous"
  },
  {
  quote: "If you are not willing to risk the usual you will have to settle for the ordinary.",
  author: "--Jim Rohn"
  },
  {
  quote: "Trust because you are willing to accept the risk, not because it's safe or certain.",
  author: "--Anonymous"
  },
  {
  quote: "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
  author: "--Swami Vivekananda"
  },
  {
  quote: "All our dreams can come true if we have the courage to pursue them.",
  author: "--Walt Disney"
  },
  {
  quote: "Good things come to people who wait, but better things come to those who go out and get them.",
  author: "--Anonymous"
  },
  {
  quote: "If you do what you always did, you will get what you always got.",
  author: "--Anonymous"
  },
  {
  quote: "Success is walking from failure to failure with no loss of enthusiasm.",
  author: "--Winston Churchill"
  },
  {
  quote: "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
  author: "--Proverb"
  },
  {
  quote: "Successful entrepreneurs are givers and not takers of positive energy.",
  author: "--Anonymous"
  },
  {
  quote: "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
  author: "--Vaibhav Shah"
  },
  {
  quote: "Opportunities don't happen, you create them.",
  author: "--Chris Grosser"
  },
  {
  quote: "Try not to become a person of success, but rather try to become a person of value.",
  author: "--Albert Einstein"
  },
  {
  quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  author: "--Eleanor Roosevelt"
  },
  {
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
  author: "--Thomas A. Edison"
  },
  {
  quote: "If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.",
  author: "--Kim Garst"
  },
  {
  quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
  author: "--David Brinkley"
  },
  {
  quote: "No one can make you feel inferior without your consent.",
  author: "--Eleanor Roosevelt"
  },
  {
  quote: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
  author: "--Henry Ford"
  },
  {
  quote: "If you're going through hell keep going.",
  author: "--Winston Churchill"
  },
  {
  quote: "The ones who are crazy enough to think they can change the world, are the ones who do.",
  author: "--Anonymous"
  },
  {
  quote: "What seems to us as bitter trials are often blessings in disguise.",
  author: "--Oscar Wilde"
  },
  {
  quote: "The meaning of life is to find your gift. The purpose of life is to give it away.",
  author: "--Anonymous"
  },
  {
  quote: "When you stop chasing the wrong things, you give the right things a chance to catch you.",
  author: "--Lolly Daskal"
  },
  {
  quote: "I believe that the only courage anybody ever needs is the courage to follow your own dreams.",
  author: "--Oprah Winfrey"
  },
  {
  quote: "No masterpiece was ever created by a lazy artist.",
  author: "--Anonymous"
  },
  {
  quote: "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
  author: "--Nathaniel Hawthorne"
  },
  {
  quote: "Do one thing every day that scares you.",
  author: "--Anonymous"
  },
  {
  quote: "What's the point of being alive if you don't at least try to do something remarkable.",
  author: "--Anonymous"
  },
  {
  quote: "Life is not about finding yourself. Life is about creating yourself.",
  author: "--Lolly Daskal"
  },
  {
  quote: "Life is about making an impact, not making an income.",
  author: "–Kevin Kruse"
  },
  {
  quote: "Whatever the mind of man can conceive and believe, it can achieve.",
  author: "–Napoleon Hill"
  },
  {
  quote: "Strive not to be a success, but rather to be of value.",
  author: "–Albert Einstein"
  },
  {
  quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
  author: "–Robert Frost"
  },
  {
  quote: "I attribute my success to this: I never gave or took any excuse.",
  author: "–Florence Nightingale"
  },
  {
  quote: "You miss 100% of the shots you don’t take.",
  author: "–Wayne Gretzky"
  },
  {
  quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  author: "–Michael Jordan"
  },
  {
  quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  author: "–Amelia Earhart"
  },
  {
  quote: "Every strike brings me closer to the next home run.",
  author: "–Babe Ruth"
  },
  {
  quote: "Life isn’t about getting and having, it’s about giving and being.",
  author: "–Kevin Kruse"
  },
  {
  quote: "Life is what happens to you while you’re busy making other plans.",
  author: "–John Lennon"
  },
  {
  quote: "We become what we think about.",
  author: "–Earl Nightingale"
  },
  {
  quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
  author: "–Mark Twain"
  },
  {
  quote: "Life is 10% what happens to me and 90% of how I react to it.",
  author: "–Charles Swindoll"
  },
  {
  quote: "The most common way people give up their power is by thinking they don’t have any.",
  author: "–Alice Walker"
  },
  {
  quote: "The mind is everything. What you think you become.",
  author: "–Buddha"
  },
  {
  quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
  author: "–Chinese Proverb"
  },
  {
  quote: "An unexamined life is not worth living.",
  author: "–Socrates"
  },
  {
  quote: "Eighty percent of success is showing up.",
  author: "–Woody Allen"
  },
  {
  quote: "Your time is limited, so don’t waste it living someone else’s life.",
  author: "–Steve Jobs"
  },
  {
  quote: "Winning isn’t everything, but wanting to win is.",
  author: "–Vince Lombardi"
  }
  ]
    var random = quotes[Math.floor(Math.random() * (54 - 0)) + 0];
    $(newQuote).html(random.quote);
    $(author).html(random.author);
    $('.quotes').append(newQuote);
    $('.quotes').append(author);
  })
