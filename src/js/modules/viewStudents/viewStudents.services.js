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

        // update student
        students.put = function(data){
            return $http.put(customUrl.url + '/api/students/'+data.id+'/', data);
        };
        
        return students;
    }])

    .service('AttendanceService', ['customUrl', '$http', function(customUrl, $http){
        var attendance = {};
        // create a student
        attendance.post= function(data){
            return $http.post(customUrl.url + '/api/attendance/', data);
        };

        // update student
        attendance.put = function(data,current_attendance){
            return $http.put(customUrl.url + '/api/attendance/'+data.attendance_id+'/', {attendance: current_attendance, student:data.id});
        };
        
        return attendance;
    }])

    }
)();
