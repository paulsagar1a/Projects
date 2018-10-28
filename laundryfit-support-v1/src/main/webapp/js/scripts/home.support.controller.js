/**
 * 
 */

(function() {
	'use strict';
	app.controller('homeSuprtController',homeSuprtController);
	homeSuprtController.$inject = ['$scope','$http','$location','$window'];
	function homeSuprtController($scope,$http,$location,$window) {
		var homeSupportObj = this;
		
		homeSupportObj.loginFunc = loginFunc;
		homeSupportObj.inputEmail = null;
		homeSupportObj.inputPassword = null;
		homeSupportObj.validCredentials = null;
		
		function loginFunc(formData) {
			if(!formData.$pristine && formData.$dirty) {
				verifyDetails(homeSupportObj.inputEmail,homeSupportObj.inputPassword).then(function (response) {
					if(response.data.credential_status) {
		            	homeSupportObj.validCredentials = true;
		            	//set token
		                $window.sessionStorage.setItem('access_token', response.data.access_token);
						$location.url('venture');
					} else {
		            	homeSupportObj.validCredentials = false;
					}
	            }, function () {
	            	return false; 
	            }); 
	            formData.$setUntouched();
	            formData.$setPristine();
			}
		}
		
		function verifyDetails(email,password) {
			var response = $http({
	        	 method: 'GET',
	        	 url: 'rest/laundryfit_login/verify/'+email+'/'+password
	        	});
	        return response;
		}
	}
})();
