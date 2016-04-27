"use strict";

var app = angular.module('paceMeApp');


app.controller('registerCtrl', function($scope, $state, AuthService, Upload, $timeout){


	$scope.person = {};


	// $scope.enteringCode = false;
	$scope.sendText = function(number) {
		console.log('number', number);
		// console.log('number', $scope.test);
		$scope.enteringCode = true;
		AuthService.sendVerifyText(number)
	}


	$scope.verifyPhone = function(code) {
		AuthService.verifyNumber(code)
		$state.go('register.person')
	}

    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };


    $scope.upload = function (file) {
        Upload.upload({
            url: 'auth/upload',
            data: {file: file, 'username': $scope.username}
        }).then(function (res) {
            console.log('Success ' + res.config.data.file.name + 'uploaded. Response: ' + res.data);
        }, function (err) {
            console.log('Error status: ' + err.status);
        });
    };






	$scope.getUser = function() {
		$scope.person.email = $scope.user.email;
		$scope.person.firstName = $scope.user.givenName;
		$scope.person.lastName = $scope.user.surname;
		console.log('$scope.person', $scope.person);
	}

});
