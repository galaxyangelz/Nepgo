controllersModule.controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', 'Session', 'ApplicationService', '$state', 'profileService',
    function($scope, USER_ROLES, AuthService, Session, ApplicationService, $state, profileService) {
        $scope.currentUser = Session.currentUser;
        $scope.userRoles = null;
        $scope.sectors = [];
        $scope.isAuthorized = AuthService.isAuthorized;
        Session.loadUserCredentials();

        $scope.setCurrentUser = function(user) {
            $scope.currentUser = user;
        };

        $scope.showUserProfile = function() {
            $state.go('home.userProfile');
            setTimeout(function() {
                $window.location.reload();
            }, 1000)

        }


        $scope.searchPost = "";

        var getSectors = function() {
            ApplicationService.getSectors()
                .then(function(sectors) {
                    $scope.sectors = sectors;
                })
        }
        $scope.logout = function() {
            Session.logout();
            $scope.currentUser = undefined;
            $state.go('login');
        }
        getSectors;


    }
]);