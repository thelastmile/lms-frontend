/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('EditHomePageController', EditHomePageController);
    
    EditHomePageController.$inject = ['$scope','HomeContentService', 'toasty', 'AdminCoursesService'];
    function EditHomePageController($scope, HomeContentService, toasty, AdminCoursesService) {
      var ehc = this;

      AdminCoursesService.get().success(function(data){
        $scope.courses = data;
      });

      // HomeContentService.get().success(function(data){
      //   $scope.homeContent = data[0];
      // });

      ehc.loadContent = function (course_id){
        HomeContentService.get(course_id).success(function(data){
          $scope.homeContent = data[0];
          console.log(data);
        });
      }

      ehc.saveHomePage = function(record){
        HomeContentService.patch(record).success(function(data){
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
          // put logic here for keypress and cut/paste changes
        },
        skin: 'lightgray',
        theme : 'modern',
      };

    }
})();
