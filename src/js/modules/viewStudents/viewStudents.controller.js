/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ViewStudentsController', ViewStudentsController);
    
    ViewStudentsController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window','StudentInfoService', 'toasty' ,'customUrl'];
    function ViewStudentsController($rootScope, $scope, colors, flotOptions, $timeout, $window, StudentInfoService, toasty, customUrl) {
      var vm = this;
      StudentInfoService.get().success(function(data){
        $scope.students = data;
      });

      vm.recordTechnicalScore = function (student) {
        toasty.success({
          title: 'Technical Score Recorded',
          msg: 'The record has been saved.',
          sound: false,
          clickToClose: true
        });
      }

      vm.recordSocialScore = function (student) {
        toasty.success({
          title: 'Social Score Recorded',
          msg: 'The record has been saved.',
          sound: false,
          clickToClose: true
        });
      }

        vm.recordParticipationScore = function (student) {
        toasty.success({
          title: 'Participation Score Recorded',
          msg: 'The record has been saved.',
          sound: false,
          clickToClose: true
        });
      }

      vm.recordAbsentPart = function (student) {
        toasty.success({
          title: 'Attendance Recorded',
          msg: 'The attendance record has been saved.',
          sound: false,
          clickToClose: true
        });
      }

      vm.recordAbsentFull = function (student) {
        toasty.success({
          title: 'Attendance Recorded',
          msg: 'The attendance record has been saved.',
          sound: false,
          clickToClose: true
        });
      }

      $scope.isAdmin = function(){
        if ($window.sessionStorage.getItem("userPermissions")=='admin'){
          return true;
        } else {
          return false;
        }
      }

      vm.attendanceDataUrl = 'http://127.0.0.1:8000/api/attendancegraphdaily';

      vm.toggleDatepicker = function ($event, student) {
        console.log('toggled');
      }

      var dateObject = new Date();

      vm.today = dateObject.toDateString();

    }
})();
