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
    .service('StudentInfoService', ['customUrl', '$http', function(customUrl, $http){
        var students = {};
        
        students.post= function(data){
            return $http.post(customUrl.url + '/api/users/', data);
        };
        
        students.get = function(){
            return $http.get(customUrl.url + '/api/users/')
        };

        students.get_single = function(pk){
            return $http.get(customUrl.url + '/api/users/' + pk + '/');
        };
        
        return students;
    }])

    }
)();
