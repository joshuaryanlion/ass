const chai = require('chai');
const expect = chai.expect;

const { LinkedList, UserRegistration } = require('../problems/user-registration.js');

describe('UserRegistration implementation', function() {
  it ('registerUser registers unique usernames', function() {
    const registration = new UserRegistration(3);
    expect(registration.registerUser('User 1')).to.eql('User 1 registered');
    expect(registration.registerUser('User 2')).to.eql('User 2 registered');
    expect(registration.registerUser('User 3')).to.eql('User 3 registered');
  });

  it ('registerUser fails to register a repeat username', function() {
    const registration = new UserRegistration(3);
    expect(registration.registerUser('User 1')).to.eql('User 1 registered');
    expect(registration.registerUser('User 1')).to.eql('User 1 failed to register');
  });

  it ('registerUser deregisters a username if maximum user count is reached', function() {
    const registration = new UserRegistration(3);
    expect(registration.registerUser('User 1')).to.eql('User 1 registered');
    expect(registration.registerUser('User 2')).to.eql('User 2 registered');
    expect(registration.registerUser('User 3')).to.eql('User 3 registered');
    expect(registration.registerUser('User 4')).to.eql('User 1 unregistered, User 4 registered');
  });

  it ('users property is not an Array and is an instance of a Set OR a LinkedList', function () {
    const registration = new UserRegistration(3);
    expect(Array.isArray(registration.users)).to.be.false;
    expect(
      registration.users instanceof Set ||
      registration.users instanceof LinkedList
    ).to.be.true;
  });

  it ('nameList property is not an Array and is an instance of a Set OR a LinkedList', function () {
    const registration = new UserRegistration(3);
    expect(Array.isArray(registration.nameList)).to.be.false;
    expect(
      registration.nameList instanceof Set ||
      registration.nameList instanceof LinkedList
    ).to.be.true;
  });
});
