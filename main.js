require.config({
	paths: {
		/* core */
		rANGULAR: 'libraries/core/angular/angular.min',
		rANGULARRESOURCE: 'libraries/core/angular/angular-resource-1.0.0',
		rJQUERY: 'libraries/core/jQuery/jquery.min',
		rANGULAR_ONREADY: 'libraries/core/angular/angularOnReady',
		rANGULAR_SANITIZE: 'libraries/core/angular/angular-sanitize.min',

		/* 3rd party */
		rAPP: 'App/App',
		
		/* modules */
	
		rMODULES_ReachUs: 'modules/reachUs/reachUs',
        rLIBRARIES_WAITLOADER: 'libraries/waitLoader',

		/* libraries */
	
		
		/* services */
		//rSERVICES_GLOBAL: 'services/globalServices',

		/* directives */
		//rDIRECTIVES_GLOBAL: 'directives/globalDirectives',
		//rCLIENT_DIRECTIVES: 'directives/clientDirectives',

		/* filters */
		//rFILTERS_GLOBAL: 'filters/globalFilters'
	},
	shim: {
		/* phase 1 - jquery dependencies */
		'rJQUERYUI': ['rJQUERY'],

		/* phase 2a - jqueryui dependencies */

		/* phase 2b - rchart dependencies */

		/* phase 3 - angular dependencies */
		'rANGULARRESOURCE': ['rANGULAR'],
		'rANGULAR_ONREADY': ['rANGULAR'],
		'rANGULAR_SANITIZE': ['rANGULAR'],
		

		/* phase 4 - kmapp */
		'rAPP': [ 'rANGULARRESOURCE', 'rANGULAR', 'rANGULAR_ONREADY', 'rANGULAR_SANITIZE', ],


		/* phase 5 - kmapp dependencies */
		'rMODULES_ReachUs' :['rAPP'],
		'rLIBRARIES_WAITLOADER': ['rAPP'],
		//'rMODULES_PASSBOOK': ['rKMAPP'],
        
		/* phase 6 - lessCSS */
	},
	waitSeconds: 0
});

require([
/* core and 3rd party */
	'rJQUERY',
	'rANGULAR',
	'rANGULARRESOURCE',
	'rANGULAR_SANITIZE',
	'rAPP',
	'rANGULAR_ONREADY',

	/* global angular services */
	//'rSERVICES_GLOBAL',

	/* global angular directives */
	//'rDIRECTIVES_GLOBAL',
    //'rCLIENT_DIRECTIVES',

	/* global angular filters */
	//'rFILTERS_GLOBAL',

	/* global angular libraries */
      'rLIBRARIES_WAITLOADER',
    
/* angular modules */

	'rMODULES_ReachUs'
	],


//init (loaded) func
	function () {
		//bootstrap angularjs
	    angular.element(document).ready(function () {
			angular.bootstrap(document, ['app']);

			//occurs when angular is fully loaded

	    });
	}
);
