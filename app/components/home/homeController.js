controllersModule.controller('homeController', ['$scope', 'userService', 'Session', 'ApplicationService', 'homeService', 'profileService', '$state', 'sectorService',

    function($scope, userService, Session, ApplicationService, homeService, profileService, $state, sectorService) {
        $scope.newsfeed = [];
        $scope.userProfile = {};
        $scope.newsfeedBySector = [];
        $scope.sectors = [];
        $scope.$state = $state;
        $scope.postedSuccessfully = false;
        var token = window.localStorage.userToken;
        $scope.status = {
            title: "",
            description: "",
            sector: "",
            starts_at: "",
            ends_at: ""
        }

        $scope.commentObj = {
            text: ""
        }

        $scope.selectedDate = {
            starts_at: "",
            ends_at: ""
        }

        function init() {
            homeService.getNewsfeed(token).then(function(newsfeed) {
                $scope.newsfeed = newsfeed;
                console.log($scope.newsfeed);
            }, function() {});
            getSectors();
        }

        var getSectors = function() {
            ApplicationService.getSectors()
                .then(function(sectors) {
                    $scope.sectors = sectors;
                    $scope.status.sector = sectors[0]._id;
                })
        };

        $scope.getProfile = function(id) {
            if (token) {
                profileService.getUserDetails(id, token).then(function(details) {
                    $scope.userProfile = details;
                    $state.go('home.profile');
                }, function() {});
            } else {
                $state.go('login');
            }
        };

        $scope.getNewsfeedBySector = function(sector) {
            if (token) {
                sectorService.getNewsfeedBySector(token, sector).then(function(newsfeed) {
                    $scope.newsfeedBySector = newsfeed;
                    $state.go('home.sector');
                }, function() {});
            } else {
                $state.go('login');
            }
        }

        $scope.likePost = function(id, index) {
            homeService.likePost(token, id).then(function() {
                init();
                $scope.$apply();
            });

        }

        $scope.postComment = function(event, id) {
            var commentObj = { text: event.target.value };
            homeService.postComment(token, id, commentObj).then(function() {
                init();
                $scope.$apply();
            })
        }

        $scope.postStatus = function(status) {
            $scope.status.starts_at = $scope.selectedDate.starts_at.toISOString();
            $scope.status.ends_at = $scope.selectedDate.ends_at.toISOString();
            homeService.postStatus(token, status).then(function() {
                init();
                $scope.$apply();
                $scope.postedSuccessfully = true;
                setTimeout(function() { $scope.postedSuccessfully = false }, 2000);
            });
            $scope.status = {
                title: "",
                description: "",
                sector: "",
                starts_at: "",
                ends_at: ""
            };
            $scope.selectedDate = {
                starts_at: "",
                ends_at: ""
            }
        }

        init();
    }
]);