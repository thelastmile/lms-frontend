describe('ViewStudentsController test =>', function() {

	var ViewStudentsControllerObj, $httpBackend;

	beforeEach(module('naut'));

	beforeEach(inject(function(_$controller_, $injector) {
		$controller = _$controller_;
		$httpBackend = $injector.get('$httpBackend');
	}));
});