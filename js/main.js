var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.name = "Sam Tester";
});

app.controller('MyController', function($scope){
	$scope.person = {
		name: "Samuel Tester"
	};
});