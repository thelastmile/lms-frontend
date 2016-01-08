/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('EditHomePageController', EditHomePageController);
    
    EditHomePageController.$inject = ['$scope'];
    function EditHomePageController($scope) {
      var ehc = this;
      $scope.tinymceOptions = {
        onChange: function(e) {
          console.log('af');
          // put logic here for keypress and cut/paste changes
        },
        skin: 'lightgray',
        theme : 'modern',
      };

    }
})();
