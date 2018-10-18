/*var app = angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $http) {
    $scope.recsSearch = function(user) {
        var baseURL = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=";
        var separator = "%2C";
        var band = "The+Beatles"
        var movie = "Lion+King"
        //var band = user.band.replace(/ /g, '+');
        //var movie = user.movie.replace(/ /g, '+');
        //var completedURL = baseURL + band + separator + movie;
        console.log("API endpoint: " + completedURL);
        var completedURL = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=The+Beatles%2CLion+King";
    }
}
*/
var app = angular.module('myApp', []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller('myCtrl',
  function($scope, $http) {
    console.log("outside scope");
    $scope.recsSearch = function(form) {
      console.log(form);
      console.log("TasteDive");
      var baseURL = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=";
      var separator = "%2C";
      var band = form.band.replace(/ /g, '+');
      var movie = form.movie.replace(/ /g, '+');
      var completedURL = baseURL + band + separator + movie;
      console.log("API endpoint: " + completedURL);
      $http.jsonp(completedURL,{jsonpCallbackParam: 'callback'})
        .then(function(response) {
          console.log(response);
          console.log(response.data);
          console.log(response.data.Similar);
          console.log(response.data.Similar.Results);
        });
    };
  });
