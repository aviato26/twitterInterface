
let friendData = (frnd) => {
  let list = [];

  for(let i = 0; i < frnd.length; i++){
    if(i > 4){ break; }
    list.push(
      {
        name: frnd[i].name,
        screenName: frnd[i].screen_name,
        following: (frnd[i].following) ? 'Following' : '',
        img: frnd[i].profile_image_url_https
      }
    )
  }
  return list
}

module.exports = friendData
