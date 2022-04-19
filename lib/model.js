const model = class model {
  _dataset;
  _databaseConnection;

  constructor(databaseConnection, dataset) {
    this._databaseConnection = databaseConnection;
    this._dataset = dataset;
  }

  _getQuery() {
    return 'SELECT ${_getDatabaseColumnNames().join(', ')} '
      + 'FROM ${this._getDatasetName()} '
      + 'LIMIT 30';
  }

  _getDatabaseColumnNames(properties) {
    return properties.map(property => property.getDatabaseColumnName());
  }

  _getProperties() {
    return Object.keys(this._dataset);
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
