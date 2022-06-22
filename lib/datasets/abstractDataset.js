const abstractDataset = class abstractDataset {
  getDatasetName() {
    const databaseName = this.constructor.name;
    if (databaseName.slice(-7) !== 'Dataset') {
      throw new Error('The Dataset name must end with "Dataset".');
    }
    return databaseName.slice(0, -7);
  }

  getProperties() {
    return this._getProperties().map(property => {
      const propertyGet = 'get' + property[1].toUpperCase() + property.substring(2);
      const propertySet = 'set' + property[1].toUpperCase() + property.substring(2);
      const databaseColumnName = this[propertyGet]().getDatabaseColumnName();
      return [databaseColumnName, propertyGet, propertySet];
    });
  }

  _getProperties() {
    return Object.keys(this);
  }
};

module.exports = abstractDataset;
