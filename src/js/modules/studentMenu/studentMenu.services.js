
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
    .service('StudentMenuService', ['customUrl', '$http', function(customUrl, $http){
        var menu = {};
        // list of lessons
        menu.get = function(){
            return $http.get(customUrl.url + '/api/module/')
        };

        // find 1 lesson
        menu.get_single = function(pk){
            return $http.get(customUrl.url + '/api/module/' + pk + '/');
        };
        
        return menu;
    }])

    .service('StudentCurrentModule', ['customUrl', '$http', function(customUrl, $http){
        var menu = {};
        // list of lessons
        menu.get = function(){
            return $http.get(customUrl.url + '/api/module/')
        };

        // find 1 lesson
        menu.get_single = function(pk){
            return $http.get(customUrl.url + '/api/module/' + pk + '/');
        };
        
        return menu;
    }])

    .service('StudentCurrentCourse', ['customUrl', '$http', function(customUrl, $http){
        var menu = {};
        // list of lessons
        menu.get = function(){
            return $http.get(customUrl.url + '/api/module/')
        };

        // find 1 lesson
        menu.get_single = function(pk){
            return $http.get(customUrl.url + '/api/module/' + pk + '/');
        };
        
        return menu;
    }])
  }
)();
