angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('recs', recsDirective);
    
    
function mainCtrl ($scope, $http) {
    
    $scope.recsSearch = function(user) {
        // $scope.recsSearch.preventDefault();
        
        var baseURL = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=";
        var separator = "%2C";
        var band = user.band.replace(/ /g, "+");
        var movie = user.movie.replace(/ /g, "+");
        
        var completedURL = baseURL + band + separator + movie;
        console.log("API endpoint: " + completedURL);
        $http.get(completedURL).success(function(response) {
            console.log("response: \n\n" + response);
        });
    };
}


function recsDirective () {
    return {
        template: (
            '<div class="recs">' +
                '<h4>{{user.band}}</h4>' + '<h4>{{user.movie}}</h4>' +
                '<h5>{{user.recs}}</h5>' +
            '</div>'
        )
    };
}