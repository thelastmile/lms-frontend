/**=========================================================
 * Module: CoreController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CoreController', CoreController);

    /* @ngInject */
    CoreController.$inject = ['$rootScope','UserService','$scope','customUrl','$window', '$stateParams', '$location', 'AccessLogService', '$state', 'customUrl'];
    function CoreController($rootScope,UserService,$scope,customUrl,$window, $stateParams, $location, AccessLogService, $state, customUrl) {
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

      // custom value search
      $rootScope.val2key = function(val,array){
          for (var key in array) {
              var this_val = array[key];
              console.log(this_val.id);
              if(this_val.name == val){
                  return this_val.id;
                  break;
              }
          }
      }

      $rootScope.$state = $state;

      $rootScope.user = angular.fromJson($window.sessionStorage.getItem("user"));

      $rootScope.mediaUrl = customUrl.backendStaticUrl;

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
