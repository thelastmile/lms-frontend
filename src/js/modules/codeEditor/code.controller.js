/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CodeController', CodeController);
    
    CodeController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'CodeService'];
    function CodeController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, CodeService) {
      var cc = this;
      var editor = ace.edit("editor_code");

      var editor_code = `console.log('TLM ROCKS'); //KEEP THIS BAD SPACING BELOW!!!
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

      CodeService.get().success(function(data){
        $scope.code_list = data;
        // TODO Add check for browser storage variable
      });

      
      cc.run = function($event){
        var code = editor.getValue();
        return eval(code);
      }

      cc.open = function(){
        var editor_code = cc.current_code.code;
        editor.setValue(editor_code);
      }

      //override console.log and spit it into a div named code-output
      console.log = (function (old_function, div_log) { 
          return function (text) {
              old_function(text);
              div_log.value += text+'\n';
          };
      } (console.log.bind(console), document.getElementById("code-output")));

    }
})();
