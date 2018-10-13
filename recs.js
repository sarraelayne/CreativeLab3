angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('recs', recsDirective);
    
    
function mainCtrl ($scope) {
    
    $scope.recsSearch = function(user) {
        
    }
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