const fetch = require('cross-fetch');

const getUserFollowers = (username) => {
  return fetch(`https://api.github.com/users/${username}/followers`)
  .then((response) => {
    if(response.ok){
      return response.json()
      //.then(data => console.log(data.length));
    }
      throw new Error('Api is not available') 
    })
  .catch(error => {
    console.error('Error fetching data: ', error)
  })
};
//getUserFollowers('octocat')

module.exports.getUserFollowers = getUserFollowers;
