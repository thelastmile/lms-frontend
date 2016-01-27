/**=========================================================
 * Module: CoreController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CoreController', CoreController);

    /* @ngInject */
    CoreController.$inject = ['$rootScope','UserService','$scope','customUrl','$window', '$stateParams', '$location', 'AccessLogService'];
    function CoreController($rootScope,UserService,$scope,customUrl,$window, $stateParams, $location, AccessLogService) {
      // Get title for each page
      $rootScope.pageTitle = function() {
        return $rootScope.app.name + ' - ' + $rootScope.app.description;
      };

      // Cancel events from templates
      // ----------------------------------- 
      $rootScope.cancel = function($event){
        $event.preventDefault();
        $event.stopPropagation();
      };

      $rootScope.logout = function () {
        UserService.logout();
      };

      $rootScope.user = angular.fromJson($window.sessionStorage.getItem("user"));

      $rootScope.mediaUrl = "https://lms-backend-static-dev.s3.amazonaws.com";

      // Log all state changes, simply comment out to turn off
      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){ 
          var location = $location.url();
          console.log(location.indexOf("login"));
          if ($rootScope.user && location.indexOf("login") == -1) {
            AccessLogService.post({path:location,user:$rootScope.user.id}).success(function(data){
            console.log('logged');
          }).error(function (error){
            console.log('error, not logging!');
          });
          }
          
      })
    }
    

})();
