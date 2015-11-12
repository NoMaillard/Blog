angular.module('blogCtrl', []).controller('blogController', function($scope, $http, blogService){

    $http.get('../data/posts.json').success(function (data){
        $scope.posts = data.posts;
    });
    
});
