/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window', '$stateParams', 'StudentInfoService'];
    function DashboardController($rootScope, $scope, colors, flotOptions, $timeout, $window, $stateParams, StudentInfoService) {
      var vm = this;

      if (typeof $stateParams.selectedStudent != 'undefined'){
        StudentInfoService.get_single($stateParams.selectedStudent).success(function(data){
          $rootScope.selectedStudent = data;
        });
      } else {
        delete $rootScope.selectedStudent;
      }

      $scope.isSuperAdmin = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='superAdmin'){
          return true;
        } else {
          return false;
        }
      }

      $scope.isAdmin = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='faculty'){
          return true;
        } else {
          return false;
        }
      }

      $scope.isStudent = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='student'){
          return true;
        } else {
          return false;
        }
      }
    }
})();
