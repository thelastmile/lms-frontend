/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('EditHomePageController', EditHomePageController);
    
    EditHomePageController.$inject = ['$scope','HomeContentService'];
    function EditHomePageController($scope, HomeContentService) {
      var ehc = this;
      HomeContentService.get().success(function(data){
        $scope.homeContent = data[0];
        console.log($scope.homeContent);
      });

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
