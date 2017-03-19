servicesModule.factory('AuthResolver', ['$q', '$rootScope', '$state', function($q,  $rootScope, $state) {
    return {
        resolve: function() {
            var deferred = $q.defer();
            var unwatch = $rootScope.$watch('currentUser', function(currentUser) {
                if (angular.isDefined(currentUser)) {
                    if (currentUser) {
                        deferred.resolve(currentUser);
                    } else {
                        deferred.reject();
                        $state.go('login');
                    }
                    unwatch();
                }
            });
            return deferred.promise;
        }
    }
}]);