var weatherApp = angular.module('weatherApp', []);
    weatherApp.controller('weatherCtrl', function ($scope, $http){
        $scope.city = '';
        $scope.enteredCity = '';
        $scope.fiveDayForecast = [];
        $scope.getWeather = function() {
            $scope.city = $scope.enteredCity;
              
            $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D%22' + $scope.city + '%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=').success(function(data){
            $scope.fiveDayForecast = data.query.results.weather.rss.channel.item.forecast;
            //clear the form
            $scope.enteredCity = '';
            })
        }
    });
