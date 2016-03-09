(function () {
  'use strict';

  angular.module('naut')
  .controller('StudentNotesController', StudentNotesController);

  StudentNotesController.$inject = ['notes','$rootScope'];
  function StudentNotesController(notes,$rootScope) {
    var SNC = this;

    notes.fetchAll(true).success(function (notes) {
      $rootScope.notes = notes;
    });

    // If not editing, enables edit mote
    // If editing, saves and disables editing
    SNC.editing = false;
    SNC.editSave = function () {
      if (SNC.editing) {
        SNC.editing = false;
        notes.save(SNC.selectedNote);
      } else {
        SNC.editing = true;
      }
    }
  }
})();