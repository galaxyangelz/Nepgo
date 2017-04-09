controllersModule.controller('profileController', ['$scope', '$state', '$stateParams', 'Session', 'userService', 'profileService', function ($scope, $state, $stateParams, Session, userService, profileService) {
    $scope.userProfile = Session.currentUser;
    console.log($scope.userProfile);
    $scope.editorEnabled = false;
    $scope.successfulEdited = false;
    var token = window.localStorage.userToken;
    var userId = Session.currentUser.userId;
    $scope.getProfile = function (id) {
        if (token) {
            profileService.getUserDetails(id, token).then(function (details) {
                $scope.userProfile = details;
                $scope.profile = {
                    educations: details.educations,
                    skills: details.skills,
                    extra_info: details.extra_info,
                    experiences: details.experiences
                }
                $state.go('home.userProfile');
            }, function () { });
        } else {
            $state.go('login');
        }
    };
    $scope.edit = function () {
        $scope.editorEnabled = true;
    }
    $scope.save = function () {
        $scope.editorEnabled = false;
        profileService.editProfile(userId, token, $scope.profile).then(function (res) {
            if (typeof res == 'object') {
                $scope.successfulEdited = true;
                $scope.getProfile(userId);
            }
        })
    }
    $scope.getProfile(userId);

}]);