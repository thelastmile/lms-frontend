/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window'];
    function DashboardController($rootScope, $scope, colors, flotOptions, $timeout, $window) {
      var vm = this;

      $scope.renderCalendar = function() {
       $timeout(function(){
            $('.calendar').fullCalendar('render');
            $('.calendar').fullCalendar('rerenderEvents');
        }, 0);
};

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
