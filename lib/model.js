const model = class model {
  _dataset;
  _databaseConnection;

  constructor(databaseConnection, dataset) {
    this._databaseConnection = databaseConnection;
    this._dataset = dataset;
  }

  _getQuery() {
    return 'SELECT ${_getProperties().join(', ')} '
      + 'FROM ${this._getDatasetName()} '
      + 'LIMIT 30';
  }

  _getProperties() {
    const properties = Object.keys(this._dataset).map((property) => {
      if (property.length < 2) {
        throw new Error('Property names must contain at least two chars including the underscore.');
      }
      return property.substring(1);
    });

    if (properties.length === 0) {
      throw new Error('The dataset must contain at least one variable.');
    }

    return properties;
  }

  _getDatasetName() {
    const databaseName = this._dataset.constructor.name;
    if (databaseName.slice(-7) !== 'Dataset') {
      throw new Error('The Dataset name must end with "Dataset".');
    }
    return databaseName.slice(0, -7);
  }
};

module.exports = model;
