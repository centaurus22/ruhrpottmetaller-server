const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset{
  _id;
  _name;
  _dateStart;
  _url;

  constructor(id, name, dateStart, url) {
    super();
    this._id = id;
    this._name = name;
    this._dateStart = dateStart;
    this._url = url;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setDateStart(dateStart) {
    this._dateStart = dateStart;
  }

  getDateStart() {
    return this._dateStart;
  }

  setUrl(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }
};

module.exports = event;
