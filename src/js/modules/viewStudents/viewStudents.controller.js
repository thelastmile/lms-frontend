/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ViewStudentsController', ViewStudentsController);
    
    ViewStudentsController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window','StudentInfoService'];
    function ViewStudentsController($rootScope, $scope, colors, flotOptions, $timeout, $window, StudentInfoService) {
      var vm = this;
      StudentInfoService.get().success(function(data){
        $scope.students = data;
      });

      $scope.isAdmin = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='admin'){
          return true;
        } else {
          return false;
        }
      }

      vm.attendanceDataUrl = $rootScope.url+'/api/attendancegraphdaily';

    }
})();
