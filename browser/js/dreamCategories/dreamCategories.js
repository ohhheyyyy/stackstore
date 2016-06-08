app.config(function($stateProvider){
    $stateProvider.state('Cat', {
        url: '/api/dreams/category/:category',
        controller: 'CategoryCtrl',
        templateUrl: 'js/dreamCategories/dream-categories.html',
        resolve: {
        	theDreams: function(CategoryFactory, $stateParams){
        		return CategoryFactory.findOne($stateParams.category);
        	}
        }
    })
});

app.factory('CategoryFactory', function($http, DreamsFactory){
	var CategoryFactory = {};
	CategoryFactory.findOne = function(category){
		return $http.get('/api/dreams/category/' + category)
		.then(function(response){
			return response.data;
		});
	};
	return CategoryFactory;
});

app.controller('CategoryCtrl', function($scope, theDreams){
	$scope.dreams = theDreams;
});


