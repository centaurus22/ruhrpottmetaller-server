const clone = require('lodash').cloneDeep;
const abstractModel = require('./abstractModel');

const model = class model extends abstractModel{
  _datasetProperties;

  constructor(databaseConnection, dataset) {
    super(databaseConnection, dataset);
    this._datasetProperties = this._dataset.getProperties();
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

  _getParameters(request) {
    return new Array;
  }

  _getDatabaseColumnNames() {
    return this._datasetProperties.map(property => {
      return property[0];
    });
  }
};

module.exports = model;
