servicesModule.factory('AuthService', ['$http', 'Session', '$rootScope',

    function($http, Session, $rootScope) {

        var authService = {};

        authService.login = function(credentials) {
            return $http
                .post('https://nepgo.herokuapp.com/login', credentials)
                .then(function(res) {
                    Session.create(res.data.token, res.data.user);
                    return res.data.user;
                });
        };

        authService.isAuthenticated = function() {
            return !!Session.userId;
        };

        authService.logout = function() {
            Session.destory();
        };

        // authService.isAuthorized = function(authorizedRoles) {
        //     if (!angular.isArray(authorizedRoles)) {
        //         authorizedRoles = [authorizedRoles];
        //     }
        //     return (authService.isAuthenticated() &&
        //         authorizedRoles.indexOf(Session.name) !== -1);

        // };

        return authService;
    }
]);