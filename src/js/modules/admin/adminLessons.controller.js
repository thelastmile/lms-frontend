/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('AdminLessonsController', AdminLessonsController);
    
    AdminLessonsController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'AdminCustomContentType','AdminLessonContents'];
    function AdminLessonsController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, AdminCustomContentType, AdminLessonContents) {
      var vm = this;
      AdminLessonsService.get().success(function(data){
        $scope.lessons = data;
      });

      AdminCoursesService.get().success(function(data){
        $scope.courses = data;
      });

      AdminCustomContentType.get().success(function(data){
        $scope.customcontenttypes = data;
      });

      AdminLessonContents.get().success(function(data){
        $scope.lessoncontents = data;
      });

      vm.LSNsave = function () {
        AdminLessonsService.post(vm.lesson).success(function(data){
          vm.lesson = {};
          toasty.success({
            title: 'Saved',
            msg: 'New Lesson Added',
            sound: false,
            clickToClose: true,
          });
        }).error(function (error){
          toasty.error({
              title: 'Error',
              msg: 'Ensure you added all values',
              sound: false,
              clickToClose: true,
            });
        });

      }

      // If not editing, enables edit mote
      // If editing, saves and disables editing
      vm.LSNediting = false;
      vm.LSNeditSave = function () {
        if (vm.LSNediting) {
          vm.lesson = {};
          vm.LSNediting = false;
          AdminLessonsService.put(vm.selectedLesson).success(function (){
            toasty.success({
              title: 'Saved',
              msg: 'Lesson Updated',
              sound: false,
              clickToClose: true,
            });
          });
        } else {
          vm.LSNediting = true;
        }
      }

      vm.CRSsave = function () {
        AdminCoursesService.post(vm.course).success(function(data){
          vm.course = {};
          toasty.success({
            title: 'Saved',
            msg: 'New Course Added',
            sound: false,
            clickToClose: true,
          });
        }).error(function (error){
          toasty.error({
              title: 'Error',
              msg: 'Ensure you added all values',
              sound: false,
              clickToClose: true,
            });
        });

      }

    }
})();
