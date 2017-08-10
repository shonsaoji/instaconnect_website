var app = angular.module('instaConnect', []);
app.controller('homeController', function($scope, $log) {
	var $ = angular.element
	baseUrl = 'https://growth-web.herokuapp.com/';
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

	$scope.gotoLogin = function () {
		window.location.href = baseUrl+'authentication/signin';
	}
})