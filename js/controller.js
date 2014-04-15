var weatherApp = angular.module('weatherApp', []);
    weatherApp.controller('weatherCtrl', function ($scope, $http){
        $scope.city = '';
        $scope.region = '';
        $scope.country = '';
        $scope.enteredCity = '';
        $scope.fiveDayForecast = [];
        $scope.getWeather = function() {
            // Ensure strange characters and spaces are removed for the YQL
            $scope.city = $scope.enteredCity.replace(/\s+/g, '');;
            $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D%22' + $scope.city + '%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=').success(function(data){
            $scope.fiveDayForecast = data.query.results.weather.rss.channel.item.forecast;
            $scope.title = data.query.results.weather.rss.channel.title;
            // clear the form
            $scope.enteredCity = '';
            })
        }
    });
