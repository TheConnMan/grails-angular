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
			<i class="ui big plus link icon" ng-click="addList()"></i>
			<i class="ui big remove link icon" ng-click="removeList()"></i>
			<div class="ui segment" ng-show="list">
				<h2>
					<span ng-show="!editingList" ng-click="editListName()">{{list.name}}</span>
					<span ng-show="editingList">
						<input class="ui input" ng-model="tempListName" />
						<i class="ui green check link icon" ng-click="saveListName()"></i>
						<i class="ui red remove link icon" ng-click="editingList = false"></i>
					</span>
				</h2>
				<div class="ui relaxed divided list">
					<div class="item" ng-repeat="item in items">
						<span ng-show="!item.editing">
							<span ng-click="editItem(item)">{{item.name}}</span>
							<i class="ui circular icon link remove" ng-click="removeItem(item)"></i>
						</span>
						<span ng-show="item.editing">
							<input class="ui input" ng-model="item.tempItemName" />
							<i class="ui green check link icon" ng-click="saveItemName(item)"></i>
							<i class="ui red remove link icon" ng-click="item.editing = false"></i>
						</span>
					</div>
					<div class="item">
						<button class="ui button" ng-click="addItem()">Add Item</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
