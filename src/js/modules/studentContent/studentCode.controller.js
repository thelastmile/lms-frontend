/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentCodeController', StudentCodeController);
    
    StudentCodeController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService', 'HomeContentService', '$sce', '$stateParams','AdminCustomContentType'];
    function StudentCodeController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, HomeContentService, $sce, $stateParams, AdminCustomContentType) {
      var scc = this;

      $scope.app.sidebar.isOffscreen=true;

      if (typeof $scope.content == 'undefined' && typeof $scope.lesson == 'undefined'){
        $rootScope.currentModule = 0;
        $rootScope.currentContentType = 0;
        $scope.content = 0;
        $scope.lesson = 0;
      }

      if (typeof $rootScope.currentModule == 'undefined'){
        if ($stateParams.content){
          $rootScope.currentModule=$stateParams.content; 
        } else {
          $rootScope.currentModule=0;
        }
      }

    }
})();
