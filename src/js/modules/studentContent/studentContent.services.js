
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

        homeContent.get = function(pk){
            return $http.get(customUrl.url + '/api/setting/?name=HomeContent');
        };

        homeContent.put = function(data){
            return $http.put(customUrl.url + '/api/setting/'+data.id+'/', data);
        };

        homeContent.post = function(data){
            return $http.post(customUrl.url + '/api/setting/', data);
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
