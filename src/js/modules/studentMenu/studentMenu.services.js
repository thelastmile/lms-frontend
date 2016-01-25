
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
        menu.get = function(course){
            return $http.get(customUrl.url + '/api/module/?course='+ course)
        };

        // find 1 lesson
        menu.get_single = function(pk){
            return $http.get(customUrl.url + '/api/module/' + pk + '/');
        };
        
        return menu;
    }])

    .service('StudentGetModuleContents', ['customUrl', '$http', function(customUrl, $http){
        var module = {};
        // find 1 lesson
        module.get_single = function(pk){
            return $http.get(customUrl.url + '/api/binarycontent/?module=' + pk + '');
        };
        
        return module;
    }])
  }
)();
