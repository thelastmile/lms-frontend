angular.module('naut')
.directive('notetaker', [function () {
  'use strict';
  notesCtl.$inject = ['$rootScope','$scope', 'notes', 'toasty'];
  function notesCtl ($rootScope, $scope, notes, toasty) {
    var NC = this;

    NC.save = function (result) {
      notes.create(this.note).success(function (data){
          toasty.success({
            title: 'Saved',
            msg: 'New Reflection Added',
            sound: false,
            clickToClose: true,
          });
      }).error(function (error){
        toasty.error({
            title: 'Not Saved',
            msg: 'Ensure you added all values',
            sound: false,
            clickToClose: true,
          });
        return false;
      });

    };
  }
  return {
    restrict: 'E',
    templateUrl: 'app/views/notetaker.html',
    controller: notesCtl,
    controllerAs: 'NC'
  };
}]);
