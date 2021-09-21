const fetch = require('cross-fetch');

const = (username) => {
  fetch(`https://api.github.com/users/${username}/followers`)
  .then((response) => {
    if(response.ok){
      return response.json()
      //.then(data => console.log(data));
    }
      throw new Error('Api is not available') 
    })
  .catch((error) => {
    console.error('Error fetching data: ', error)
  })
};
//getUserFollowers('katharinasch')
module.exports.getUserFollowers = getUserFollowers;
