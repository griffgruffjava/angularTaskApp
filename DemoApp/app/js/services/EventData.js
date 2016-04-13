eventsApp.factory('eventData', function ($resource) {
    var resourceGet = $resource('/data/event/:id'+'.json', {id: '@id'});
    var resourcePost = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function () {
            return resourceGet.get({id: 1});
        },
        save: function (event) {
            event.id = 444;
            return resourcePost.save(event);

        }
    };

});
