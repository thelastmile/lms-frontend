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

      cc.save = function(codedata){
        if (codedata.id){ // Save record
          CodeService.put(codedata).success(function(data){
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
        } else { // New record
          CodeService.post(codedata).success(function(data){
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
        }
      }

      //override console.log and spit it into a div named code-output
      $window.console.log = (function (old_function, div_log) {
          return function (text) {
              old_function(text);
              div_log.value += text+'\n';
          };
      } ($window.console.log.bind(console), $window.document.getElementById("code-output")));

    }
})();
