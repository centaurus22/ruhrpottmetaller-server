const clone = require('lodash').cloneDeep;

const model = class model {
  _databaseConnection;
  _dataset;
  _datasetProperties;

  constructor(databaseConnection, dataset) {
    this._databaseConnection = databaseConnection;
    this._dataset = dataset;
    this._datasetProperties = this._dataset.getProperties();
  }

  getDatasets(next) {
    const promise = this._queryDatabase();
    return promise
      .then(result => { return result.map((result) => this._mapDatasets(result)) })
      .catch(next);
  }

  _mapDatasets(result) {
    let dataset = clone(this._dataset);
    this._datasetProperties.forEach((property) => {
      dataset[property[2]](result[property[0]]);
    });
    return dataset;
  }

  _getQuery() {
    return `SELECT ${this._getDatabaseColumnNames().join(', ')} `
      + `FROM ${this._dataset.getDatasetName()} `
      + 'WHERE date_start >= CURRENT_DATE() '
      + 'ORDER BY date_start, id LIMIT 30';
  }

  async _queryDatabase() {
    return new Promise ((resolve, reject) => {
      this._databaseConnection.query(this._getQuery(), (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }

  _getDatabaseColumnNames() {
    return this._datasetProperties.map(property => {
      return property[0];
    });
  }
};

module.exports = model;
