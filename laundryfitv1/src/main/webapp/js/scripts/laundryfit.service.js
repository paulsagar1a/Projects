(function () {
    'use strict';
	var app=angular.module("laundryfitLiteApp",["ngRoute"]);
    app.factory('laundryfitService', laundryfitService);
    laundryfitService.$inject = ['Restangular'];
    function laundryfitService(Restangular) {
		var laundryfitService = {
        	saveSignupDetails: saveSignupDetails
        };
		return laundryfitService;
		function saveSignupDetails(signupDetailsObj){
			return Restangular.all('rest/signup').
            post(signupDetailsObj).then(function(response){
				return response.data;
			}, function(error) {
                return false;
            });
		};
	 }
})();