(function () {
  'use strict';

  angular.module('naut')
  .controller('AdminNotesController', AdminNotesController);

  AdminNotesController.$inject = ['notes'];
  function AdminNotesController(notes) {
    var SNC = this;

    notes.fetchAll().success(function (data) {
      console.log(data);
      SNC.notes = data;
    });
  }
})();