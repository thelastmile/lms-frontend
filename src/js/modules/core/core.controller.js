/**=========================================================
 * Module: CoreController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CoreController', CoreController);

    /* @ngInject */
    CoreController.$inject = ['$rootScope','UserService'];
    function CoreController($rootScope,UserService) {
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
    }
    

})();
