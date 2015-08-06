angular.module("myAngularApp", [])
    .controller("myFirstController",["$scope", function($scope){
        $scope.myInput = "Hello World"
        $scope.newState = {state: null, capital: null}
        
        $scope.addState = function(){
            console.log($scope.newState)
            $scope.states.push($scope.newState)
        };
        
        $scope.states = [
            {
                "state": "Andra Pradesh",
                "capital": "Hyderabad"
            },
            {
                "state": "Kerala",
                "capital": "Tivendram"
            },
            {
                "state": "TamilNadu",
                "capital": "Chennai"
            },
            {
                "state": "Telangana",
                "capital": "Hyderabad"
            },
            {
                "state": "Rajastan",
                "capital": "Jaipur"
            },
            {
                "state": "karnataka",
                "capital": "Banglore"
            }
        ];
        
    }]);
