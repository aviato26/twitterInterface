
let tweets = (data) => {
  let hour;
  let collection = [];
  let obj = {};

  for(let i = 0; i < data.length; i++){
    if(i > 4){ break; }

    hour = data[i].created_at
    collection.push({
      img: data[i].user.profile_image_url_https,
      name: data[i].user.name,
      userName: data[i].user.screen_name,
      tweet: data[i].text,
      time: Math.floor(Math.abs( new Date() - new Date(hour)) / 36e5),
      reTweet: data[i].retweet_count,
      fav: data[i].favorite_count
    })
  }

  return collection
}

module.exports = tweets
