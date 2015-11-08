angular.module('naut')
.directive('notetaker', [function () {
  'use strict';
  notesCtl.$inject = ['marked', '$scope', 'notes'];
  function notesCtl (marked, $scope, notes) {
    var NC = this;

    NC.note = {
      title: '',
      body: ''
    };

    NC.save = function () {
      notes.create(NC.note);
    };
  }
  return {
    restrict: 'E',
    templateUrl: 'app/views/notetaker.html',
    controller: notesCtl,
    controllerAs: 'NC'
  };
}]);
