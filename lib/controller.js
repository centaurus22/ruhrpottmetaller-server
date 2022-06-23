const controller = class controller {
  _model;

  constructor(model) {
    this._model = model;
  }

  async getResponse() {
    return JSON.stringify(await this._model.getDatasets());
  }
}

module.exports = controller;
