const abstractDataset = require('../../lib/datasets/abstractDataset');

const event = class eventDataset extends abstractDataset{
  _id;

  constructor(id) {
    super();
    this._id = id;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }
};

module.exports = event;
