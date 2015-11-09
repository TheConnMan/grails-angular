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
			<select class="ui dropdown" ng-options="l.name for l in lists" ng-model="list"></select>
			<button class="ui button" ng-click="addList()">Add List</button>
			<div class="ui segment" ng-show="list">
				<h2>
					<span ng-show="!editingList">{{list.name}} <i class="ui pencil link icon" ng-click="editListName()"></i></span>
					<span ng-show="editingList">
						<input class="ui input" ng-model="tempListName" />
						<i class="ui green check link icon" ng-click="saveListName()"></i>
						<i class="ui red remove link icon" ng-click="editingList = false"></i>
					</span>
				</h2>
				<ul>
					<li ng-repeat="item in items">
						<span ng-show="!item.editing">
							<span ng-click="editItem(item)">{{item.name}}</span><i class="ui icon link remove" ng-click="removeItem(item)"></i>
						</span>
						<span ng-show="item.editing">
							<input class="ui input" ng-model="item.tempItemName" />
							<i class="ui green check link icon" ng-click="saveItemName(item)"></i>
							<i class="ui red remove link icon" ng-click="item.editing = false"></i>
						</span>
					</li>
					<li><button class="ui button" ng-click="addItem()">Add Item</div>
				</ul>
			</div>
		</div>
	</body>
</html>
