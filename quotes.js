$(document).ready(function(){
  $.getJSON('http://www.json-generator.com/api/json/get/ceKeXtpMRK?indent=2', function(data) {
    showQuotes(data.quotes);
});
function showQuotes(quotes){
  var newQuote = document.createElement('blockquote');
  var author = document.createElement('p');
  var random = quotes[Math.floor(Math.random() * (54 - 0)) + 0];
    $(newQuote).html(random.quote);
    $(author).html(random.author);
    $('.quotes').append(newQuote);
    $('.quotes').append(author);
  }
})
