var getUserFollowers = require('./index').getUserFollowers;

describe('GET followers', () => {
  it('returns user followers', (done) => {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    // jest.setTimeout(3000)
    
  var username = 'octocat';

  getUserFollowers(username, (followers) => {
    // It should return an array object
    expect(Array.isArray(followers)).to.equal(true);
    // Ensure that at least one follower is in the array
    expect(followers).to.have.length.above(1);
    });
    done();
  });
});

