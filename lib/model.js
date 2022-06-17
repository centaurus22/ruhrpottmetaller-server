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
};

module.exports = model;
