servicesModule.factory('Session', ['$http', '$window', function($http, $window) {
    var LOCAL_TOKEN_KEY  = 'userToken';
    var CURRENT_USER  = 'user';
    var isAuthenticated = false;
    var authToken;
    var factory = {};
    factory.token = null;
    factory.currentUser = null;

    factory.loadUserCredentials = function() {
        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        var user = window.localStorage.getItem(CURRENT_USER);
        this.currentUser = JSON.parse(user);
        if (token) {
            this.useCredentials(token);
        }
    }

    factory.create = function(token, user) {
        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
        window.localStorage.setItem(CURRENT_USER,  JSON.stringify(user));
        this.useCredentials(token);
    };

    factory.useCredentials = function(token) {
        isAuthenticated = true;
        authToken = token;

        $http.defaults.headers.common.Authorization = authToken;
    };

    factory.logout = function() {
        authToken = undefined;
        isAuthenticated = false;
        $http.defaults.headers.common.Authorization = undefined;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        window.localStorage.clear();
        $window.location.reload();
    };

    factory.loadUserCredentials();
    return factory;
}]);