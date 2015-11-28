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

        .factory('UserService', ['$http', '$state', 'registerService', 'customUrl', '$window','toasty', function($http, $state, registerService, customUrl, $window, toasty){
            var factory = {};
            factory.login = function(username, password){
                $http.post(customUrl.url + "/api-token-auth/", {username: username, password: password})
                .success(function(data){
                    if (data['token']) {
                        $window.sessionStorage.setItem("authenticated", true);
                        $window.sessionStorage.setItem("username", username);
                        $window.sessionStorage.setItem("token", data['token']);
                        $window.sessionStorage.setItem("id", data.id);
                        factory.getAndRoute();
                        
                    }
                    else {
                        $window.sessionStorage.setItem("authenticated", false);
                        $window.sessionStorage.setItem("username", "");
                        $window.sessionStorage.setItem("token", "");
                        toasty.error({
                            title: 'Invalid login',
                            msg: 'Please check your username and password and try again',
                            sound: false,
                            clickToClose: true,
                        });
                    }
                })
                .error(function(data, status, headers, config){
                        $window.sessionStorage.setItem("authenticated", false);
                        $window.sessionStorage.setItem("username", "");
                        $window.sessionStorage.setItem("token", "");
                        console.log(status);
                        if (status===-1){
                          toasty.error({
                            title: 'Connection Problem',
                            msg: 'Looks like we can\'t communicate with the backend.',
                            sound: false,
                            clickToClose: true,
                            position: 'bottom-left'
                          });
                        } else if (status===400) {
                          toasty.error({
                            title: 'Invalid login',
                            msg: 'Please check your username and password and try again',
                            sound: false,
                            clickToClose: true,
                            position: 'bottom-left'
                          });
                        }
                })
            };

            factory.getAndRoute = function(){
                $http.get(customUrl.url + '/api/users/?username=' + $window.sessionStorage.getItem("username"))
                    .success(function(data) {
                      for (var group in data[0].groups){
                        if (data[0].groups[group].name==='Super Admin'){
                          console.log('is Super Admin');
                          $window.sessionStorage.setItem("userPermissions","superAdmin");
                          $state.go("app.viewstudents");
                          break;
                        } else if (data[0].groups[group].name==='Faculty') {
                          console.log('is Admin');
                          $window.sessionStorage.setItem("userPermissions","faculty");
                          $state.go("app.viewstudents");
                        } else if (data[0].groups[group].name==='Student' || data[0].groups[group].name==='Inmate') {
                          console.log('is Student');
                          $window.sessionStorage.setItem("userPermissions","student");
                          $state.go("app.studentdashboard");
                        }
                      } 

                      if (data[0].groups.length===0) {
                        toasty.error({
                            title: 'Login valid but you don\'t belong to any groups.',
                            msg: 'Contact your admin for group assignment.',
                            sound: false,
                            clickToClose: true
                        });
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