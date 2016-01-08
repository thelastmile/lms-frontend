/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('EditHomePageController', EditHomePageController);
    
    EditHomePageController.$inject = ['$scope','HomeContentService', 'toasty'];
    function EditHomePageController($scope, HomeContentService, toasty) {
      var ehc = this;
      HomeContentService.get().success(function(data){
        $scope.homeContent = data[0];
      });

      ehc.saveHomePage = function(){
        HomeContentService.put($scope.homeContent).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'Home page content updated.',
            sound: false,
            clickToClose: true,
          });
        });
      }

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
