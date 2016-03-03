let serviceBase = require('./serviceBase');

class eventsService extends serviceBase {
    getEvents(responseCallback) {
        request('/events', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                responseCallback(response);
            }
        })
    }
}

module.exports = eventsService;