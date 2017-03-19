servicesModule.factory('ApplicationService', ['$http', 'Session', function($http, Session) {
    var applicationService = {};

    applicationService.getSectors = function() {
        return $http
            .get('https://nepgo.herokuapp.com/sector')
            .then(function(res) {
                return res.data;
            });
    };

    applicationService.getRoles = function() {
        return $http
            .get('https://nepgo.herokuapp.com/role')
            .then(function(res) {
                return res.data;
            });
    };

    applicationService.getCountries = function() {
        return $http
            .get('https://nepgo.herokuapp.com/country')
            .then(function(res) {
                return res.data;
            });
    };


    return applicationService;
}]);