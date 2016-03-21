/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CodeController', CodeController);

    CodeController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'CodeService', '$stateParams', 'JSONCode'];
    function CodeController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, CodeService, $stateParams, JSONCode) {
      var cc = this;
      $rootScope.console = [];
      
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

      JSONCode.get().success(function(data){
        $scope.jsonCode = data;
      });

      cc.loadCode = function () {
        editor.setValue(cc.challenge.challengeSeed.join("\r"), -1);
        editor_tests.setValue(cc.challenge.tests.join("\r"), -1);
      }


      cc.getChallenges = function (){

        $scope.jsonCodeChallenges = cc.problem.json["challenges"];
      }

      CodeService.get_single($stateParams.lesson)
      .success(function(data){
        $scope.code_list = data;
        editor.setValue(data.code);
        editor_tests.setValue(data.tests);

        // TODO Add check for browser storage variable
      });

      cc.run = function($event){
        $rootScope.console = [];
        var code = editor.getValue();

        if (cc.challenge){
          var tests = cc.challenge.tests.join("\r");
        } else {
          //No challanges are loaded.  Just running code with no tests
          tests = "";
        }
        
        var vanillaConsole = $window.console.log.bind($rootScope.console);

        // Override console.log and spit it into a div named code-output
        $window.console.log = function () {
          vanillaConsole(arguments);
          $rootScope.console = $rootScope.console.concat(Array.prototype.slice.call(arguments));
        };
        try {
          eval(code + ';' + tests);
        } catch (e) {
          //$rootScope.console = ['=== An error was thrown during execution ===', e.stack];
          $rootScope.console = [e.stack];
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
