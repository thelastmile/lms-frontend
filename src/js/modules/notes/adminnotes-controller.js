(function () {
  'use strict';

  angular.module('naut')
  .controller('AdminNotesController', AdminNotesController);

  AdminNotesController.$inject = ['notes','$rootScope'];
  function AdminNotesController(notes,$rootScope) {
    var SNC = this;

    notes.fetchAll().success(function (data) {
      $rootScope.notes = data;
    });
  }
})();