describe('CoreConfig Module => ', function() {

	beforeEach(module('naut'));

	// remove the angular-translate implicit XHR call by overriding.
	beforeEach(module('naut', function($provide, $translateProvider) {
	  $provide.factory('customLoader', function ($q) {
	      return function () {
	        var deferred = $q.defer();
	        deferred.resolve({});
	        return deferred.promise;
	      };
	    });
	   
	    $translateProvider.useLoader('customLoader');
	}));

	beforeEach(inject(function($injector){
		$rootScope = $injector.get('$rootScope');
		$state = $injector.get('$state');
		$templateCache = $injector.get('$templateCache');
		$http = $injector.get('$http')
		UserService = $injector.get('UserService');
	}));

	it('checks $rootScope', function() {
		expect($rootScope).toBeDefined();
	});

	it('checks $rootScope.$on', function() {
		expect($rootScope.$on).toBeDefined();
	});

	// it('checks $stateChangeStart', function() {
	// 	expect($stateChangeStart).toBeDefined();	
	// })

	// it('checks if toState.authenticate is defined', function() {
	// 	expect(toState.authenticate).toBeDefined();
	// });

});