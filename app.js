(function () {
	'use strict';

	angular.module('myLunch', [])
	  .controller('LunchCheckController', LunchCheckController)

	LunchCheckController.$inject = ['$scope']  

	function LunchCheckController($scope) {
      $scope.items = "";
      $scope.message = "";
      $scope.colorClass = "";
      $scope.borderColor = "";
      $scope.extraMessage = "";

      $scope.checkLaunch = function () {
      	if ($scope.items == "") {
          $scope.message = "Please enter data first";
          $scope.colorClass = "red";
          $scope.borderColor = "bred";
          $scope.extraMessage = "";

      	} else {
      	  var itemArray = $scope.items.split(',');	
      	  var itemLength = itemArray.length;
      	  var flag = checkEmpty(itemArray);

      	  if (flag) {
      	  	$scope.extraMessage = "', ,' as an item towards to the count";
      	  } else {
      	  	$scope.extraMessage = "";
      	  }
      	  
          $scope.colorClass = "green";
          $scope.borderColor = "bgreen";

      	  if (itemLength > 3) {
      	  	$scope.message = "Too much!";
      	  } else if (itemLength >= 1 && itemLength <= 3) {
            $scope.message = "Enjoy!";
      	  }
      	  
      	}
      }
	}

	function checkEmpty(arr) {
      for(var i=0; i<arr.length; i++) {
        if(arr[i] === "" || arr[i] === " ") return true;
      }
      return false;
    }
})();
