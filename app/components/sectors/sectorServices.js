servicesModule.service('sectorService', ['$http', function($http) {
    var sectorService = {};

    sectorService.getNewsfeedBySector = function(token, sector) {
        if (token) {
            return $http
                .get('https://nepgo.herokuapp.com/search?type=vacancy&token=' + token + '&sector=' + sector)
                .then(function(res) {
                    return res.data;
                });
        }

    };

    return sectorService;
}]);