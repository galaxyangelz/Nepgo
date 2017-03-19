filtersModule.filter('sectorFilter', [function() {
    return function(sectorId) {
        switch (sectorId) {
            case "589f5c94f87d280004603769":
                return "Education";
                break;
            case "589f5c94f87d28000460376a":
                return "Engineering";
                break;
            case "589f5c94f87d28000460376b":
                return "Health services";
                break;
            case "589f5c94f87d28000460376d":
                return "Social services";
                break;
            case "589f5c94f87d28000460376c":
                return "Sports";

        }
    }
}]);