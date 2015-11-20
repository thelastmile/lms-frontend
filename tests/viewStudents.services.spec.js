describe('ViewStudentService test =>', function() {

  var StudentInfoServiceObj, $httpBackend;

  // remove the angular-translate implicit XHR call by overriding.
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

  beforeEach(inject(function($injector, StudentInfoService){
    $scope = {};
    $httpBackend = $injector.get('$httpBackend');
    StudentInfoServiceObj = StudentInfoService;
  }));

  it('defines StudentInfoServiceObj:', function() {
    expect(StudentInfoServiceObj).toBeDefined();
  });

  it('defines StudentInfoServiceObj post method', function() {
    expect(StudentInfoServiceObj.post).toBeDefined();
  });

  it('defines StudentInfoServiceObj post method', function() {
    expect(typeof StudentInfoServiceObj.post).toBe('function');
  });

  it('checks for a POST call', function() {
    var data = {'user':'test_user'}
    $httpBackend.expectPOST('http://127.0.0.1:8000/api/users/', data).respond(201, 'success');
    StudentInfoServiceObj.post(data);
    $httpBackend.flush();
  });

  it('tests for a GET to /api/users/ : ', function() {
    $httpBackend.expectGET('http://127.0.0.1:8000/api/users/').respond({});
    StudentInfoServiceObj.get('/api/users/');
    $httpBackend.flush();
  });

  it('tests for a GET to /api/users/ with a pk:', function() {
    $httpBackend.expectGET('http://127.0.0.1:8000/api/users/1/').respond({});
    StudentInfoServiceObj.get_single(1)
    $httpBackend.flush();
  });
});

