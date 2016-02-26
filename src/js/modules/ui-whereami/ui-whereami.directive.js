/**=========================================================
 * Module: ui-whereami.js
 * Tell the user where they are
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .directive('whereami', whereami);
    /* @ngInject */
    function whereami() {
      return {
        restrict: 'E',
        templateUrl: 'src/html/views/whereami.html',
        controller: ['$scope','customUrl',
            function ($scope,customUrl) {
                // observe changes in attribute - could also be scope.$watch
                $scope.customUrl = customUrl;
            }
        ]
      };
    }

})();
