/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentMenuController', StudentMenuController);
    
    StudentMenuController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService','StudentGetModuleContents','AdminLessonContents'];
    function StudentMenuController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, StudentGetModuleContents, AdminLessonContents) {
      var smc = this;

      StudentMenuService.get().success(function(data){
        $rootScope.moduleMenuContent = data;
        // TODO Add check for browser storage variable
        if (!smc.currentModule){
          smc.currentModule = data[0].id;
          smc.setCurrentModule();
        }
      });

      $rootScope.currentModule = false;

      smc.currentModule = 0;
      smc.setCurrentModule = function(){
        $rootScope.currentModule = smc.currentModule;
        StudentGetModuleContents.get_single($rootScope.currentModule).success(function(data){
          $rootScope.moduleContent = data;
          smc.getLessonContents();
        });
      }

      smc.viewModule = function(){
        vm.lesson = {};
        vm.selectedLesson = {}
        vm.LFILEediting = false;
      }

      smc.setContentType = function (){
        $rootScope.currentContentType = smc.selectedContentType;
      }

      smc.getLessonContents = function (){
        AdminLessonContents.get_by_content_type($rootScope.currentContentType,$rootScope.currentModule).success(function(data){
          $rootScope.content_by_type = data;
        })
        .error(function(data){
        });
      }

    }
})();
