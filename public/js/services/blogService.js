angular.module('blogService', []).service('blogService', ['$http', function($http){
    this.getPosts = function() {
        return $http.get('../data/posts.json').success(function(data) {
            return data.posts;
        });
    };
}]);
