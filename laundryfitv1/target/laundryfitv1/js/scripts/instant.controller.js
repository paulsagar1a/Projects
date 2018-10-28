/**
 * 
 */

(function() {
	'use strict';
	app.controller('instantController',instantController);
	instantController.$inject = ['$scope','$http'];
	function instantController($scope,$http) {
		var instantObj = this;
		
		//All variables are instantiated
		instantObj.primaryStage = true;	//This variable defines the stage of page
		instantObj.serverMsg = null;
		instantObj.instantType = 'W&I';	//This is Instant Order Type
		instantObj.instantCategory = 'M_W&I';	//This is Instant Order Category
		instantObj.orderDetailsObj = {};	//Initialization of rest object
		instantObj.orderDetailsObj.orderValue = 0;	//This indicates total bill of Instant Order
		instantObj.orderDetailsObj.orderDetails = null;	//This indicates total details of order
		
		instantObj.noOfTshirtMWI = 0;	//This indicates number of T-Shirt for M_W&I
		instantObj.noOfShirtMWI = 0;	//This indicates number of Shirt for M_W&I
		instantObj.noOfJeansMWI = 0;	//This indicates number of Jeans for M_W&I
		instantObj.noOfTrouserMWI = 0;	//This indicates number of Trouser for M_W&I
		instantObj.noOfLungiDhotiMWI = 0;	//This indicates number of Lungi and Dhoti for M_W&I
		instantObj.noOfSuitsBlazerMWI = 0;	//This indicates number of Suits and Blazer for M_W&I
		instantObj.noOfKurtaMWI = 0;	//This indicates number of Kurta for M_W&I
		instantObj.noOfTshirtWWI = 0;	//This indicates number of T-Shirt for W_W&I
		instantObj.noOfShirtWWI = 0;	//This indicates number of Shirt for W_W&I
		instantObj.noOfJeansWWI = 0;	//This indicates number of Jeans for W_W&I
		instantObj.noOfTrouserWWI = 0;	//This indicates number of Trouser for W_W&I
		instantObj.noOfSareeWWI = 0;	//This indicates number of Saree for W_W&I
		instantObj.noOfSuitsBlazerWWI = 0;	//This indicates number of Suits and Blazer for W_W&I
		instantObj.noOfSalwarKurtaWWI = 0;	//This indicates number of Salwar and Kurta for W_W&I
		instantObj.noOfKdressKWI = 0;	//This indicates number of Kids Dress for K_W&I
		instantObj.noOfLcoverHWI = 0;	//This indicates number of Light Cover for H_W&I
		instantObj.noOfHcoverHWI = 0;	//This indicates number of Heavy Cover for H_W&I
		
		instantObj.noOfTshirtMWF = 0;	//This indicates number of T-Shirt for M_W&F
		instantObj.noOfShirtMWF = 0;	//This indicates number of Shirt for M_W&F
		instantObj.noOfJeansMWF = 0;	//This indicates number of Jeans for M_W&F
		instantObj.noOfTrouserMWF = 0;	//This indicates number of Trouser for M_W&F
		instantObj.noOfLungiDhotiMWF = 0;	//This indicates number of Lungi and Dhoti for M_W&F
		instantObj.noOfSuitsBlazerMWF = 0;	//This indicates number of Suits and Blazer for M_W&F
		instantObj.noOfKurtaMWF = 0;	//This indicates number of Kurta for M_W&F
		instantObj.noOfCargosShortPyjamaMWF = 0;	//This indicates number of Cargos Short & Pyjama for M_W&F
		instantObj.noOfSweatshirtJacketMWF = 0;	//This indicates number of Sweatshirt Jacket for M_W&F
		instantObj.noOfInnerWearMWF = 0;	//This indicates number of Inner Wear for M_W&F
		instantObj.noOfTshirtWWF = 0;	//This indicates number of T-Shirt for W_W&F
		instantObj.noOfShirtWWF = 0;	//This indicates number of Shirt for W_W&F
		instantObj.noOfJeansWWF = 0;	//This indicates number of Jeans for W_W&F
		instantObj.noOfTrouserWWF = 0;	//This indicates number of Trouser for W_W&F
		instantObj.noOfSareeWWF = 0;	//This indicates number of Saree for W_W&F
		instantObj.noOfSuitsBlazerWWF = 0;	//This indicates number of Suits and Blazer for W_W&F
		instantObj.noOfSalwarKurtaWWF = 0;	//This indicates number of Salwar and Kurta for W_W&F
		instantObj.noOfCargosShortPyjamaWWF = 0;	//This indicates number of Cargos Short & Pyjama for W_W&F
		instantObj.noOfSweatshirtJacketWWF = 0;	//This indicates number of Sweatshirtr & Jacket for W_W&F
		instantObj.noOfInnerWearWWF = 0;	//This indicates number of Inner Wear for W_W&F
		instantObj.noOfKdressKWF = 0;	//This indicates number of Kids Dress for K_W&F
		instantObj.noOfLcoverHWF = 0;	//This indicates number of Light Cover for H_W&F
		instantObj.noOfHcoverHWF = 0;	//This indicates number of Heavy Cover for H_W&F
		instantObj.noOfTowelHWF = 0;	//This indicates number of Towel for H_W&F
		instantObj.noOfHandTowelHWF = 0;	//This indicates number of Hand Towel for H_W&F
		instantObj.noOfCarpetHWF = 0;	//This indicates number of Carpet for H_W&F

		
		//All functions are instantiated
		instantObj.saveOrderDetails = saveOrderDetails;
		instantObj.showInstantType = showInstantType;
		instantObj.showCategory = showCategory;
		instantObj.countTshirtMwiMinus = countTshirtMwiMinus;
		instantObj.countTshirtMwiPlus = countTshirtMwiPlus;
		instantObj.countShirtMwiMinus = countShirtMwiMinus;
		instantObj.countShirtMwiPlus = countShirtMwiPlus;
		instantObj.countJeansMwiMinus = countJeansMwiMinus;
		instantObj.countJeansMwiPlus = countJeansMwiPlus;
		instantObj.countTrouserMwiMinus = countTrouserMwiMinus;
		instantObj.countTrouserMwiPlus = countTrouserMwiPlus;
		instantObj.countLungiDhotiMwiMinus = countLungiDhotiMwiMinus;
		instantObj.countLungiDhotiMwiPlus = countLungiDhotiMwiPlus;
		instantObj.countSuitsBlazerMwiMinus = countSuitsBlazerMwiMinus;
		instantObj.countSuitsBlazerMwiPlus = countSuitsBlazerMwiPlus;
		instantObj.countKurtaMwiMinus = countKurtaMwiMinus;
		instantObj.countKurtaMwiPlus = countKurtaMwiPlus;
		instantObj.countTshirtWwiMinus = countTshirtWwiMinus;
		instantObj.countTshirtWwiPlus = countTshirtWwiPlus;
		instantObj.countShirtWwiMinus = countShirtWwiMinus;
		instantObj.countShirtWwiPlus = countShirtWwiPlus;
		instantObj.countJeansWwiMinus = countJeansWwiMinus;
		instantObj.countJeansWwiPlus = countJeansWwiPlus;
		instantObj.countTrouserWwiMinus = countTrouserWwiMinus;
		instantObj.countTrouserWwiPlus = countTrouserWwiPlus;
		instantObj.countSareeWwiMinus = countSareeWwiMinus;
		instantObj.countSareeWwiPlus = countSareeWwiPlus;
		instantObj.countSuitsBlazerWwiMinus = countSuitsBlazerWwiMinus;
		instantObj.countSuitsBlazerWwiPlus = countSuitsBlazerWwiPlus;
		instantObj.countSalwarKurtaWwiMinus = countSalwarKurtaWwiMinus;
		instantObj.countSalwarKurtaWwiPlus = countSalwarKurtaWwiPlus;
		instantObj.countKdressKwiMinus = countKdressKwiMinus;
		instantObj.countKdressKwiPlus = countKdressKwiPlus;
		instantObj.countLcoverHwiMinus = countLcoverHwiMinus;
		instantObj.countLcoverHwiPlus = countLcoverHwiPlus;
		instantObj.countHcoverHwiMinus = countHcoverHwiMinus;
		instantObj.countHcoverHwiPlus = countHcoverHwiPlus;
		
		instantObj.countTshirtMwfMinus = countTshirtMwfMinus;
		instantObj.countTshirtMwfPlus = countTshirtMwfPlus;
		instantObj.countShirtMwfMinus = countShirtMwfMinus;
		instantObj.countShirtMwfPlus = countShirtMwfPlus;
		instantObj.countJeansMwfMinus = countJeansMwfMinus;
		instantObj.countJeansMwfPlus = countJeansMwfPlus;
		instantObj.countTrouserMwfMinus = countTrouserMwfMinus;
		instantObj.countTrouserMwfPlus = countTrouserMwfPlus;
		instantObj.countLungiDhotiMwfMinus = countLungiDhotiMwfMinus;
		instantObj.countLungiDhotiMwfPlus = countLungiDhotiMwfPlus;
		instantObj.countSuitsBlazerMwfMinus = countSuitsBlazerMwfMinus;
		instantObj.countSuitsBlazerMwfPlus = countSuitsBlazerMwfPlus;
		instantObj.countKurtaMwfMinus = countKurtaMwfMinus;
		instantObj.countKurtaMwfPlus = countKurtaMwfPlus;
		instantObj.countCargosShortPyjamaMwfMinus = countCargosShortPyjamaMwfMinus;
		instantObj.countCargosShortPyjamaMwfPlus = countCargosShortPyjamaMwfPlus;
		instantObj.countSweatshirtJacketMwfMinus = countSweatshirtJacketMwfMinus;
		instantObj.countSweatshirtJacketMwfPlus = countSweatshirtJacketMwfPlus;
		instantObj.countInnerWearMwfMinus = countInnerWearMwfMinus;
		instantObj.countInnerWearMwfPlus = countInnerWearMwfPlus;
		instantObj.countTshirtWwfMinus = countTshirtWwfMinus;
		instantObj.countTshirtWwfPlus = countTshirtWwfPlus;
		instantObj.countShirtWwfMinus = countShirtWwfMinus;
		instantObj.countShirtWwfPlus = countShirtWwfPlus;
		instantObj.countJeansWwfMinus = countJeansWwfMinus;
		instantObj.countJeansWwfPlus = countJeansWwfPlus;
		instantObj.countTrouserWwfMinus = countTrouserWwfMinus;
		instantObj.countTrouserWwfPlus = countTrouserWwfPlus;
		instantObj.countSareeWwfMinus = countSareeWwfMinus;
		instantObj.countSareeWwfPlus = countSareeWwfPlus;
		instantObj.countSuitsBlazerWwfMinus = countSuitsBlazerWwfMinus;
		instantObj.countSuitsBlazerWwfPlus = countSuitsBlazerWwfPlus;
		instantObj.countSalwarKurtaWwfMinus = countSalwarKurtaWwfMinus;
		instantObj.countSalwarKurtaWwfPlus = countSalwarKurtaWwfPlus;
		instantObj.countCargosShortPyjamaWwfMinus = countCargosShortPyjamaWwfMinus;
		instantObj.countCargosShortPyjamaWwfPlus = countCargosShortPyjamaWwfPlus;
		instantObj.countSweatshirtrJacketWwfMinus = countSweatshirtrJacketWwfMinus;
		instantObj.countSweatshirtrJacketWwfPlus = countSweatshirtrJacketWwfPlus;
		instantObj.countInnerWearWwfMinus = countInnerWearWwfMinus;
		instantObj.countInnerWearWwfPlus = countInnerWearWwfPlus;
		instantObj.countKdressKwfMinus = countKdressKwfMinus;
		instantObj.countKdressKwfPlus = countKdressKwfPlus;
		instantObj.countLcoverHwfMinus = countLcoverHwfMinus;
		instantObj.countLcoverHwfPlus = countLcoverHwfPlus;
		instantObj.countHcoverHwfMinus = countHcoverHwfMinus;
		instantObj.countHcoverHwfPlus = countHcoverHwfPlus;
		instantObj.countTowelHwfMinus = countTowelHwfMinus;
		instantObj.countTowelHwfPlus = countTowelHwfPlus;
		instantObj.countHandTowelHwfMinus = countHandTowelHwfMinus;
		instantObj.countHandTowelHwfPlus = countHandTowelHwfPlus;
		instantObj.countCarpetHwfMinus = countCarpetHwfMinus;
		instantObj.countCarpetHwfPlus = countCarpetHwfPlus;
		
		//This function is to show Type of order(i.e. Wash_&_Iron or Wash_&_Fold)
		function showInstantType(iType) {
			if(iType === 'W&I') {
				instantObj.instantType = 'W&I';
				instantObj.instantCategory = 'M_W&I';
			} else if(iType === 'W&F') {
				instantObj.instantType = 'W&F';
				instantObj.instantCategory = 'M_W&F';
			}
		}
		
		//This function is to show Category of item(i.e. Men, Women, Kids or Households)
		function showCategory(cType) {
			if(cType === 'M_W&I') {
				instantObj.instantCategory = 'M_W&I';
			} else if(cType === 'W_W&I') {
				instantObj.instantCategory = 'W_W&I';
			} else if(cType === 'K_W&I') {
				instantObj.instantCategory = 'K_W&I';
			} else if(cType === 'H_W&I') {
				instantObj.instantCategory = 'H_W&I';
			} else if(cType === 'M_W&F') {
				instantObj.instantCategory = 'M_W&F';
			} else if(cType === 'W_W&F') {
				instantObj.instantCategory = 'W_W&F';
			} else if(cType === 'K_W&F') {
				instantObj.instantCategory = 'K_W&F';
			} else if(cType === 'H_W&F') {
				instantObj.instantCategory = 'H_W&F';
			}
		}
		
		//This function count Total Bill of instant Order
		function countTotalBill() {
			instantObj.orderDetailsObj.orderValue = instantObj.noOfTshirtMWI*13 + instantObj.noOfShirtMWI*13 + instantObj.noOfJeansMWI*16 
					+ instantObj.noOfTrouserMWI*13 + instantObj.noOfLungiDhotiMWI*16 + instantObj.noOfSuitsBlazerMWI*31
					+ instantObj.noOfKurtaMWI*19 + instantObj.noOfTshirtWWI*13 + instantObj.noOfShirtWWI*13 
					+ instantObj.noOfJeansWWI*16 + instantObj.noOfTrouserWWI*13 + instantObj.noOfSareeWWI*34
					+ instantObj.noOfSuitsBlazerWWI*31 + instantObj.noOfSalwarKurtaWWI*19 + instantObj.noOfKdressKWI*13
					+ instantObj.noOfLcoverHWI*16 + instantObj.noOfHcoverHWI*21 + instantObj.noOfTshirtMWF*8 
					+ instantObj.noOfShirtMWF*8 + instantObj.noOfJeansMWF*11 + instantObj.noOfTrouserMWF*8
					+ instantObj.noOfLungiDhotiMWF*11 + instantObj.noOfSuitsBlazerMWF*21 + instantObj.noOfKurtaMWF*13
					+ instantObj.noOfCargosShortPyjamaMWF*11 + instantObj.noOfSweatshirtJacketMWF*21 + instantObj.noOfInnerWearMWF*7
					+ instantObj.noOfTshirtWWF*8 + instantObj.noOfShirtWWF*8 + instantObj.noOfJeansWWF*11
					+ instantObj.noOfTrouserWWF*8 + instantObj.noOfSareeWWF*21 + instantObj.noOfSuitsBlazerWWF*21 
					+ instantObj.noOfSalwarKurtaWWF*13 + instantObj.noOfCargosShortPyjamaWWF*11 + instantObj.noOfSweatshirtJacketWWF*21
					+ instantObj.noOfInnerWearWWF*7 + instantObj.noOfKdressKWF*8 + instantObj.noOfLcoverHWF*11 
					+ instantObj.noOfHcoverHWF*16 + instantObj.noOfTowelHWF*13 + instantObj.noOfHandTowelHWF*6
					+ instantObj.noOfCarpetHWF*6;
			instantObj.orderDetailsObj.orderDetails = instantObj.noOfTshirtMWI + ',' + instantObj.noOfShirtMWI + ',' + instantObj.noOfJeansMWI + ',' 
					+ instantObj.noOfTrouserMWI + ',' + instantObj.noOfLungiDhotiMWI + ',' + instantObj.noOfSuitsBlazerMWI + ',' 
					+ instantObj.noOfKurtaMWI + ',' + instantObj.noOfTshirtWWI + ',' + instantObj.noOfShirtWWI + ',' 
					+ instantObj.noOfJeansWWI + ',' + instantObj.noOfTrouserWWI + ',' + instantObj.noOfSareeWWI + ',' 
					+ instantObj.noOfSuitsBlazerWWI + ',' + instantObj.noOfSalwarKurtaWWI + ',' + instantObj.noOfKdressKWI + ',' 
					+ instantObj.noOfLcoverHWI + ',' + instantObj.noOfHcoverHWI + ',' + instantObj.noOfTshirtMWF + ',' 
					+ instantObj.noOfShirtMWF + ',' + instantObj.noOfJeansMWF + ',' + instantObj.noOfTrouserMWF + ',' 
					+ instantObj.noOfLungiDhotiMWF + ',' + instantObj.noOfSuitsBlazerMWF + ',' + instantObj.noOfKurtaMWF + ',' 
					+ instantObj.noOfCargosShortPyjamaMWF + ',' + instantObj.noOfSweatshirtJacketMWF + ',' + instantObj.noOfInnerWearMWF + ',' 
					+ instantObj.noOfTshirtWWF + ',' + instantObj.noOfShirtWWF + ',' + instantObj.noOfJeansWWF + ',' 
					+ instantObj.noOfTrouserWWF + ',' + instantObj.noOfSareeWWF + ',' + instantObj.noOfSuitsBlazerWWF + ',' 
					+ instantObj.noOfSalwarKurtaWWF + ',' + instantObj.noOfCargosShortPyjamaWWF + ',' + instantObj.noOfSweatshirtJacketWWF + ',' 
					+ instantObj.noOfInnerWearWWF + ',' + instantObj.noOfKdressKWF + ',' + instantObj.noOfLcoverHWF + ',' 
					+ instantObj.noOfHcoverHWF + ',' + instantObj.noOfTowelHWF + ',' + instantObj.noOfHandTowelHWF + ',' 
					+ instantObj.noOfCarpetHWF;
		}
		
		//This function subtracts T-Shirt for M_W&I by 1 
		function countTshirtMwiMinus() {
			if(instantObj.noOfTshirtMWI > 0) {
				instantObj.noOfTshirtMWI = instantObj.noOfTshirtMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds T-Shirt for M_W&I by 1 
		function countTshirtMwiPlus() {
			instantObj.noOfTshirtMWI = instantObj.noOfTshirtMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Shirt number for M_W&I by 1 
		function countShirtMwiMinus() {
			if(instantObj.noOfShirtMWI > 0) {
				instantObj.noOfShirtMWI = instantObj.noOfShirtMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Shirt number for M_W&I by 1
		function countShirtMwiPlus() {
			instantObj.noOfShirtMWI = instantObj.noOfShirtMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Jeans number for M_W&I by 1
		function countJeansMwiMinus() {
			if(instantObj.noOfJeansMWI > 0) {
				instantObj.noOfJeansMWI = instantObj.noOfJeansMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Jeans number for M_W&I by 1
		function countJeansMwiPlus() {
			instantObj.noOfJeansMWI = instantObj.noOfJeansMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Trouser number for M_W&I by 1
		function countTrouserMwiMinus() {
			if(instantObj.noOfTrouserMWI > 0) {
				instantObj.noOfTrouserMWI = instantObj.noOfTrouserMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Trouser number for M_W&I by 1
		function countTrouserMwiPlus() {
			instantObj.noOfTrouserMWI = instantObj.noOfTrouserMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Lungi & Dhoti number for M_W&I by 1
		function countLungiDhotiMwiMinus() {
			if(instantObj.noOfLungiDhotiMWI > 0) {
				instantObj.noOfLungiDhotiMWI = instantObj.noOfLungiDhotiMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Lungi & Dhoti number for M_W&I by 1
		function countLungiDhotiMwiPlus() {
			instantObj.noOfLungiDhotiMWI = instantObj.noOfLungiDhotiMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Suits & Blazer number for M_W&I by 1
		function countSuitsBlazerMwiMinus() {
			if(instantObj.noOfSuitsBlazerMWI > 0) {
				instantObj.noOfSuitsBlazerMWI = instantObj.noOfSuitsBlazerMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Suits & Blazer number for M_W&I by 1
		function countSuitsBlazerMwiPlus() {
			instantObj.noOfSuitsBlazerMWI = instantObj.noOfSuitsBlazerMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Kurta number for M_W&I by 1
		function countKurtaMwiMinus() {
			if(instantObj.noOfKurtaMWI > 0) {
				instantObj.noOfKurtaMWI = instantObj.noOfKurtaMWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Kurta number for M_W&I by 1
		function countKurtaMwiPlus() {
			instantObj.noOfKurtaMWI = instantObj.noOfKurtaMWI + 1;
			countTotalBill();
		}
		
		//This function subtracts  T-Shirt for W_W&I by 1 
		function countTshirtWwiMinus() {
			if(instantObj.noOfTshirtWWI > 0) {
				instantObj.noOfTshirtWWI = instantObj.noOfTshirtWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds T-Shirt for W_W&I by 1 
		function countTshirtWwiPlus() {
			instantObj.noOfTshirtWWI = instantObj.noOfTshirtWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Shirt number for W_W&I by 1 
		function countShirtWwiMinus() {
			if(instantObj.noOfShirtWWI > 0) {
				instantObj.noOfShirtWWI = instantObj.noOfShirtWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Shirt number for W_W&I by 1
		function countShirtWwiPlus() {
			instantObj.noOfShirtWWI = instantObj.noOfShirtWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Jeans number for W_W&I by 1
		function countJeansWwiMinus() {
			if(instantObj.noOfJeansWWI > 0) {
				instantObj.noOfJeansWWI = instantObj.noOfJeansWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Jeans number for W_W&I by 1
		function countJeansWwiPlus() {
			instantObj.noOfJeansWWI = instantObj.noOfJeansWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Trouser number for W_W&I by 1
		function countTrouserWwiMinus() {
			if(instantObj.noOfTrouserWWI > 0) {
				instantObj.noOfTrouserWWI = instantObj.noOfTrouserWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Trouser number for W_W&I by 1
		function countTrouserWwiPlus() {
			instantObj.noOfTrouserWWI = instantObj.noOfTrouserWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Saree number for W_W&I by 1
		function countSareeWwiMinus() {
			if(instantObj.noOfSareeWWI > 0) {
				instantObj.noOfSareeWWI = instantObj.noOfSareeWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Saree number for W_W&I by 1
		function countSareeWwiPlus() {
			instantObj.noOfSareeWWI = instantObj.noOfSareeWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Suits & Blazer number for W_W&I by 1
		function countSuitsBlazerWwiMinus() {
			if(instantObj.noOfSuitsBlazerWWI > 0) {
				instantObj.noOfSuitsBlazerWWI = instantObj.noOfSuitsBlazerWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Suits & Blazer number for W_W&I by 1
		function countSuitsBlazerWwiPlus() {
			instantObj.noOfSuitsBlazerWWI = instantObj.noOfSuitsBlazerWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Salwar & Kurta number for W_W&I by 1
		function countSalwarKurtaWwiMinus() {
			if(instantObj.noOfSalwarKurtaWWI > 0) {
				instantObj.noOfSalwarKurtaWWI = instantObj.noOfSalwarKurtaWWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Salwar & Kurta number for W_W&I by 1
		function countSalwarKurtaWwiPlus() {
			instantObj.noOfSalwarKurtaWWI = instantObj.noOfSalwarKurtaWWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Kids dress number for K_W&I by 1
		function countKdressKwiMinus() {
			if(instantObj.noOfKdressKWI > 0) {
				instantObj.noOfKdressKWI = instantObj.noOfKdressKWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Kids dress number for K_W&I by 1
		function countKdressKwiPlus() {
			instantObj.noOfKdressKWI = instantObj.noOfKdressKWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Light Cover number for H_W&I by 1
		function countLcoverHwiMinus() {
			if(instantObj.noOfLcoverHWI > 0) {
				instantObj.noOfLcoverHWI = instantObj.noOfLcoverHWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Light Cover number for H_W&I by 1
		function countLcoverHwiPlus() {
			instantObj.noOfLcoverHWI = instantObj.noOfLcoverHWI + 1;
			countTotalBill();
		}
		
		//This function subtracts Heavy Cover number for H_W&I by 1
		function countHcoverHwiMinus() {
			if(instantObj.noOfHcoverHWI > 0) {
				instantObj.noOfHcoverHWI = instantObj.noOfHcoverHWI - 1;
				countTotalBill();
			}
		}
		
		//This function adds Heavy Cover number for H_W&I by 1
		function countHcoverHwiPlus() {
			instantObj.noOfHcoverHWI = instantObj.noOfHcoverHWI + 1;
			countTotalBill();
		}
		
		
		//This function subtracts T-Shirt for M_W&F by 1 
		function countTshirtMwfMinus() {
			if(instantObj.noOfTshirtMWF > 0) {
				instantObj.noOfTshirtMWF = instantObj.noOfTshirtMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds T-Shirt for M_W&F by 1 
		function countTshirtMwfPlus() {
			instantObj.noOfTshirtMWF = instantObj.noOfTshirtMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Shirt number for M_W&F by 1 
		function countShirtMwfMinus() {
			if(instantObj.noOfShirtMWF > 0) {
				instantObj.noOfShirtMWF = instantObj.noOfShirtMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Shirt number for M_W&F by 1
		function countShirtMwfPlus() {
			instantObj.noOfShirtMWF = instantObj.noOfShirtMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Jeans number for M_W&F by 1
		function countJeansMwfMinus() {
			if(instantObj.noOfJeansMWF > 0) {
				instantObj.noOfJeansMWF = instantObj.noOfJeansMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Jeans number for M_W&F by 1
		function countJeansMwfPlus() {
			instantObj.noOfJeansMWF = instantObj.noOfJeansMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Trouser number for M_W&F by 1
		function countTrouserMwfMinus() {
			if(instantObj.noOfTrouserMWF > 0) {
				instantObj.noOfTrouserMWF = instantObj.noOfTrouserMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Trouser number for M_W&F by 1
		function countTrouserMwfPlus() {
			instantObj.noOfTrouserMWF = instantObj.noOfTrouserMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Lungi & Dhoti number for M_W&F by 1
		function countLungiDhotiMwfMinus() {
			if(instantObj.noOfLungiDhotiMWF > 0) {
				instantObj.noOfLungiDhotiMWF = instantObj.noOfLungiDhotiMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Lungi & Dhoti number for M_W&F by 1
		function countLungiDhotiMwfPlus() {
			instantObj.noOfLungiDhotiMWF = instantObj.noOfLungiDhotiMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Suits & Blazer number for M_W&F by 1
		function countSuitsBlazerMwfMinus() {
			if(instantObj.noOfSuitsBlazerMWF > 0) {
				instantObj.noOfSuitsBlazerMWF = instantObj.noOfSuitsBlazerMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Suits & Blazer number for M_W&F by 1
		function countSuitsBlazerMwfPlus() {
			instantObj.noOfSuitsBlazerMWF = instantObj.noOfSuitsBlazerMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Kurta number for M_W&F by 1
		function countKurtaMwfMinus() {
			if(instantObj.noOfKurtaMWF > 0) {
				instantObj.noOfKurtaMWF = instantObj.noOfKurtaMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Kurta number for M_W&F by 1
		function countKurtaMwfPlus() {
			instantObj.noOfKurtaMWF = instantObj.noOfKurtaMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Cargos Short & Pyjama number for M_W&F by 1
		function countCargosShortPyjamaMwfMinus() {
			if(instantObj.noOfCargosShortPyjamaMWF > 0) {
				instantObj.noOfCargosShortPyjamaMWF = instantObj.noOfCargosShortPyjamaMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Cargos Short & Pyjama number for M_W&F by 1
		function countCargosShortPyjamaMwfPlus() {
			instantObj.noOfCargosShortPyjamaMWF = instantObj.noOfCargosShortPyjamaMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Sweatshirt & Jacket number for M_W&F by 1
		function countSweatshirtJacketMwfMinus() {
			if(instantObj.noOfSweatshirtJacketMWF > 0) {
				instantObj.noOfSweatshirtJacketMWF = instantObj.noOfSweatshirtJacketMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Sweatshirt & Jacket number for M_W&F by 1
		function countSweatshirtJacketMwfPlus() {
			instantObj.noOfSweatshirtJacketMWF = instantObj.noOfSweatshirtJacketMWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Inner Wear number for M_W&F by 1
		function countInnerWearMwfMinus() {
			if(instantObj.noOfInnerWearMWF > 0){
				instantObj.noOfInnerWearMWF = instantObj.noOfInnerWearMWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Inner Wear number for M_W&F by 1
		function countInnerWearMwfPlus() {
				instantObj.noOfInnerWearMWF = instantObj.noOfInnerWearMWF + 1;
				countTotalBill();
		}
		
		//This function subtracts  T-Shirt for W_W&F by 1 
		function countTshirtWwfMinus() {
			if(instantObj.noOfTshirtWWF > 0) {
				instantObj.noOfTshirtWWF = instantObj.noOfTshirtWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds T-Shirt for W_W&F by 1 
		function countTshirtWwfPlus() {
			instantObj.noOfTshirtWWF = instantObj.noOfTshirtWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Shirt number for W_W&F by 1 
		function countShirtWwfMinus() {
			if(instantObj.noOfShirtWWF > 0) {
				instantObj.noOfShirtWWF = instantObj.noOfShirtWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Shirt number for W_W&F by 1
		function countShirtWwfPlus() {
			instantObj.noOfShirtWWF = instantObj.noOfShirtWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Jeans number for W_W&F by 1
		function countJeansWwfMinus() {
			if(instantObj.noOfJeansWWF > 0) {
				instantObj.noOfJeansWWF = instantObj.noOfJeansWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Jeans number for W_W&F by 1
		function countJeansWwfPlus() {
			instantObj.noOfJeansWWF = instantObj.noOfJeansWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Trouser number for W_W&F by 1
		function countTrouserWwfMinus() {
			if(instantObj.noOfTrouserWWF > 0) {
				instantObj.noOfTrouserWWF = instantObj.noOfTrouserWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Trouser number for W_W&F by 1
		function countTrouserWwfPlus() {
			instantObj.noOfTrouserWWF = instantObj.noOfTrouserWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Saree number for W_W&F by 1
		function countSareeWwfMinus() {
			if(instantObj.noOfSareeWWF > 0) {
				instantObj.noOfSareeWWF = instantObj.noOfSareeWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Saree number for W_W&F by 1
		function countSareeWwfPlus() {
			instantObj.noOfSareeWWF = instantObj.noOfSareeWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Suits & Blazer number for W_W&F by 1
		function countSuitsBlazerWwfMinus() {
			if(instantObj.noOfSuitsBlazerWWF > 0) {
				instantObj.noOfSuitsBlazerWWF = instantObj.noOfSuitsBlazerWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Suits & Blazer number for W_W&F by 1
		function countSuitsBlazerWwfPlus() {
			instantObj.noOfSuitsBlazerWWF = instantObj.noOfSuitsBlazerWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Salwar & Kurta number for W_W&F by 1
		function countSalwarKurtaWwfMinus() {
			if(instantObj.noOfSalwarKurtaWWF > 0) {
				instantObj.noOfSalwarKurtaWWF = instantObj.noOfSalwarKurtaWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Salwar & Kurta number for W_W&F by 1
		function countSalwarKurtaWwfPlus() {
			instantObj.noOfSalwarKurtaWWF = instantObj.noOfSalwarKurtaWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Cargos Short & Pyjama number for W_W&F by 1
		function countCargosShortPyjamaWwfMinus() {
			if(instantObj.noOfCargosShortPyjamaWWF > 0) {
				instantObj.noOfCargosShortPyjamaWWF = instantObj.noOfCargosShortPyjamaWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Cargos Short & Pyjama number for W_W&F by 1
		function countCargosShortPyjamaWwfPlus() {
			instantObj.noOfCargosShortPyjamaWWF = instantObj.noOfCargosShortPyjamaWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Sweatshirt & Jacket number for W_W&F by 1
		function countSweatshirtrJacketWwfMinus() {
			if(instantObj.noOfSweatshirtJacketWWF > 0) {
				instantObj.noOfSweatshirtJacketWWF = instantObj.noOfSweatshirtJacketWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Sweatshirt & Jacket number for W_W&F by 1
		function countSweatshirtrJacketWwfPlus() {
			instantObj.noOfSweatshirtJacketWWF = instantObj.noOfSweatshirtJacketWWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Inner Wear number for W_W&F by 1
		function countInnerWearWwfMinus() {
			if(instantObj.noOfInnerWearWWF > 0){
				instantObj.noOfInnerWearWWF = instantObj.noOfInnerWearWWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Inner Wear number for W_W&F by 1
		function countInnerWearWwfPlus() {
				instantObj.noOfInnerWearWWF = instantObj.noOfInnerWearWWF + 1;
				countTotalBill();
		}
		
		//This function subtracts Kids dress number for K_W&F by 1
		function countKdressKwfMinus() {
			if(instantObj.noOfKdressKWF > 0) {
				instantObj.noOfKdressKWF = instantObj.noOfKdressKWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Kids dress number for K_W&F by 1
		function countKdressKwfPlus() {
			instantObj.noOfKdressKWF = instantObj.noOfKdressKWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Light Cover number for H_W&F by 1
		function countLcoverHwfMinus() {
			if(instantObj.noOfLcoverHWF > 0) {
				instantObj.noOfLcoverHWF = instantObj.noOfLcoverHWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Light Cover number for H_W&F by 1
		function countLcoverHwfPlus() {
			instantObj.noOfLcoverHWF = instantObj.noOfLcoverHWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Heavy Cover number for H_W&F by 1
		function countHcoverHwfMinus() {
			if(instantObj.noOfHcoverHWF > 0) {
				instantObj.noOfHcoverHWF = instantObj.noOfHcoverHWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Heavy Cover number for H_W&F by 1
		function countHcoverHwfPlus() {
			instantObj.noOfHcoverHWF = instantObj.noOfHcoverHWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Towel number for H_W&F by 1
		function countTowelHwfMinus() {
			if(instantObj.noOfTowelHWF > 0) {
				instantObj.noOfTowelHWF = instantObj.noOfTowelHWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Towel number for H_W&F by 1
		function countTowelHwfPlus() {
			instantObj.noOfTowelHWF = instantObj.noOfTowelHWF + 1;
			countTotalBill();
		}
		
		
		//This function subtracts Hand Towel number for H_W&F by 1
		function countHandTowelHwfMinus() {
			if(instantObj.noOfHandTowelHWF > 0) {
				instantObj.noOfHandTowelHWF = instantObj.noOfHandTowelHWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Hand Towel number for H_W&F by 1
		function countHandTowelHwfPlus() {
			instantObj.noOfHandTowelHWF = instantObj.noOfHandTowelHWF + 1;
			countTotalBill();
		}
		
		//This function subtracts Carpet number per sqr for H_W&F by 1
		function countCarpetHwfMinus() {
			if(instantObj.noOfCarpetHWF > 0) {
				instantObj.noOfCarpetHWF = instantObj.noOfCarpetHWF - 1;
				countTotalBill();
			}
		}
		
		//This function adds Carpet number per sqr for H_W&F by 1
		function countCarpetHwfPlus() {
			instantObj.noOfCarpetHWF = instantObj.noOfCarpetHWF + 1;
			countTotalBill();
		}
		
		//proceed order
		instantObj.orderDetailsObj.customerDTO = {
				'customerName': null,
				'customerPhone': null,
				'customerCity': null,
				'customerPin': null,
				'customerLandmark': null,
				'customerAddress': null
		};
		function saveOrderDetails(formData) {
			if(!formData.$pristine && formData.$dirty) {
				instantObj.dataCopyServiceObj = angular.copy(instantObj.orderDetailsObj);
				saveDetails(instantObj.dataCopyServiceObj).then(function (response) {
	                    //instantObj.orderDetailsObj = response.data;
	                    if(response.data === "") {
	                    	instantObj.serverMsg = 'Your order is already in active state. Please give another contact number to activate order';
	                    } else {
	                    	instantObj.serverMsg = 'Order placed successfully';
	                    	instantObj.orderDetailsObj = null;
	                    }
	            }); 
	            formData.$setUntouched();
	            formData.$setPristine();
			}
		}
		
		function saveDetails(detailsObj) {
	        var response = $http({
	        	 method: 'PUT',
	        	 url: 'rest/laundryfit/instant_order/save',
	        	 data: detailsObj
	        	});
	        return response;
		};
		
	}
	
})();