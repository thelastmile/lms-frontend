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

    .service('StatusService', ['customUrl', '$http', function(customUrl, $http){
        var status = {};

        // update student
        status.put_tech = function(data,current_score){
            return $http.put(customUrl.url + '/api/dailyscorestech/'+data.tech_score_id+'/', {score: current_score, student:data.id});
        };

        status.put_social = function(data,current_score){
            return $http.put(customUrl.url + '/api/dailyscoressocial/'+data.tech_score_id+'/', {score: current_score, student:data.id});
        };

        status.put_participation = function(data,current_score){
            return $http.put(customUrl.url + '/api/dailyscorestechparticipation/'+data.tech_score_id+'/', {score: current_score, student:data.id});
        };
        
        return status;
    }])

    }
)();
