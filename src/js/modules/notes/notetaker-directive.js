angular.module('naut')
.directive('notetaker', [function () {
  'use strict';
  notesCtl.$inject = ['$rootScope','$scope', 'notes', 'toasty', '$uibModal'];
  function notesCtl ($rootScope, $scope, notes, toasty, $uibmodal) {
    var NC = this;

    NC.save = function() {
      notes.create(NC.note).success(function (data){
          toasty.success({
            title: 'Saved',
            msg: 'New Reflection Added',
            sound: false,
            clickToClose: true,
          });
          NC.note.body = "";
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
