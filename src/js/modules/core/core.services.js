
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
    .service('AccessLogService', ['customUrl', '$http', function(customUrl, $http){
        var AccessLog = {};

        AccessLog.get = function(pk){
            return $http.get(customUrl.url + '/api/accesslog/?user=' + pk + '/');
        };

        AccessLog.post = function(data){
            return $http.post(customUrl.url + '/api/accesslog/', data);
        };
        
        return AccessLog;
    }])

  }
)();
