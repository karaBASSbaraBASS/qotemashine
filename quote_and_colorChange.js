// global variables
var currentQuote = '';
var currentAuthor = '';
var qurl = '';
var aurl = ''; 
var curPost = '';

function generate_quote (){
var colors = ["#589e9b","#6de871","#adaa00","#e8ab3f","#ff7051"];
//var colors = ["rgb(88, 158, 155)","rgb(109, 232, 113)","rgb(173, 170, 0)","rgb(232, 171, 63)","rgb(255, 112, 81)"];
var rand = Math.floor(Math.random() * colors.length);
var color_chose = colors[rand];

 // go to to https://market.mashape.com/ 
 // log in using "X-Mashape-Key"
 // chose widget "random-famous-quotes"
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers: {
      "X-Mashape-Key": "f6BF6Cgiz3mshky0UAk3hLtznYP4p1Fn3UUjsnanA1TjSUPOTu",
      "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function(response){   
      var resp = response[0];
      currentQuote = resp.quote;
      currentAuthor = resp.author;
      // replace all spaces to spaces-code symboll - "%20"
      qurl = currentQuote.replace(/[ /]/g,'%20');
      aurl = currentAuthor.replace(/[ /]/g,'%20');
      // generate twetter post link
      curPost = 'https://twitter.com/intent/tweet?hashtags=quotes&text="'+ qurl +'" -' + aurl;     
// fade qote block in 500ms   
    $("#aphorism").animate({
          opacity: 0
        }, 500,
// past response to the qote block and appear it in 500ms
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(currentQuote);
        });
// fade qote block in 500ms 
    $("#aphorism-autor").animate({
          opacity: 0
        }, 500,
 // past response to the qote block and appear it in 500ms
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html("- " + currentAuthor);
        });
      
 // smoothly color change     
      $("html body").animate({
        backgroundColor: color_chose
      }, 1000);
      $("#aphorism_block").animate({
        color: color_chose
      }, 1000);
      $(".button").animate({
        backgroundColor: color_chose
      }, 1000);
  
    } //success close
  }); // ajax close
}; //generate quote close
// open new window with tweet on click
function openTweet() {
    console.log(curPost)
    window.open(curPost); 
};


