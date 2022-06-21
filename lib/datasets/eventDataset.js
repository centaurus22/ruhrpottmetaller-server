const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset{
  _id;
  _name;
  _url;

  constructor(id, name, url) {
    super();
    this._id = id;
    this._name = name;
    this._url = url;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setUrl(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }
};

module.exports = event;
