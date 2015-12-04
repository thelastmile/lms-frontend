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
      });

      $rootScope.currentModule = false;

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

      smc.setContentType = function (){
        $rootScope.currentContentType = smc.selectedContentType;
      }

      smc.getLessonContents = function (){
        console.log('clicked');
        console.log(smc.selectedContentType);
        AdminLessonContents.get_by_content_type(smc.selectedContentType).success(function(data){
          $rootScope.content_by_type = data;
          console.log(data);
        })
        .error(function(data){
          console.log("failed");
          console.log(data);
        });
      }

    }
})();
