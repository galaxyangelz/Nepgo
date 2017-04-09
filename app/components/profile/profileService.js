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
    profileService.editProfile = function (id, token, profile) {
        if (token) {
            return $http
                .put('https://nepgo.herokuapp.com/user/' + id + '?token=' + token, profile)
                .then(function (res) {
                    return res.data;
                }, function (err) {
                    return err.data.err;
                });
        }
    }

    return profileService;
}]);