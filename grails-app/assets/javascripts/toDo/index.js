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
			$scope.list = list;
			$scope.editListName();
		});
	}

	$scope.editListName = function() {
		$scope.tempListName = $scope.list.name;
		$scope.editingList = true;
		setTimeout(function() {
			$('#listInput').focus();
		}, 0);
	}

	$scope.saveListName = function() {
		$scope.list.name = $scope.tempListName;
		$scope.list.$update(function() {
			$scope.editingList = false;
		});
	}

	$scope.removeList = function() {
		var index = $scope.lists.indexOf($scope.list);
		$scope.list.$delete(function() {
			$scope.lists.splice(index, 1);
			$scope.list = $scope.lists[0];
		});
	}

	$scope.addItem = function() {
		var item = new Item({list: $scope.list, name: 'New Item'});
		item.$save(function() {
			$scope.items.push(item);
			$scope.editItem(item);
		});
	}

	$scope.editItem = function(item) {
		item.tempItemName = item.name;
		item.editing = true;
		setTimeout(function() {
			$('#item-' + item.id + ' input').focus();
		}, 0);
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
}]).directive('todoEnter', function() {
	return function($scope, $element, $attrs) {
		$element.bind('keydown keypress', function(e) {
			if (e.which === 13) {
				$scope.$apply(function() {
					$scope.$eval($attrs.todoEnter);
				});
				e.preventDefault();
			}
		});
	}
}).directive('todoEsc', function() {
	return function($scope, $element, $attrs) {
		$element.bind('keydown keypress', function(e) {
			if (e.which === 27) {
				$scope.$apply(function() {
					$scope.$eval($attrs.todoEsc);
				});
				e.preventDefault();
			}
		});
	}
});