describe('ViewStudentService test =>', function() {

  var StudentInfoServiceObj, $httpBackend;

  beforeEach(module('naut'));

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

  xit('checks for a POST call', function() {
    var data = {'user':'test_user'}
    $httpBackend.expectPOST('', data).respond(201, 'success');
    StudentInfoServiceObj.post(data);
    $httpBackend.flush();
  });

  it('tests for a GET to /api/users/ : ', function() {
    $httpBackend.expectGET('').respond({});
    $httpBackend.flush();
    StudentInfoServiceObj.get('/api/users/');
  });

  it('tests for a GET to /api/users/ with a pk:', function() {
    $httpBackend.expectGET('/api/users/1/').respond({});
    $httpBackend.flush();
    StudentInfoServiceObj.get('/api/users/1/')
  });
});

