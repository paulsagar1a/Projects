/**
 * 
 */

(function() {
	'use strict';
	app.controller('premiumController',premiumController);
	premiumController.$inject = ['$scope','$http'];
	function premiumController($scope,$http) {
		var premiumObj = this;
		
		premiumObj.serverMsg = null;
		premiumObj.saveOrderDetails = saveOrderDetails;
		premiumObj.contactDetailsObj = {};
		premiumObj.contactDetailsObj.customerDTO = {
				'customerName': null,
				'customerPhone': null,
				'customerCity': null,
				'customerPin': null,
				'customerLandmark': null,
				'customerAddress': null
		};
		function saveOrderDetails(formData) {
			if(!formData.$pristine && formData.$dirty) {
				premiumObj.dataCopyServiceObj = angular.copy(premiumObj.contactDetailsObj);
				saveDetails(premiumObj.dataCopyServiceObj).then(function (response) {
	                    //premiumObj.contactDetailsObj = response.data;
	                    if(response.data === "") {
	                    	premiumObj.serverMsg = 'Your order is already in active state. Please give another contact number to activate order';
	                    } else {
	                    	premiumObj.serverMsg = 'Order placed successfully';
	                    	premiumObj.contactDetailsObj = null;
	                    } 
	            }); 
	            formData.$setUntouched();
	            formData.$setPristine();
			}
		}
		
		function saveDetails(detailsObj) { 
	        var response = $http({
	        	 method: 'PUT',
	        	 url: 'rest/laundryfit/premium_order/save',
	        	 data: detailsObj
	        	});
	        return response;
		};
	}
})();