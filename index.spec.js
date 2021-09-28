var nock = require('nock');
var getUserFollowers = require('./index').getUserFollowers;

// This test actually calls the api and waits for response

test('Get followers', () => {
  return getUserFollowers('katharinasch').then((data) => {
    //console.log('DATA RETURNED: ', data);
    expect(data).toBeDefined();
  })
})

// This test doesn't call the api

describe('GET followers MOCK', () => {
  beforeEach(() => {
    var followersResponse = [{
      "login": "octocat",
      "id": 583231,
      "followers_url": "https://api.github.com/users/octocat/followers",
    },
    {
      "login": "nanocat",
      "id": 583233,
      "followers_url": "https://api.github.com/users/nanocat/followers",
    }]
    nock('https://api.github.com')
      .get('/users/octocat/followers')
      // returns the content in the followersResponse variable as the response body.
      .reply(200, followersResponse);
  })
      
  test('returns mocked user followers', () => {
  // Increase the default timeout for this test
  // If the test takes longer than this, it will fail
  // jest.setTimeout(3000)
    
    var username = 'octocat';

    return getUserFollowers(username).then((data) => {
      expect(data).toBeDefined()
      expect(data).toMatchObject(data)
      //expect(data).toBeFalsy()
    })
  });
}); 
