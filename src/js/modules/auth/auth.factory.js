/**=========================================================
 * Module: ColorsService.js
 * Services to retrieve global colors
 =========================================================*/
 
(function() {
    'use strict';

    angular
        .module('naut')
        //==============================================
        // LOGIN FACTORY
        //==============================================

        .factory('UserService', ['$http', '$state', 'registerService', 'customUrl', '$window', function($http, $state, registerService, customUrl, $window){
            var factory = {};
            factory.login = function(username, password){
                $http.post(customUrl.url + "/api-token-auth/", {username: username, password: password})
                .success(function(data){
                    if (data['token']) {
                        $window.sessionStorage.setItem("authenticated", true);
                        $window.sessionStorage.setItem("username", username);
                        $window.sessionStorage.setItem("token", data['token']);
                        $window.sessionStorage.setItem("id", data.id);
                        //var permissions = userPermissions.getOrSetAndRoute();
                        factory.getAndRoute();
                        
                    }
                    else {
                        $window.sessionStorage.setItem("authenticated", false);
                        $window.sessionStorage.setItem("username", "");
                        $window.sessionStorage.setItem("token", "");
                    }
                })
                .error(function(data, status, headers, config){
                        $window.sessionStorage.setItem("authenticated", false);
                        $window.sessionStorage.setItem("username", "");
                        $window.sessionStorage.setItem("token", "");
                        //toaster.pop("error", "Invalid credentials", "text");
                })
            };

            factory.getAndRoute = function(){
                $http.get(customUrl.url + '/api/users/?username=' + $window.sessionStorage.getItem("username"))
                    .success(function(data) {
                      $window.sessionStorage.setItem("id", data[0].id);
                      if (data[0].groups.indexOf(1) > -1){
                        console.log('is admin');
                        $window.sessionStorage.setItem("userPermissions","admin");
                        $state.go("app.viewstudents");
                        //$rootScope.userPermissions = "admin";
                      } else {
                        console.log('is user');
                        $window.sessionStorage.setItem("userPermissions","user");
                        //$rootScope.userPermissions = "user";
                        $state.go("app.studentdashboard");
                      }
                    });
            }

            factory.isAuthenticated = function(){
                return $window.sessionStorage.getItem("authenticated");
            };

            factory.token = function(){
                return $window.sessionStorage.getItem("token");
            };
            
            factory.logout = function(){
              $window.sessionStorage.clear();
              $state.go('page.login');
            };

            return factory;

        }])

      //==============================================
      // REGISTRATION SERVICE
      //==============================================
      .service('registerService', ['$http', '$state', 'customUrl', function($http, $state, customUrl){
          var registerMethods = {};
          // var backend_url = "http://esystapi-env.elasticbeanstalk.com/"
          // for local
          // var backend_url = "http://127.0.0.1:8000";

          registerMethods.post = function(data){
              $http.post(customUrl.url + "/api/user_profile/user_create/", data)
              .success(function(data){
                  $state.go('success');
              })
              .error(function(data){
                  $state.go('error');
              })
          };

          registerMethods.verify = function(data){
              $http.post(customUrl.url + "/api/user_profile/verification_key/", data)
              .success(function(data){
                  $state.go('confirmation');
              })
              .error(function(data){
                  $state.go('error')
              })
          };

          // registerMethods.backend_url = function(){
          //     return backend_url;
          // }

          return registerMethods;
      }])

})();