// Suite
describe('testing the CoreController', function() {
	var $controller, scope;

	// beforeEach(function(){	
	// 	// load app module
	// 	module('naut');
	// 	// inject controller were testing
	// 	inject(function(_$controller_) {
	// 		$controller = _$controller_;
	// 	});
	// });

	beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			CoreController = $controller('CoreController', {
				$scope: scope
			});
		}));

	it('am i crazy', function() {
		var check = true;
		expect(check).toEqual(true);
	});

	/*
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
	*/

});