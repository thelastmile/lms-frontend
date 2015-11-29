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

    .service('AdminLessonContents', ['customUrl', '$http', 'Upload', function(customUrl, $http, Upload){
        var lessons = {};

        lessons.post = function(data){
            return $http.post(customUrl.url + '/api/binarycontent/', data);
        };

        // upload lesson content
        lessons.post_file = function(data){
            return Upload.upload({
                url: customUrl.url + '/api/binarycontent/',
                data: data
            })


            // $http.post(customUrl.url + '/api/binarycontent/', fd, {
            //     // IMPORTANT!!! DO NOT set to 'multipart/form-data'
            //     headers: { 'Content-Type': false },
            //     transformRequest: angular.identity,
            // }).
            // success(function (data, status, headers, config) {
            //     alert("success!");
            // }).
            // error(function (data, status, headers, config) {
            //     alert("failed!");
            // });
        };

        // update
        lessons.put = function(data){
            return $http.put(customUrl.url + '/api/binarycontent/' + data.id + '/', data);
        };

        // list of lessons
        lessons.get = function(){
            return $http.get(customUrl.url + '/api/binarycontent/')
        };
        // find 1 lesson
        lessons.get_single = function(pk){
            return $http.get(customUrl.url + '/api/binarycontent/' + pk + '/');
        };
        
        return lessons;
    }])

    .service('AdminCustomContentType', ['customUrl', '$http', function(customUrl, $http){
        var customcontenttypes = {};
        // create a lesson
        customcontenttypes.post = function(data){
            return $http.post(customUrl.url + '/api/customcontenttype/', data);
        };

        // update
        customcontenttypes.put = function(data){
            return $http.put(customUrl.url + '/api/customcontenttype/' + data.id + '/', data);
        };

        // list of lessons
        customcontenttypes.get = function(){
            return $http.get(customUrl.url + '/api/customcontenttype/')
        };
        // find 1 lesson
        customcontenttypes.get_single = function(pk){
            return $http.get(customUrl.url + '/api/customcontenttype/' + pk + '/');
        };
        
        return customcontenttypes;
    }])

    }
)();
