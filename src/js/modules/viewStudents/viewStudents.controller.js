/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ViewStudentsController', ViewStudentsController);
    
    ViewStudentsController.$inject = ['$rootScope', '$scope', 'colors', 'flotOptions', '$timeout' ,'$window','StudentInfoService', 'toasty' ,'customUrl', 'AttendanceService', 'StatusService', 'notes'];
    function ViewStudentsController($rootScope, $scope, colors, flotOptions, $timeout, $window, StudentInfoService, toasty, customUrl, AttendanceService, StatusService, notes) {
      var vm = this;

      vm.score_options_participation = [{val:1,label:'1 - Participation'},{val:2,label:'2 - Participation'},{val:3,label:'3 - Participation'},{val:4,label:'4 - Participation'},{val:5,label:'5 - Participation'}]; //used for rating of students
      vm.score_options_social = [{val:1,label:'1 - Social'},{val:2,label:'2 - Social'},{val:3,label:'3 - Social'},{val:4,label:'4 - Social'},{val:5,label:'5 - Social'}]; //used for rating of students
      vm.score_options_tech = [{val:1,label:'1 - Tech'},{val:2,label:'2 - Tech'},{val:3,label:'3 - Tech'},{val:4,label:'4 - Tech'},{val:5,label:'5 - Tech'}]; //used for rating of students

      StudentInfoService.get().success(function(data){
        $scope.students = data;
      });

      vm.recordTechnicalScore = function (student) {
        StatusService.put_tech(student,student.tech_score).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'The technical score has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Error',
            msg: 'Technical Score not saved.',
            sound: false,
            clickToClose: true
          });
        });
      }

      vm.recordSocialScore = function (student) {
        StatusService.put_social(student,student.social_score).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'The Social Score has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Error',
            msg: 'The Social Score was not saved.',
            sound: false,
            clickToClose: true
          });
        });
      }

      vm.recordParticipationScore = function (student) {
        StatusService.put_participation(student,student.participation_score).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'The Participation Score has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Error',
            msg: 'The Participation Score was not saved.',
            sound: false,
            clickToClose: true
          });
        });
      }

      vm.recordAttendance = function (student,current_attendance) {
        AttendanceService.put(student,current_attendance).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'The Attendance record has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Error',
            msg: 'The Attendance record was not saved.',
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

      vm.saveNote = function (note,student) {
        notes.create_via_instructor(note,student).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'The Note has been saved.',
            sound: false,
            clickToClose: true
          });
        }).error(function (error){
          console.log('error, not saved');
          toasty.error({
            title: 'Error',
            msg: 'The Note was not saved.',
            sound: false,
            clickToClose: true
          });
        });
      }

      var dateObject = new Date();

      vm.today = dateObject.toDateString();

    }
})();
