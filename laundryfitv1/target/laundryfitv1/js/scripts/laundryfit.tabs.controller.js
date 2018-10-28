var app=angular.module("laundryfitLiteApp",["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
	$routeProvider.when("/home", {
		templateUrl: "html/laundryfit.home.html",
		controllerAs:'homeCtrl',
		controller: "homeController"
    })
	.when("/pricing", {
		templateUrl: "html/laundryfit.pricing.html",
		controllerAs:'pricingCtrl',
		controller: "pricingController"
    })
	.when("/faq", {
		templateUrl: "html/laundryfit.faq.html",
		controllerAs:'faqCtrl',
		controller: "faqController"
    })
	.when("/signup", {
		templateUrl: "html/laundryfit.signup.html",
		controllerAs:'signupCtrl',
		controller: "signupController"
    })
	.when("/login", {
		templateUrl: "html/laundryfit.login.html",
		controllerAs:'loginCtrl',
		controller: "loginController"
    })
    .when("/instant", {
		templateUrl: "html/laundryfit.instant.html",
		controllerAs:'instantCtrl',
		controller: "instantController"
    })
    .when("/premium", {
		templateUrl: "html/laundryfit.premium.html",
		controllerAs:'premiumCtrl',
		controller: "premiumController"
    })
	.otherwise({redirectTo: "/home"});
	$locationProvider.html5Mode(true);
});
