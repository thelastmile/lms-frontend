describe('ViewStudentsController test =>', function() {

	var ViewStudentsControllerObj, $controller, StudentInfoService;

	beforeEach(function() {
		module('naut');

		inject(function( _$controller_, _$rootScope_, _StudentInfoService_ ){
			$controller = _$controller_;
			$rootScope = _$rootScope_;
			StudentInfoService = _StudentInfoService_;

		});
	});

	it("gets the students information", function(){
		var $rootScope = {};
		var controller = $controller("ViewStudentsController", { $rootScope : $rootScope })
		expect(StudentInfoService.get).toHaveBeenCalled();
	});
});