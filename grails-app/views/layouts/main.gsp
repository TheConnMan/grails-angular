<!doctype html>
<html lang="en" class="no-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title><g:layoutTitle default="Angular"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<asset:stylesheet src="application.css"/>
		<asset:javascript src="application.js"/>

		<g:layoutHead/>
	</head>
	<body>
		<div class="ui segment">
			<div class="ui two column grid">
				<div class="column"></div>
				<div class="column" style="text-align: right;"></div>
			</div>
		</div>
		<div class="menu-wrapper">
			<div class="ui menu">
				<a class="item" href="/">
					<i class="icon home"></i>
					Home
				</a>
			</div>
		</div>
		<div class="content">
			<g:layoutBody/>
		</div>
		<div class="menu-wrapper">
			<div class="ui segment" style="margin-bottom: 15px;">
				<b>Angular ${grailsApplication.metadata['app.version']}</b>
			</div>
		</div>
	</body>
</html>
