'use strict';

var todo = angular.module('todo', ['ngResource']);

todo.controller('ToDo', ['$scope', '$resource', function($scope, $resource) {
	$scope.header = 'ToDo App';
	$scope.editingList = false;
	$scope.editingItem = false;

	var List = $resource('/lists/:listId', {listId: '@id'}, {
		update: {
			method: 'PUT',
			params: {listId: '@id'}
		}
	});
	var Item = $resource('/lists/:listId/items/:itemId', {listId: '@list.id', itemId: '@id'}, {
		update: {
			method: 'PUT',
			params: {listId: '@list.id', itemId: '@id'}
		}
	});

	$scope.lists = List.query(function() {
		$scope.list = $scope.lists[0];
	});

	$scope.$watch('list', function(newList) {
		if (newList) {
			$scope.items = Item.query({listId: newList.id});
		} else {
			$scope.items = [];
		}
	});

	$scope.addList = function() {
		var list = new List({name: 'List ' + $scope.lists.length, items: []});
		list.$save(function() {
			$scope.lists.push(list);
			$scope.listId = list.id.toString();
		});
	}

	$scope.editListName = function() {
		$scope.tempListName = $scope.list.name;
		$scope.editingList = true;
	}

	$scope.saveListName = function() {
		$scope.list.name = $scope.tempListName;
		$scope.list.$update(function() {
			$scope.editingList = false;
		});
	}

	$scope.addItem = function() {
		var item = new Item({list: $scope.list, name: 'Item ' + $scope.items.length});
		item.$save();
		$scope.items.push(item);
	}

	$scope.editItem = function(item) {
		item.tempItemName = item.name;
		item.editing = true;
	}

	$scope.saveItemName = function(item) {
		item.name = item.tempItemName;
		item.$update(function() {
			item.editing = false;
		});
	}

	$scope.removeItem = function(item) {
		var index = $scope.items.indexOf(item);
		item.$delete(function() {
			$scope.items.splice(index, 1);
		});
	}
}]);