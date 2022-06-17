variable = class variable {
    _databaseColumnName;
    _value = null;

    constructor(databaseColumnName) {
       this._databaseColumnName = databaseColumnName;
    };

    getDatabaseColumnName() {
        return this._databaseColumnName;
    }

    getValue() {
        return this._value;
    }

    setValue(value) {
        this._value = value;
    };
}

module.exports = variable;