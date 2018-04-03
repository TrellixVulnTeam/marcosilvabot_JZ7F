console.log("Tweeting");

var Twit = require('twit')

var T = new Twit({
 consumer_key:         'R5pqmZeN1a9p3d7nvS86tsNxN',
 consumer_secret:      'ZZYNe3TqLj53CDlIE8Q15aNkU3uPWv6q11mtoVQCldX1UcWNA7',
 access_token:         '981271879192334336-lii30I0ul81A8VB4jNh685UHemS9gwD',
 access_token_secret:  '6QKffWWCTwIkIQQcNdBsEz3DY3RU4yXVksxDdH3NiYeZp',
 timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

var tweet = "Marco Silva is currently available for hire, @andrearadri. Please hire him. #MarcoSilvaForLeeds #lufc"

sendTweet();

function sendTweet() {
    T.post('statuses/update', { status: tweet }, function(err, data, response) {
      var d = new Date();
      var hours = d.getHours(); 
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      console.log("MarcoSilvaBot just Tweeted: " + tweet + " | Tweeted at: " + hours + ":" + minutes + " (UTC)");
  })
}



