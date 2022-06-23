const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset{
  _id;
  _name;
  _dateStart;
  _numberOfDays;
  _venueId;
  _url;
  _soldOut;

  constructor(id, name, dateStart, numberOfDays, venueId, url, soldOut) {
    super();
    this._id = id;
    this._name = name;
    this._dateStart = dateStart;
    this._numberOfDays = numberOfDays;
    this._venueId = venueId;
    this._url = url;
    this._soldOut = soldOut;
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

  setNumberOfDays(numberOfDays) {
    this._numberOfDays = numberOfDays;
  }

  getNumberOfDays() {
    return this._numberOfDays;
  }

  setVenueId(venueId) {
    this._venueId = venueId;
  }

  getVenueId() {
    return this._venueId;
  }

  setUrl(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }

  setSoldOut(soldOut) {
    this._soldOut = soldOut;
  }

  getSoldOut() {
    return this._soldOut;
  }
};

module.exports = event;
