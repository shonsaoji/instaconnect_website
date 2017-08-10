var app = angular.module('instaConnect', []);
app.controller('homeController', function($scope, $log) {
	var $ = angular.element
	baseUrl = 'https://growth-web.herokuapp.com/';
	// baseUrl = 'http://192.168.2.12:3000/';
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
			window.location.href = baseUrl+'authentication/signup';
		} else if(Url == 'code') {
			window.location.href = baseUrl+'enterCode';
		}
	}
})