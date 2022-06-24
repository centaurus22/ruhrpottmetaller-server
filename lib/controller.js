const controller = class controller {
  _model;

  constructor(model) {
    this._model = model;
  }

  async getResponse(next) {
    return await this._model.getDatasets(next);
  }
}

module.exports = controller;
