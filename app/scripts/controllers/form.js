'use strict';

/* Controllers */

// Form controller
app.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.steps = {
        percent: 20,
        step1: true,
        step2: false,
        step3: false
    };

    // TODO: Show games in table

    $scope.processStep1 = function() {
        console.log('Processing Step One..');
        console.log('Getting games..');

        $http.post("http://localhost:49234/software/scan", {
                "platform": "nintendo-entertainment-system-nes",
                "directory": "D:\\src\\apnea\\test\\fixtures\\library\\nes"
            })
            .then(function(res) {
                $http.get("http://localhost:49234/game")
                    .then(function(res) {
                        $scope.games = res.data;
                        $scope.steps.step2 = true;
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            });
    };
}]);
