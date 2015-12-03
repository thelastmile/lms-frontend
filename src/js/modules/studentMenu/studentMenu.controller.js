/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentMenuController', StudentMenuController);
    
    StudentMenuController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService','StudentCurrentModule', 'StudentCurrentCourse'];
    function StudentMenuController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, StudentCurrentModule, StudentCurrentCourse) {
      var smc = this;

      StudentMenuService.get().success(function(data){
        $rootScope.moduleContent = data;
      });

      $rootScope.currentModule = false;
      // smc.currentModule = StudentCurrentModule.get().success(function(data){
      //   $rootScope.currentModule = data;
      // });

      // smc.currentCourse = StudentCurrentCourse.get().success(function(data){
      //   $rootScope.currentCourse = data;
      // });

      smc.currentModule = 0;
      smc.setCurrentModule = function(){
        $rootScope.currentModule = smc.currentModule;
      }

      smc.viewModule = function(){
        vm.lesson = {};
        vm.selectedLesson = {}
        vm.LFILEediting = false;
      }

    }
})();
