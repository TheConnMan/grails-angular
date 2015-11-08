(function() {
	'use strict';

	angular.module('todo.modules.List', []).factory('List', ['$http', function($http) {
		function List(listData) {
			if (listData) {
				this.setData(listData);
			}
		};
		List.prototype = {
			setData: function(listData) {
				angular.extend(this, listData);
			},
			load: function(id) {
				var scope = this;
				$http.get('/lists'/ + id).success(function(listData) {
					scope.setData(listData);
				});
			},
			delete: function() {
				$http.delete('/lists/delete/' + this.id);
			},
			update: function() {
				$http.put('/lists/update/' + this.id, this);
			}
		};
		return List;
	}]);
})();