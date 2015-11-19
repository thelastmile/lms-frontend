(function () {
  'use strict';

  angular.module('naut')
  .controller('StudentNotesController', StudentNotesController);

  StudentNotesController.$inject = ['notes'];
  function StudentNotesController(notes) {
    var SNC = this;

    notes.fetchAll(true)
    .then(function (notes) {
      SNC.notes = notes;
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