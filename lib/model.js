const model = class model {
  _databaseConnection;
  _dataset;

  constructor(databaseConnection, dataset) {
    this._databaseConnection = databaseConnection;
    this._dataset = dataset;
  }

  getDataset() {
    return this._dataset;
  }

  _getQuery() {
    return 'SELECT ${_getDatabaseColumnNames().join(', ')} '
      + 'FROM ${this._getDatasetName()} '
      + 'LIMIT 30';
  }

  _getDatabaseColumnNames(properties) {
    return properties.map(property => property.getDatabaseColumnName());
  }
};

module.exports = model;
