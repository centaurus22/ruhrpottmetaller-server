const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset {
  _url;

  constructor(url) {
    super();
    this._url = url;
  }

  getUrl() {
    return this._url;
  }
};

module.exports = event;
