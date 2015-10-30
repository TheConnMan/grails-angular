'use strict';

var todo = angular.module('todo', ['ngResource']);

todo.controller('ToDo', ['$scope', '$resource', function($scope, $resource) {
	$scope.header = 'ToDo App';

	var List = $resource('/api/list/:listId');

	$scope.lists = List.query();
}]);