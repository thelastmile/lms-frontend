// Suite
describe('testing the CoreController', function() {
	var $controller, scope;

	beforeEach(function(){	
		// load app module
		module('naut');
		// inject controller
		inject(function (_$controller_, $rootScope) {
			scope = $rootScope;
			$controller = _$controller_;
		});
	});

	describe('$rootScope.pageTitle function', function() {
	    it('sets the application name and description', function() {
            var $rootScope = {};
            var controller = $controller('CoreController', { $rootScope : $rootScope });
            // setting up values for function
            $rootScope.app = {name:'foo_app', description:'foo_description'}; 
            $rootScope.pageTitle();
            expect($rootScope.pageTitle()).toEqual('foo_app - foo_description');
        });

	

    });


});