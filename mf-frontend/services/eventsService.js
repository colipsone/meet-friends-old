let serviceBase = require('./serviceBase');

class eventsService extends serviceBase {
    getEvents(responseCallback) {
        fetch(serverApiBaseUrl +'/events?filter[include]=user').
        json().
        then(data => {
        	responseCallback(data);
        }).
        catch(handleError);
    }
}

module.exports = eventsService;