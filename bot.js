//Code No Longer triggers.

var Twit = require('twit')

var T = new Twit({
 consumer_key:         'R5pqmZeN1a9p3d7nvS86tsNxN',
 consumer_secret:      'enter_here',
 access_token:         '981271879192334336-lii30I0ul81A8VB4jNh685UHemS9gwD',
 access_token_secret:  'enter_here',
 timeout_ms:           60*1000,
})

var tweet = "Marco Silva is no longer available for hire, @andrearadri, but Marcelo Bielsa is. #BielsaForLeeds #lufc"

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



