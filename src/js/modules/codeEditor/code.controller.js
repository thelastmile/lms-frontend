/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CodeController', CodeController);
    
    CodeController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty'];
    function CodeController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty) {
      var cc = this;

      cc.output = "";
      cc.run = function($event){
        var editor = ace.edit("editor_code");
        var code = editor.getValue();
        return eval(code);
      }

      console.log = (function (old_function, div_log) { 
          return function (text) {
              old_function(text);
              div_log.value += text+'\n';
          };
      } (console.log.bind(console), document.getElementById("code-output")));

    }
})();
