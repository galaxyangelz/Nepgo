controllersModule.controller('registerController', ['$scope', 'registerService', '$rootScope', 'AUTH_EVENTS', '$state', 'ApplicationService', function($scope, registerService, $rootScope, AUTH_EVENTS, $state, ApplicationService) {
    $scope.user = {
        email: "",
        name: "",
        role: "academia",
        country: "NP",
        city: "kathmandu",
        address: "",
        sectors: ["589f5c94f87d280004603769"],
        experiences: [],
        educations: [],
        skills: [],
        profession: "",
        locale: "en",
        password: "",
        confirmPassword: "",
        extra_info: ""
    };
    $scope.text = 'me@example.com';
    $scope.emailFormat = '/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/';
    $scope.sectors = [];
    $scope.roles = [];
    $scope.selectedRole = $scope.roles[0];
    $scope.countries = [];
    $scope.cities = [];

    $scope.register = function(user) {
        registerService.register(user).then(function(user) {
            $rootScope.$broadcast(AUTH_EVENTS.registerSuccess);
            $state.go('login');
        }, function() {
            $rootScope.$broadcast(AUTH_EVENTS.registerFailed);
        });
    };

    $scope.selectRole = function() {
        $scope.role = "";
    }

    $scope.toggleCheck = function(sector) {
        if ($scope.user.sectors.indexOf(sector._id) === -1) {
            $scope.user.sectors.push(sector._id);
        } else {
            $scope.user.sectors.splice($scope.user.sectors.indexOf(sector._id), 1);
        };
    }

    var getSectors = function() {
        ApplicationService.getSectors()
            .then(function(sectors) {
                $scope.sectors = sectors;
            })
    };

    var getRoles = function() {
        ApplicationService.getRoles()
            .then(function(roles) {
                $scope.roles = roles;
            })
    };

    var getCountries = function() {
        ApplicationService.getCountries()
            .then(function(countries) {
                $scope.countries = countries;
                $scope.cities = countries[0].cities;
            })
    };



    getSectors();
    getRoles();
    getCountries();

}]);