/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('AdminLessonsController', AdminLessonsController);
    
    AdminLessonsController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService'];
    function AdminLessonsController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService) {
      var vm = this;
      AdminLessonsService.get().success(function(data){
        $scope.lessons = data;
      });

      AdminCoursesService.get().success(function(data){
        $scope.courses = data;
      });

    }
})();
