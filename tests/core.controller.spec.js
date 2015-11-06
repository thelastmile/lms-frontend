// Suite
describe('testing the CoreController: ', function() {
	var $controller, scope, UserService;
	// setup for each spec
	beforeEach(function() {	
		// load app module and any services
		module('naut');
		module(function($provide) {
			$provide.service('UserService', function() {
				this.logout = jasmine.createSpy('logout')
			});
		});
		// inject services
		inject(function (_$controller_, _$rootScope_, _UserService_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			UserService = _UserService_;
		});
	});
	// specs for the 3 functions
    it('sets the application name and description', function() {
    	var $rootScope = {};
        var controller = $controller('CoreController', { $rootScope : $rootScope });
        // setting up values for function
        $rootScope.app = {name:'foo_app', description:'foo_description'}; 
        $rootScope.pageTitle();
        expect($rootScope.pageTitle()).toEqual('foo_app - foo_description');
    });

	it('$rootScope.cancel - runs two methods.', function(done) {
		var $rootScope = {};
		var mockEvent = {
			preventDefault: jasmine.createSpy('preventDefault'),
			stopPropagation: jasmine.createSpy('stopPropagation'),
		}
		var controller = $controller('CoreController', { $rootScope : $rootScope });
		// setting up values for function
		$rootScope.cancel(mockEvent);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
		expect(mockEvent.stopPropagation).toHaveBeenCalled();
		done();
	});

	it('$rootScope.logout - function that logs out of UserService', function() {
		var controller = $controller('CoreController', { $rootScope : $rootScope });
		// function we are testing
		$rootScope.logout();
		expect(UserService.logout).toHaveBeenCalled();
	});

});