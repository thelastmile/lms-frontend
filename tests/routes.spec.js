describe('testing specs for TLM routes', function() {
	var $rootScope, $state, $injector, state = 'app';

	beforeEach(module('naut'));
	
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

	beforeEach(function() {

		inject(function (_$rootScope_, _$state_, _$injector_, $templateCache) {
			$rootScope = _$rootScope_;
			$state = _$state_;
			$injector = _$injector_;
			$templateCache.put('app.html');
		})

	});

	it('should respond to the URL', function() {
		expect($state.href(state)).toEqual('#/app')
	});

	// it('should activate the state', function() {
	// 	console.log("state name below");
	// 	console.log($state.current.name);
	// 	$state.go(state);
	// 	$rootScope.$apply();
	// 	expect($state.current.name).toBe(state);
	// })

	it('should activate the state', function() {
		console.log("Andy's test");
		$state.go(state);
		$rootScope.$apply();
		console.log("state name below");
		console.log($state.current.name);
		expect($state.current.name).toBe(state);
	});

	// it('should activate the state', function() {
	// 	var homeState = state.states[state];
	// 	expect(homeState).toBeDefined();
	// 	expect(homeRoute.controller).toEqual('')
	


});



