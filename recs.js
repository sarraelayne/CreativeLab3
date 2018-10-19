var app = angular.module('myApp', []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller('myCtrl',
  function($scope, $http) {
    $scope.recs = [];
    $scope.recsSearch = function(form) {
      var baseURL = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=";
      var separator = "%2C";
      var band = form.band.replace(/ /g, '+');
      var movie = form.movie.replace(/ /g, '+');
      var completedURL = baseURL + band + separator + movie;
      // console.log("API endpoint: " + completedURL);
      
      $http.jsonp(completedURL,{jsonpCallbackParam: 'callback'})
        .then(function(response) {
          var results = response.data.Similar.Results;
          
          $scope.recs = [];
          for (var i = 0; i < results.length; i++) {
            $scope.recs.push({
              name: results[i].Name,
              type: results[i].Type,
              youtube: results[i].yUrl
            });
          }
          
          console.log("added all recs" + $scope.recs);
        });
      };
    $scope.clicked = function() {
      console.log("in clicked");
      $window.location.assign = $scope.recs[0].yUrl;
    }
  });
  
app.directive('recs', 
  function () {
    return {
        scope: {
            rec: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (
            '<div class="recs">' +
                '<h4>{{rec.name}}</h4>' +
                '<h5>{{rec.type}}</h5>' +
                '<a href="' + '{{rec.youtube}}' + '">Youtube Link</a>' +
            '</div>'
        ),
    };
    
})