controllersModule.controller('timelineController', ['$scope', function($scope) {
    $scope.timelines = [{
            date: "1 Jan. 2017",
            events: [{
                    id: 1,
                    type: "email",
                    time: "13:30",
                    sender: "Jeveen Shrestha",
                    text: "sent you an email",
                    content: "Hello Mukti jee! How are things going?"
                },
                {
                    id: 2,
                    type: "friend_request",
                    time: "14:00",
                    sender: "Prataksha",
                    text: "accepted your friend request",
                    content: ""
                }
            ]
        },
        {
            date: "2 Jan. 2017",
            events: [{
                id: 1,
                type: "commented",
                time: "8:55",
                sender: "Richard Awale",
                caption: "commented on your post",
                content: "All the best Mukti dai."
            }]
        }
    ]
}]);