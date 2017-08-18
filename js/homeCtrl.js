var app = angular.module('instaConnect', []);
app.controller('homeController', function($scope, $log) {
	var $ = angular.element
	baseUrl = 'https://instaconnect-restaurant.herokuapp.com/';
	$scope.androidDevice = false;
	$scope.iosDevice = false;
	$scope.desktopDevice = false;

	$scope.checkDeviceType = function () {
		var isAndroid = /Android/i.test(navigator.userAgent);
        var isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent);

        if(isAndroid) {
        	$scope.androidDevice = true;
        } else if(isIos) {
        	$scope.iosDevice = true;
        } else {
        	$scope.desktopDevice = true;
        }

   	}
	$scope.scrollToSection = function (id) {
		var duration;
		if(id == '#howItWork') {
			duration = 1000;
		} else {
			duration = 1800;
		}
		$('html, body').animate({
        	scrollTop: $(id).offset().top
    	}, duration);
	};

	$scope.redirectToApp = function (Url) {
		if(Url == 'login') {
			window.location.href = baseUrl+'authentication/signin';
		} else if(Url == 'signUp'){
			window.location.href = baseUrl;
		} else if(Url == 'code') {
			window.location.href = baseUrl+'enterCode';
		}
	}
})