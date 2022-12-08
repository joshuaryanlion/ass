const chai = require('chai');
const expect = chai.expect;

const { UserRegistration } = require('../problems/user-registration.js');

describe('UserRegistration timing', function() {
  this.timeout(4000);
  // The performance expectations for this assessment are measured
  // relative to this benchmark. It runs in ~200ms on an Intel
  // MacBook Pro. This system accounts for differences in processor
  // speed.
  let timeout = 0;
  let benchmark = 0;
  const timingBuffer = 1.0;

  before (function() {
    let startTime = Date.now();

    // Fill an array with 30000 values
    const arr = [];
    for (let i = 0 ; i < 30000; i++) {
      arr.unshift(i);
    }

    benchmark = Date.now() - startTime;
    timeout = benchmark * timingBuffer;
    console.log(`\nBENCHMARK time is: ${timeout}ms\n`);
  });

  it(`Registers 10,000 users, max 1,000 within the benchmark time`, function() {
    const userCount = 10000;
    const userMax = 1000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });

  it(`Registers 30,000 users, max 1,000 within the benchmark time`, function() {
    const userCount = 30000;
    const userMax = 1000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });

  it(`Registers 50,000 users, max 1,000 within the benchmark time`, function() {
    const userCount = 50000;
    const userMax = 1000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });

  it(`Registers 80,000 users, max 1,000 within the benchmark time`, function() {
    const userCount = 80000;
    const userMax = 1000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });

  it(`Registers 80,000 users, max 5,000 within the benchmark time`, function() {
    const userCount = 80000;
    const userMax = 5000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });

  it(`Registers 80,000 users, max 10,000 within the benchmark time`, function() {
    const userCount = 80000;
    const userMax = 10000;

    // Timing performance test
    const registerTime = registerUsersTiming(userCount, userMax, timeout);

    expect(registerTime).to.be.true;
  });
});

// Register users, return false if it times out, true otherwise
function registerUsersTiming(userCount, userMax, timeout) {

  reg = new UserRegistration(userMax);

  startTime = Date.now();
  numUsers = userCount;

  for (let i = 1 ; i <= userCount ; i++) {
    reg.registerUser(`User ${i}`);

    if (Date.now() - startTime > timeout) {
      console.log(`Timeout: Registered ${userCount} - max ${userMax}`);
      return false;
    }
  }

  console.log(`Registered ${userCount} - max ${userMax} in ${Date.now() - startTime}ms`);

  return true;
}