// Suite
describe('testing the CoreController', function() {
	var $controller, scope;

	beforeEach(function(){	
		// load app module
		module('naut');
		// inject controller
		inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			CoreController = $controller('CoreController', {
				$scope: scope
			});
		});
	});


	it('am i crazy', function() {
		var check = true;
		expect(check).toEqual(true);
	});

});