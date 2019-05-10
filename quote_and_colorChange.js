
function generate_quote (){
var colors = ["#589e9b","#6de871","#adaa00","#e8ab3f","#ff7051"];
//var colors = ["rgb(88, 158, 155)","rgb(109, 232, 113)","rgb(173, 170, 0)","rgb(232, 171, 63)","rgb(255, 112, 81)"];
var rand = Math.floor(Math.random() * colors.length);
var color_chose = colors[rand];
var currentQuote = '';
var currentAuthor = '';
 // go to to https://market.mashape.com/ 
 // log in using "X-Mashape-Key"
 // chose widget "random-famous-quotes"
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers: {
      "X-Mashape-Key": "f6BF6Cgiz3mshky0UAk3hLtznYP4p1Fn3UUjsnanA1TjSUPOTu",
      "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
    }, // header close
    
// if login sucsess - parse quote and autor name
    success: function(response){   
      
      var resp = response[0];
      currentQuote = resp.quote;
      currentAuthor = resp.author; 
  
//$('#new-quote').on('click', generate_quote ());
// in this case gonna be link creating script    
    var qurl = resp.quote.replace(/[ /]/g,'%20');
    var aurl = resp.author.replace(/[ /]/g,'%20'); 
  $('#tweet-quote').on('click', function() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&text="'+ qurl +'" -' + aurl); 
  });
      
 //--------don't figure out how to create "tumblr post"     
  // $('#tumblr-quote').on('click', function() {
  //   window.open("https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&title=Quote%20Machine&content=" + qurl + "&caption=" + aurl);
  // });
//---------don't figure out how to create "tumblr post" 
      
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


