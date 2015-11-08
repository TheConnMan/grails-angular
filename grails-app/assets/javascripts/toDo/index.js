'use strict';

var todo = angular.module('todo', ['ngResource']);

todo.controller('ToDo', ['$scope', '$resource', function($scope, $resource) {
	$scope.header = 'ToDo App';
	$scope.selected = '0';

	var List = $resource('/list/:listId');

	$scope.lists = List.query();
}]);