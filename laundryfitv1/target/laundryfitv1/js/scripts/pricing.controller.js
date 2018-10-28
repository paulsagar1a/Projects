(function() {
	'use strict';
	app.controller('pricingController',pricingController);
	pricingController.$inject = ['$scope'];
	function pricingController($scope) {
		var pricingObj = this;
		
		pricingObj.orderType = 'instant';
		pricingObj.instantType = 'W&I';
		
		pricingObj.showOrderType = showOrderType;
		pricingObj.showPrice = showPrice;
		
		function showOrderType(orderType) {
			if(orderType === 'instant') {
				pricingObj.orderType = orderType;
				pricingObj.instantType = 'W&I';
			} else {
				pricingObj.orderType = orderType;
			}
		}
		function showPrice(instantOrderType) {
			pricingObj.instantType = instantOrderType;
		}
		
	}
})();
