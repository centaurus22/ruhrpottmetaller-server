const abstractDataset = class abstractDataset {
  getProperties() {
    return Object.keys(this).map((property) => {
      if (property.length < 2) {
        throw new Error('Property names must contain at least two chars including the underscore."');
      }
      return property.substring(1);
    });
  }

  getDatasetName() {
    const databaseName = this.constructor.name;
    if (databaseName.substr(databaseName.length -7) !== 'Dataset') {
      throw new Error('The Dataset name must end with "Dataset".');
    }
    return databaseName.substr(0, databaseName.length - 7);
  }
};

module.exports = abstractDataset;
