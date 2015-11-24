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
        // create a student
        students.post= function(data){
            return $http.post(customUrl.url + '/api/students/', data);
        };
        // list of students
        students.get = function(){
            return $http.get(customUrl.url + '/api/students/')
        };
        // find 1 student
        students.get_single = function(pk){
            return $http.get(customUrl.url + '/api/students/' + pk + '/');
        };
        
        return students;
    }])

    }
)();
