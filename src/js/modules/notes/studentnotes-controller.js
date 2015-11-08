(function () {
  'use strict';

  angular.module('naut')
  .controller('StudentNotesController', StudentNotesController);

  StudentNotesController.$inject = ['notes'];
  function StudentNotesController(notes) {
    var SNC = this;

    notes.fetchAll()
    .then(function (notes) {
      SNC.notes = notes;
    });
  }
})();