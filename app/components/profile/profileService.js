servicesModule.service('profileService', ['$http', '$state', function($http, $state) {
    var profileService = {};

    profileService.getUserDetails = function(id, token) {
        if (token) {
            return $http
                .get('https://nepgo.herokuapp.com/user/' + id + '?token=' + token)
                .then(function(res) {
                    console.log(res.data);
                    return res.data;
                });
        } else {
            $state.go('login');
        }
    };

    return profileService;
}]);