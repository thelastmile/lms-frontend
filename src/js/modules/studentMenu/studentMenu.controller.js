/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentMenuController', StudentMenuController);
    
    StudentMenuController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService','StudentGetModuleContents','AdminLessonContents', '$stateParams', '$state'];
    function StudentMenuController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, StudentGetModuleContents, AdminLessonContents, $stateParams, $state) {
      var smc = this;

      StudentMenuService.get($rootScope.user.course_id).success(function(data){
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
        //if (!$rootScope.currentContentType){ $rootScope.currentContentType=1;}
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

      smc.getLessonContents = function (){
        AdminLessonContents.get_by_content_type($state.current.url.slice(1),$stateParams.module).success(function(data){
          $rootScope.content_by_type = data;
        })
        .error(function(data){
        });
      }

      $rootScope.$state = $state;
      $rootScope.currentState = $state.current;
      console.log($state);
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from) {
        console.log(to);
        $rootScope.previousState = from.name;
        $rootScope.currentState = to;
        smc.getLessonContents();
      });
    }
})();
