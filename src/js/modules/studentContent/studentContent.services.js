
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

        // find 1 lesson
        homeContent.get = function(pk){
            return $http.get(customUrl.url + '/api/setting/?name=HomeContent');
        };
        
        return homeContent;
    }])

  }
)();
