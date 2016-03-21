
/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('naut')

    //==============================================
    // STUDENTS INFO
    //==============================================
    .service('CodeService', ['customUrl', '$http', function(customUrl, $http){
      var code = {};
      // list of lessons
      code.get = function(){
        return $http.get(customUrl.url + '/api/code/')
      };

      // find 1 lesson
      code.get_single = function(pk){
        return $http.get(customUrl.url + '/api/code/' + pk + '/');
      };

      code.post = function(data){
        return $http.post(customUrl.url + '/api/code/', data);
      };

      code.put = function(data){
        return $http.put(customUrl.url + '/api/code/' + data.id + '/', data);
      };
      return code;
    }])

    .service('CodeRunResultService', ['customUrl', '$http', function(customUrl, $http){
      var code = {};
      // list
      code.get = function(){
        return $http.get(customUrl.url + '/api/coderun/')
      };

      // find 1
      code.get_single = function(pk){
        return $http.get(customUrl.url + '/api/coderun/' + pk + '/');
      };

      code.post = function(data){
        return $http.post(customUrl.url + '/api/coderun/', data);
      };

      return code;
    }])
  }
)();
