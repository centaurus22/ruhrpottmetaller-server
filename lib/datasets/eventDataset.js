const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset{
  _id;
  _url;

  constructor(id, url) {
    super();
    this._id = id;
    this._url = url;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  setUrl(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }
};

module.exports = event;
