filtersModule.filter('likesFilter', [function() {
    return function(number) {
        if (number == 1) {
            return number + " like";
        } else if (number > 1) {
            return number + " likes";
        } else if (number == 0) {
            return number + " like";
        }
    }
}]);