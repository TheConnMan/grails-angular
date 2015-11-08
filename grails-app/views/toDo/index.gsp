<!doctype html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Angular - ToDo</title>
		<asset:javascript src="toDo/index.js"/>
	</head>
	<body>
		<div class="ui segment" ng-app="todo" ng-controller="ToDo">
			<h1 class="ui header">{{header}}</h1>
			<select class="ui dropdown" ng-model="listId">
				<option value="">Select List...</option>
				<option ng-repeat="list in lists | orderBy: 'name'" value="{{list.id}}">{{list.name}}</option>
			</select>
			<button class="ui button" ng-click="addList()">Add List</button>
			<div class="ui segment" ng-show="list">
				<h2>
					<span ng-show="!editingList">{{list.name}} <i class="ui pencil link icon" ng-click="editingList = true"></i></span>
					<span ng-show="editingList">
						<input class="ui input" ng-model="list.name" />
						<i class="ui green check link icon" ng-click="saveListName()"></i>
						<i class="ui red remove link icon"></i>
					</span>
				</h2>
				<ul>
					<li ng-repeat="item in items">{{item.name}}<i class="ui icon remove" ng-click="removeItem(item)"></i></li>
					<li><button class="ui button" ng-click="addItem()">Add Item</div>
				</ul>
			</div>
		</div>
	</body>
</html>
