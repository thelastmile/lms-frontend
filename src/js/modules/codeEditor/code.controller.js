/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CodeController', CodeController);

    CodeController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'CodeService', '$stateParams'];
    function CodeController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, CodeService, $stateParams) {
      var cc = this;
      var editor = ace.edit("editor_code");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/javascript");
      editor.renderer.setScrollMargin(10, 10);
      editor.setOptions({
          // "scrollPastEnd": 0.8,
          autoScrollEditorIntoView: true,
      });

      var editor_tests = ace.edit("editor_tests");
      editor_tests.setTheme("ace/theme/twilight");
      editor_tests.session.setMode("ace/mode/javascript");

      CodeService.get_single($stateParams.lesson)
      .success(function(data){
        console.log('data', data);
        $scope.code_list = data;
        editor.setValue(data.code);
        editor_tests.setValue(data.tests);

        // TODO Add check for browser storage variable
      });


      cc.console = [];
      cc.run = function($event){
        cc.console = [];
        var code = editor.getValue();
        var tests = editor_tests.getValue();
        var vanillaConsole = $window.console.log.bind(console);


        // Override console.log and spit it into a div named code-output
        $window.console.log = function () {
          vanillaConsole(arguments);
          cc.console = cc.console.concat(Array.prototype.slice.call(arguments));
        };
        try {
          eval(code + ';' + tests);
        } catch (e) {
          cc.console = ['=== An error was thrown during execution ===', e.stack];
        }
        $window.console.log = vanillaConsole;
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


    }
})();
