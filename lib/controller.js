const controller = class controller {
  _model;

  constructor(model) {
    this._model = model;
  }

  async getResponse() {
    return await this._model.getDatasets();
  }
}

module.exports = controller;
