'use strict';

var todo = angular.module('todo', ['todo.modules.List']);

todo.controller('ToDo', ['$scope', '$http', 'List', function($scope, $http, List) {
	$scope.header = 'ToDo App';
	$scope.selected = '0';

	$http.get('/test').success(function(data) {
		$scope.lists = data.map(function(item) {
			return new List(item);
		});
	});
}]);