var app=angular.module('app', ['app.modules.reachUs','kmApp.libraries.waitLoader']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.	
				when('/reachUs', {
					templateUrl: 'Partials/reachUs.html',
					controller :'app.modules.reachUs.asn'
					}).			
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

		
		
