angular.module('naut')
.directive('notetaker', [function () {
  'use strict';
  notesCtl.$inject = ['marked', '$scope', 'notes'];
  function notesCtl (marked, $scope, notes) {
    var NC = this;
    
    notes.fetchAll()
    .then(console.log.bind(console));

    NC.save = function () {
      console.log('saving...', NC.note);
      notes.create(NC.note);
    }

    $scope.$watch('NC.note', function (n, o) {
      if (!n) { return; }
      NC.marked = marked(n);
    })
  }
  return {
    restrict: 'E',
    templateUrl: 'app/views/notetaker.html',
    controller: notesCtl,
    controllerAs: 'NC'
  };
}]);
