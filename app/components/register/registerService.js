servicesModule.service('registerService', ['$http', function($http) {
    var registerService = {};

    registerService.register = function(user) {
        return $http
            .post('https://nepgo.herokuapp.com/user', user)
            .then(function(res) {});
    };

    return registerService;
}]);