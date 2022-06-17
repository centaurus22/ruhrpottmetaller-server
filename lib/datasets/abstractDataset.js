const abstractDataset = class abstractDataset {
  getProperties() {
    return Object.keys(this);
  }

  getDatasetName() {
    const databaseName = this.constructor.name;
    if (databaseName.slice(-7) !== 'Dataset') {
      throw new Error('The Dataset name must end with "Dataset".');
    }
    return databaseName.slice(0, -7);
  }
};

module.exports = abstractDataset;
