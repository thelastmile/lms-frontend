describe('ViewStudentService test =>', function() {

  var StudentInfoServiceObj, $httpBackend;

  beforeEach(module('naut'));


  beforeEach(module('naut', function ($provide, $translateProvider) {

    $provide.factory('customLoader', function () {
      // loader logic goes here
    });

    $translateProvider.useLoader('customLoader');

  }));

  beforeEach(inject(function(_$httpBackend_, StudentInfoService){
    $scope = {};
    $httpBackend = _$httpBackend_;
    StudentInfoServiceObj = StudentInfoService;
  }));

  it('defines StudentInfoServiceObj:', function() {
    console.log(StudentInfoServiceObj);
    expect(StudentInfoServiceObj).toBeDefined();
  });

  it('defines StudentInfoServiceObj post method', function() {
    expect(StudentInfoServiceObj.post).toBeDefined();
  });

  xit('checks for a POST call', function() {
    var data = {name:'foo_user'};
    $httpBackend.expectPOST('/api/users/', data).respond(201, 'success');
    StudentInfoServiceObj.post(data);
    $httpBackend.flush();
  });

  it('tests for a GET to /api/users/ : ', function() {
    $httpBackend.expectGET('/api/users/')
    StudentInfoServiceObj.get('/api/users/');
    $httpBackend.flush();
  });

});

