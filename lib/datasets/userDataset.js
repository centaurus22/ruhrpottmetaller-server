const user = class userDataset {
  id;
  email;
  hash;

  constructor(id, email, hash) {
    this.id = id;
    this.email = email;
    this.hash = hash;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setHash(hash) {
    this.hash = hash;
  }

  getHash() {
    return this.hash;
  }
};

module.exports = user;
