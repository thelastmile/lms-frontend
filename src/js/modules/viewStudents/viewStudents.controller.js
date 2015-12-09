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
        console.log(data);
      });

      $scope.isAdmin = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='admin'){
          return true;
        } else {
          return false;
        }
      }

      // Some numbers for demo
      vm.loadProgressValues = function() {
        vm.progressVal = [0,0,0,0];
        // helps to show animation when values change
        $timeout(function(){
          vm.progressVal[0] = 60;
          vm.progressVal[1] = 34;
          vm.progressVal[2] = 22;
          vm.progressVal[3] = 76;
        });
      };

      vm.defaultDate = new Date();
      vm.toggleDatepicker = function ($event, obj) {
        $event.preventDefault();
        $event.stopPropagation();
        obj.datepickerOpen = !obj.datepickerOpen;
      }

    }
})();
