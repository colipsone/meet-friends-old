let SettingsProvider = require('../providers/settingsProvider');

class serviceBase {
    constructor() {
        let settingsProvider = new SettingsProvider();
        let baseUrl = settingsProvider.getServerBaseUrl();
        let request = require('request');
        this._request = request.defaults({
            baseUrl: baseUrl
        });
    }

    get request() {
        return this._request;
    }
}

module.exports = serviceBase;