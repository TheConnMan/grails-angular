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
			<select class="ui dropdown" ng-model="selected">
				<option value="0">Select List...</option>
				<option ng-repeat="list in lists | orderBy: 'name'" value="{{list.id}}">{{list.name}}</option>
			</select>
		</div>
	</body>
</html>
