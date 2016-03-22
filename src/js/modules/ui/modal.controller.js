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
    function ModalController($modal, $log, $scope) {
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
        var editor = ace.edit("editor_code");
        var code = editor.getValue();
        var modalInstance = $modal.open({
          templateUrl: 'app/views/modal-code.html',
          animation: false,
          controller: ModalInstanceCtrl,
          size: size,
          resolve: {
                problem: function(){
                    return $scope.$parent.CODE;
                },
                code: function(){
                    return code;
                }
            }
        });
      };

      // Please note that $modalInstance represents a modal window (instance) dependency.
      // It is not the same as the $modal service used above.

      var ModalInstanceCtrl = function ($rootScope,$scope, $modalInstance, CodeRunResultService, toasty, code, problem) {
        $scope.submit_code = function () {
          var data = {
            "problem_link":problem.problem.id,
            "problem_name":problem.problem.title,
            //"challange_name":code.challange.title,
            "student":$rootScope.user.id,
            "code":code,
            "tests":problem.challenge.tests.join("\r"),
            "status":"FAIL",
            "course":$rootScope.user.course_id,
            "module":$rootScope.currentModule,
          }
          //console.log(challange);
          //console.log($scope);
          CodeRunResultService.post(data).success(function(data){
          toasty.success({
            title: 'Saved',
            msg: 'Code Saved',
            sound: false,
            clickToClose: true
            });
          // TODO Add check for browser storage variable
          }).error(function(){
            toasty.error({
              title: 'Code Not Saved',
              msg: 'Ensure you filled out the title field',
              sound: false,
              clickToClose: true
              });
          });
          return true;
        }

        $scope.ok = function () {
          $modalInstance.close('closed');
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      };
      ModalInstanceCtrl.$inject = ['$rootScope','$scope', '$modalInstance', 'CodeRunResultService', 'toasty', 'code', 'problem'];

    }
    ModalController.$inject = ['$modal', '$log', '$scope'];
})();

(function() {
    'use strict';

angular
    .module('naut')
    .controller('ModalNoteController', ModalNoteController);
    /* @ngInject */
    function ModalNoteController($modal, $log, $scope) {
      var vm = this;
      vm.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'app/views/modal.html',
          controller: ModalInstanceCtrl,
          size: size,
          animation: true
        });
      }

      var ModalInstanceCtrl = function ($rootScope, $scope, $modalInstance, toasty) {

        $scope.ok = function () {
          $modalInstance.close('closed');
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };

      };
    ModalInstanceCtrl.$inject = ['$rootScope','$scope', '$modalInstance', 'toasty'];


    }
    ModalNoteController.$inject = ['$modal', '$log', '$scope'];
})();