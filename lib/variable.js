const variable = class variable {
  _databaseColumnName;

  constructor(databaseColumnName) {
    this._databaseColumnName = databaseColumnName;
  }

  getDatabaseColumnName() {
    return this._databaseColumnName;
  }
};

module.exports = variable;
