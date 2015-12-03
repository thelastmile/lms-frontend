/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentMenuController', StudentMenuController);
    
    StudentMenuController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService','StudentGetModuleContents'];
    function StudentMenuController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, StudentGetModuleContents) {
      var smc = this;

      StudentMenuService.get().success(function(data){
        $rootScope.moduleMenuContent = data;
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
        StudentGetModuleContents.get_single($rootScope.currentModule).success(function(data){
          $rootScope.moduleContent = data;
        });
      }

      smc.viewModule = function(){
        vm.lesson = {};
        vm.selectedLesson = {}
        vm.LFILEediting = false;
      }

    }
})();
