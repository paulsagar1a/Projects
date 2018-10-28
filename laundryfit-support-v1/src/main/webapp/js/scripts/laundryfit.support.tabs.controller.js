var app=angular.module("laundryfitSupportApp",["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
	$routeProvider.when("/home", {
		templateUrl: "html/laundryfit.support.home.html",
		controllerAs: "homeSuprtCtrl",
		controller: "homeSuprtController"
    })
	.when("/venture", {
		templateUrl: "html/laundryfit.support.venture.html",
		controllerAs: "ventureCtrl",
		controller: "ventureController"
    })
	.otherwise({redirectTo: "/home"});
	$locationProvider.html5Mode(true);
});
