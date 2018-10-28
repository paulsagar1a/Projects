/**
 * 
 */
(function() {
	'use strict';
	app.controller('ventureController',ventureController);
	ventureController.$inject = ['$scope','$http','$timeout','$window'];
	function ventureController($scope,$http,$timeout,$window) {
		var ventureObj = this;
		
		ventureObj.customerPhone = null;
		ventureObj.search = search;
		ventureObj.complete = complete;
		ventureObj.retrivedData = null;
		ventureObj.searchType = null;
		ventureObj.isComplete = false;
		ventureObj.selected = {};
		
		function search(type) {
			if(type){
				searchDetailsUsingType(type).then(function (response) {
					ventureObj.retrivedData = response.data;
					ventureObj.searchType = type;
				});
			} else {
				if(ventureObj.customerPhone){
					ventureObj.dataCopyServiceObj = angular.copy(ventureObj.customerPhone);
					searchDetails(ventureObj.dataCopyServiceObj).then(function (response) {
						ventureObj.retrivedData = response.data;
					});
				}
			}
		}
		
		function complete() {
			if(!isEmpty(ventureObj.selected)) {
				var array = objToArray(ventureObj.selected);
				completeOrder(array).then(function (response) {
					ventureObj.isComplete = response.data;
					if(ventureObj.isComplete) {
						$timeout(function(){
							ventureObj.isComplete = false;
					    }, 5000);
						search(ventureObj.searchType);
					}
				});
			}
		}
		
		function objToArray(object){
			var array = [];
			var obj = {};
			for(var key in object) {
				if(object[key]) {
					obj = {
							'orderId' : key,
							'selected' : object[key]
						  };
					array.push(obj);
				}
			}
			return array;
		}
		
		function isEmpty(map) {
		   for(var key in map) {
		      return !map.hasOwnProperty(key);
		   }
		   return true;
		}
		
		function completeOrder(obj) {
			var response = $http({
	        	 method: 'POST',
	        	 url: 'rest/laundryfit_support/complete/save',
	        	 data: obj
	        	});
	        return response;
		}
		
		function searchDetailsUsingType(type){
			var response = $http({
	        	 method: 'GET',
	        	 url: 'rest/laundryfit_support/searchtype/'+type
	        	});
	        return response;
		}
		
		function searchDetails(phone){
			var response = $http({
	        	 method: 'GET',
	        	 url: 'rest/laundryfit_support/search/'+phone
	        	});
	        return response;
		}
	}
})();