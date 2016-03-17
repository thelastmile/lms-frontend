
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
    .service('HomeContentService', ['customUrl', '$http', function(customUrl, $http){
        var homeContent = {};

        homeContent.get = function(course_id){
            var the_end = '';
            if (course_id) {the_end='?course='+course_id}
            return $http.get(customUrl.url + '/api/homepagecontent/'+the_end);
        };

        homeContent.put = function(data){
            return $http.put(customUrl.url + '/api/homepagecontent/'+data.id+'/', data);
        };

        homeContent.patch = function(data){
            var course_id = data.course;
            delete(data.course);
            return $http.patch(customUrl.url + '/api/homepagecontent/'+course_id+'/', data);
        };

        homeContent.post = function(data){
            return $http.post(customUrl.url + '/api/homepagecontent/', data);
        };
        
        return homeContent;
    }])

    .service('JSONCode', ['customUrl', '$http', function(customUrl, $http){
        var jc = {};


        jc.get = function(){
            return $http.get(customUrl.url + '/api/jsoncode/')
        };

        jc.get_single = function(pk){
            return $http.get(customUrl.url + '/api/jsoncode/' + pk + '/');
        };
        
        return jc;
    }])

  }
)();
