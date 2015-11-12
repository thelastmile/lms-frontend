describe('StudentInfoService => ', function() {

	var StudentInfoServiceObj, $httpBackend, $rootScope;
	// load modules
	beforeEach(function() { module('naut') });
	// inject service dependencies
	beforeEach(inject(function(StudentInfoService, $injector, _$controller_) {
		StudentInfoServiceObj = StudentInfoService;
		$httpBackend = $injector.get('$httpBackend');
		$rootScope = $injector.get('$rootScope');
	}));

	afterEach(function() {
	     $httpBackend.verifyNoOutstandingExpectation();
	     $httpBackend.verifyNoOutstandingRequest();
	});

	// it('should call a POST to a given url with some data:', function() {
	// 	var data = {'data':'data'};
	// 	authRequestHandler = $httpBackend.when('GET','/api/users/').respond('...success')
	// 	$httpBackend.expectGET('/api/users/');
	// 	$httpBackend.flush();
	// });


	it('should call a GET:', function() {
		$httpBackend.expectGET('/api/users/');
		$httpBackend.flush();
		expect(StudentInfoService.get)
	});

	// it('should call a GET to a given url with pk data:', function() {
	// 	var student = 1;
	// 	students.get(student);
	// 	expect(students.get).toHaveBeenCalledWith(student);
	// });

});