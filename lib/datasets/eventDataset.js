const abstractDataset = require('./abstractDataset');

const event = class eventDataset extends abstractDataset{
  id;
  name;
  dateStart;
  numberOfDays;
  venueId;
  url;
  soldOut;

  constructor(id, name, dateStart, numberOfDays, venueId, url, soldOut) {
    super();
    this.id = id;
    this.name = name;
    this.dateStart = dateStart;
    this.numberOfDays = numberOfDays;
    this.venueId = venueId;
    this.url = url;
    this.soldOut = soldOut;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDateStart(dateStart) {
    this.dateStart = dateStart;
  }

  getDateStart() {
    return this.dateStart;
  }

  setNumberOfDays(numberOfDays) {
    this.numberOfDays = numberOfDays;
  }

  getNumberOfDays() {
    return this.numberOfDays;
  }

  setVenueId(venueId) {
    this.venueId = venueId;
  }

  getVenueId() {
    return this.venueId;
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  setSoldOut(soldOut) {
    this.soldOut = soldOut;
  }

  getSoldOut() {
    return this.soldOut;
  }
};

module.exports = event;
