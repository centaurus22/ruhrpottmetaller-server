event = class event {
    _url;

    constructor(url) {
        this._url = url;
    }

    getUrl() {
        return this._url;
    }
}

module.exports = event;