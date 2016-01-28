/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ViewStudentsController', ViewStudentsController);
    
    ViewStudentsController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window','StudentInfoService', 'toasty' ,'customUrl', 'AttendanceService'];
    function ViewStudentsController($rootScope, $scope, colors, flotOptions, $timeout, $window, StudentInfoService, toasty, customUrl, AttendanceService) {
      var vm = this;

      vm.score_options_participation = [{val:1,label:'1 - Participation'},{val:2,label:'2 - Participation'},{val:3,label:'3 - Participation'},{val:4,label:'4 - Participation'},{val:5,label:'5 - Participation'}]; //used for rating of students
      vm.score_options_social = [{val:1,label:'1 - Participation'},{val:2,label:'2 - Participation'},{val:3,label:'3 - Participation'},{val:4,label:'4 - Participation'},{val:5,label:'5 - Participation'}]; //used for rating of students
      vm.score_options_tech = [{val:1,label:'1 - Participation'},{val:2,label:'2 - Participation'},{val:3,label:'3 - Participation'},{val:4,label:'4 - Participation'},{val:5,label:'5 - Participation'}]; //used for rating of students

      StudentInfoService.get().success(function(data){
        $scope.students = data;
      });

      vm.recordTechnicalScore = function (student) {
        console.log(student);
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

      vm.recordAttendance = function (student,current_attendance) {
        AttendanceService.put(student,current_attendance).success(function(data){
          toasty.success({
            title: 'Attendance Recorded',
            msg: 'The attendance record has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Attendance Recorded',
            msg: 'The attendance record not recorded.',
            sound: false,
            clickToClose: true
          });
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
