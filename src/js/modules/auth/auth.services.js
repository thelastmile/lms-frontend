
/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')

    .service('UserService_', ['customUrl', '$http', function(customUrl, $http){
        var user = {};

        user.get_single = function(pk){
            return $http.get(customUrl.url + '/api/users/' + pk + '/');
        };
        
        return user;
    }])

  }
)();
