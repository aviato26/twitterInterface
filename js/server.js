
// load dependencies
let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();
let parsedTweets = require('./userTimeLine.js');
let friendList = require('./friendData.js');
let dmInfo = require('./dmList.js');
let Twit = require('twit');
let config = require('../config.js');
let twitter = new Twit(config);

app.set('views');
app.set('view engine', 'pug');

  // request for tweets
  twitter.get('/statuses/user_timeline', null, function(err, tw, res){
    if(err){console.log('problem with tweet request')}

    // request for friends list
    twitter.get('/friends/list', null, function(err, following, res){
      if(err){ console.log('problem with friend list request')}

      // request for direct messages
      twitter.get('/direct_messages/events/list', null, function(err, dm, res){
        if(err){console.log('problem with direct messages request')}

        // filter the incoming responses to object with the required information
        let friends = friendList(following.users);
        let tweets = parsedTweets(tw);
        let dms = dmInfo(dm, tw);

        // add the object to be rendered once the home page loads
        app.get('/', (req, res) => {
          res.render('layout',
            {
              tweets,
              friends,
              dms
            }
          );
        })
      })
    })
  })

app.listen(3000, () => {
  console.log('server up and running on port 3000')
})
