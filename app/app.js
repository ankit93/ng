var app=angular.module('app', ['app.modules.reachUs']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.	
				when('/reachUs', {
					templateUrl: 'Partials/reachUs.html',
					controller :'app.modules.reachUs.asn'
					}).
				when('/login').
							
                when('/ourServices', {templateUrl: 'Partials/ourservices.html'}).  
				when('/ourPortfolio', {templateUrl: 'Partials/Portfolio.html'}).
				when('/whyOutsourceToUs', {templateUrl: 'Partials/whyOutsourceToUs.html'}).
				when('/theCompany', {templateUrl: 'Partials/theCompany.html'}).
				when('/testimonial', {templateUrl: 'Partials/testimonial.html'}).
				
				when('/outsourceToIndia', {templateUrl: 'Partials/outSourceIndia.html'}).
				when('/whyOutsourceToUs', {templateUrl: 'Partials/WhyOutSourceToUs.html'}).
				when('/theCompany', {templateUrl: 'Partials/theCompany.html'}).
				when('/offshoreDevelopment', {templateUrl: 'Partials/offshoreDevelopment.html'}).
				when('/solutionsTechnologies', {templateUrl: 'Partials/solutionsTechnologies.html'}).	
				when('/webDesign', {templateUrl: 'Partials/webDesign.html'}).
				when('/webDevelopment', {templateUrl: 'Partials/webDevelopment.html'}).
				when('/brandingIdentity', {templateUrl: 'Partials/brandingIdentity.html'}).
                when('/yahooStoreDesign', {templateUrl: 'Partials/yahooStore.html'}).
				when('/ecommerceSolution', {templateUrl: 'Partials/ecommerceSolution.html'}).
				when('/getAll', {templateUrl: 'Partials/test.html'}).
				when('/reguser', {templateUrl: 'Partials/reguser.html'}).
				when('/edit', {templateUrl: 'Partials/edit.html'}).
                otherwise({redirectTo: '/home'});
}]);

 //check isLoggedIn
 app.controller('app.controller.rootLayout', ['$rootScope','$window','$location',
    function ($rootScope,$window,$location) {
		
     $rootScope.isLoggedIn = function () {
        return (localStorage.getItem("Session.UserData") !==null);
      };
	
	}]);

app.controller('app.modules.login', ['$rootScope','$window','$location','$scope',
    function ($rootScope,$window,$location,$scope) {
		var ssw=''//{a:'asda'};
		  $scope.setCredentials = function (params) {
		//Jquey its used here because AngularJs have a bug
		//Form model not updating on non-keyboard changes to input fields
		//https://github.com/angular/angular.js/issues/1460
      alert('in');
		var email = $("#loginFrm [name=loginEmail]").val();
		var pw = $("#loginFrm [name=loginPw]").val();
		//store in localStorage for later processing
		var credentials = {
			email: email,
			pw: pw
		};
		localStorage.setItem("Session.Login", JSON.stringify(credentials));
	 }
	 
		// $window.localStorage.setItem('Session.UserData',JSON.stringify(ssw));
		 
		 var loginData=JSON.parse($window.localStorage.getItem('Session.UserData'));
		 
		  $rootScope.$on('$routeChangeStart', function (event, next) {
	         if(loginData===null) {
			       $location.path("/login");
		       }
	       });
    }
]);


 


