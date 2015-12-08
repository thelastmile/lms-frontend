
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

        // create a student
        code.post = function(data){
            return $http.post(customUrl.url + '/api/code/', data);
        };

                // create a student
        code.put = function(data){
            return $http.put(customUrl.url + '/api/code/' + data.id + '/', data);
        };
        
        return code;
    }])
  }
)();
