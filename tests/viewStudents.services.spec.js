describe('Test StudentInfoService: ', function() {
	var customUrl, $http;
	// load modules
	beforeEach(function() {
		module('naut');
		module(function($provide) {
			$provide.service('$http', function() {
				var students = {};
				students.post = jasmine.createSpy('post');
				students.get = jasmine.createSpy('get');
				students.get_single = jasmine.createSpy('get_single');
				return students;
			});
			$provide.service('customUrl', function(){
				this.url = jasmine.createSpy('url');
			});
		});
		module('StudentInfoService');
	});
	// inject service dependencies
	beforeEach(inject(function($http, customUrl) {
		mockCustomUrl = customUrl;
		mockhttp = $http;
	}));

	it('should call a POST to a given url with some data:', function() {
		var data = {'data':'data'};
		students.post(data);
		expect(students.post).toHaveBeenCalledWith(data);
	});

	it('should call a GET to a given url:', function() {
		students.get();
		expect(students.get).toHaveBeenCalled();
	});

	it('should call a GET to a given url with pk data:', function() {
		var student = 1;
		students.get(student);
		expect(students.get).toHaveBeenCalledWith(student);
	});

});