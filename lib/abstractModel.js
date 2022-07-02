const abstractModel = class abstractModel {
  _databaseConnection;
  _dataset;

  constructor(databaseConnection, dataset) {
    this._databaseConnection = databaseConnection;
    this._dataset = dataset;
  }

  getDatasets(request, next) {
    const promise = this._queryDatabase(request);
    return promise
      .then(result => {
        return result.map((result) => this._mapDatasets(result));
      })
      .catch(next);
  }

  async _queryDatabase(request) {
    return new Promise ((resolve, reject) => {
      this._databaseConnection.query(
        this._getQuery(),
        this._getParameters(request),
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
      });
    });
  }
};

module.exports = abstractModel;
