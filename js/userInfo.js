
let users = (data) => {
  return {
    name: data.name,
    screenName: data.screen_name,
    friends: data.friends_count,
    img: data.profile_image_url_https
  }
}

module.exports = users
