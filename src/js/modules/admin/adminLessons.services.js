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
    .service('AdminLessonsService', ['customUrl', '$http', function(customUrl, $http){
        var lessons = {};
        // create a lesson
        lessons.post = function(data){
            return $http.post(customUrl.url + '/api/module/', data);
        };

        // update
        lessons.put = function(data){
            return $http.put(customUrl.url + '/api/module/' + data.id + '/', data);
        };

        // list of lessons
        lessons.get = function(){
            return $http.get(customUrl.url + '/api/module/')
        };
        // find 1 lesson
        lessons.get_single = function(pk){
            return $http.get(customUrl.url + '/api/module/' + pk + '/');
        };
        
        return lessons;
    }])

    .service('AdminCoursesService', ['customUrl', '$http', function(customUrl, $http){
        var courses = {};
        // create a lesson
        courses.post = function(data){
            return $http.post(customUrl.url + '/api/course/', data);
        };

        // update
        courses.put = function(data){
            return $http.put(customUrl.url + '/api/course/' + data.id + '/', data);
        };

        // list of lessons
        courses.get = function(){
            return $http.get(customUrl.url + '/api/course/')
        };
        // find 1 lesson
        courses.get_single = function(pk){
            return $http.get(customUrl.url + '/api/course/' + pk + '/');
        };
        
        return courses;
    }])

    }
)();
