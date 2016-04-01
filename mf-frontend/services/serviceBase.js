let SettingsProvider = require('../providers/settingsProvider');

class serviceBase {
    constructor() {
        this._settingsProvider = new SettingsProvider();
        this._serverApiBaseUrl = settingsProvider.serverApiBaseUrl;
    }

    get serverApiBaseUrl {
        return this._serverApiBaseUrl;
    }

    handleError(error) {
        console.log("Request to server failed! Error details: " + error);
    }
}

module.exports = serviceBase;