servicesModule.service('homeService', ['$http', '$state', function($http, $state) {
    var homeService = {};

    homeService.getNewsfeed = function(token) {
        if (token) {
            return $http
                .get('https://nepgo.herokuapp.com/search?type=newsfeed&token=' + token)
                .then(function(res) {
                    return res.data;
                });
        } else {
            return $http
                .get('https://nepgo.herokuapp.com/search?type=newsfeed')
                .then(function(res) {
                    return res.data;
                });
        }

    };

    homeService.likePost = function(token, id) {
        if (token) {
            return $http
                .get('https://nepgo.herokuapp.com/newsfeed/' + id + '/like?token=' + token)
                .then(function(res) {
                    return res.data;
                })
        } else {
            $state.go('login');
        }
    }

    homeService.postComment = function(token, id, commentObj) {
        if (token) {
            return $http
                .post('https://nepgo.herokuapp.com/newsfeed/' + id + '/comment?token=' + token, commentObj)
                .then(function(res) {
                    return res.data;
                })
        } else {
            $state.go('login');
        }
    }
    homeService.postStatus = function(token, status) {
        if (token) {
            return $http
                .post('https://nepgo.herokuapp.com/vacancy?token=' + token, status)
                .then(function(res) {
                    return res.data;
                })
        } else {
            $state.go('login');
        }
    }

    return homeService;
}]);