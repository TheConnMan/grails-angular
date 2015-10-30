'use strict';

var todo = angular.module('todo', []);

todo.controller('ToDo', function($scope) {
	$scope.header = 'ToDo App';
});