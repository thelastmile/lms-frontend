/**=========================================================
 * Module: DemoTooltipController.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('TooltipController', TooltipController);
    /* @ngInject */
    function TooltipController() {
      var vm = this;
      vm.dynamicTooltip = 'Hello, World!';
      vm.dynamicTooltipText = 'dynamic';
      vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

    }

})();
