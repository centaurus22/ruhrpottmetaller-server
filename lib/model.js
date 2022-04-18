const model = class model {
  _dataset;

  constructor(dataset) {
    this._dataset = dataset;
  }

  _getProperties() {
    return Object.keys(this._dataset).map((property) => {
      if (property.length < 2) {
        throw new Error('Property names must contain at least two chars including the underscore."');
      }
      return property.substring(1);
    });
  }

  _getDatasetName() {
    const databaseName = this._dataset.constructor.name;
    if (databaseName.substr(databaseName.length -7) !== 'Dataset') {
      throw new Error('The Dataset name must end with "Dataset".');
    }
    return databaseName.substr(0, databaseName.length - 7);
  }
}

module.exports = model;
