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
      var editor = ace.edit("editor_code");

      var editor_code = `console.log('TLM ROCKS');
var this_loop = true;
var counter = 0;
while (this_loop === true){
   console.log(counter);
   if (counter == 5){
      this_loop = false;
   }
   counter++;
}`;
      editor.setValue(editor_code);
      cc.run = function($event){
        //editor = ace.edit("editor_code");
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
