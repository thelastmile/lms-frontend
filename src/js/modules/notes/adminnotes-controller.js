(function () {
  'use strict';

  angular.module('naut')
  .controller('AdminNotesController', AdminNotesController);

  AdminNotesController.$inject = ['notes'];
  function AdminNotesController(notes) {
    var SNC = this;

    notes.fetchAll()
    .then(function (notes) {
      SNC.notes = notes;
    });
  }
})();