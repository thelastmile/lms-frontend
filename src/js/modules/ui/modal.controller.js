/**=========================================================
 * Module: ModalController
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ModalController', ModalController);
    /* @ngInject */
    function ModalController($modal, $log) {
      var vm = this;
      vm.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'app/views/modal.html',
          animation: false,
          controller: ModalInstanceCtrl,
          size: size
        });

        /*
        var state = $('#modal-state');
        modalInstance.result.then(function () {
          state.text('Modal dismissed with OK status');
        }, function () {
          state.text('Modal dismissed with Cancel status');
        });
        */
      };

      vm.open_code = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'app/views/modal-code.html',
          animation: false,
          controller: ModalInstanceCtrl,
          size: size
        });
      };

      // Please note that $modalInstance represents a modal window (instance) dependency.
      // It is not the same as the $modal service used above.

      var ModalInstanceCtrl = function ($scope, $modalInstance) {

        $scope.ok = function () {
          $modalInstance.close('closed');
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      };
      ModalInstanceCtrl.$inject = ['$scope', '$modalInstance'];

    }
    ModalController.$inject = ['$modal', '$log'];
})();
