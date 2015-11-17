describe('ViewStudentsController test =>', function() {

	var ViewStudentsControllerObj, $controller, controller, scope, $rootScope, StudentInfoServiceObj;


	beforeEach(function() {
		module('naut');

		inject(function( $controller, $scope, StudentInfoService ){
			scope = $rootScope.$new();
			StudentInfoServiceObj = _StudentInfoService_;
			ViewStudentsControllerObj = $controller("ViewStudentsController", { 
				$scope : scope,
				StudentInfoService : StudentInfoServiceObj
			 });

		});
	});

	it("gets the students information", function(){
		expect(ViewStudentsControllerObj).toBeDefined();
	});
});