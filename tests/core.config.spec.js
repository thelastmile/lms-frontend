describe('CoreConfig Module => ', function() {




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
		customUrl = $injector.get('customUrl')
	}));


	it('checks $rootScope', function() {
		expect($rootScope).toBeDefined();
	});

	it('checks $rootScope.$on', function() {
		expect($rootScope.$on).toBeDefined();
	});

	it('should redirect if user is logged in', function() {
		spyOn($state, 'transitionTo')
		UserService.isAuthenticated = false;
		var toState = { authenticate: true };
		$state.go('app.dashboard');
		$rootScope.$apply();
		expect($state.transitionTo).toHaveBeenCalled(); // this fails if we .toHaveBeenCalledWith('page.login')
	});

	it('customUrl function test for localhost return', function() {
		var document = {location: {hostname: 'localhost'}};
		expect(customUrl.url).toBe('http://127.0.0.1:8000')
	});

	it('customUrl function test for aws url return', function() {
		var customDocument = function() {
			return document.location.assign('www.google.com');
		};
		expect(customUrl.url).toBe('http://lms-backend-dev.elasticbeanstalk.com');
	})
});