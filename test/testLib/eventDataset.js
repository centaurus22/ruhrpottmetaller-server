const abstractDataset = require('../../lib/datasets/abstractDataset');

const event = class eventDataset extends abstractDataset{
  id;

  constructor(id) {
    super();
    this.id = id;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
};

module.exports = event;
