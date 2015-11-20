describe('testing DashboardController', function() {
  beforeEach(module('naut'));

  var $controller, $window, $scope;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$window_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $window = _$window_;
    // setting $scope as new $rootscope to mock $scope.$watch
    $scope = _$rootScope_.$new();
    dashController = $controller('DashboardController', {$scope: $scope});
    $scope.DashboardController = dashController;

    // mocking sessionStorage via callFake
    var store = {};
    spyOn(sessionStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(sessionStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value + '';
    });
    spyOn(localStorage, 'clear').and.callFake(function () {
        store = {};
    });

  }));

  // Nested describe to test admin auth status
  describe('$scope.isAdmin', function() {
    it('if admin in sessionStorage return true', function() {
      $window.sessionStorage.setItem('userPermissions', 'admin');
      expect($scope.isAdmin()).toBe(true);
    });

    it('if admin in sessionStorage return false', function() {
      $window.sessionStorage.setItem('userPermissions');
      expect($scope.isAdmin()).toBe(false);
    });

  });
});
