
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
        
        return code;
    }])
  }
)();
