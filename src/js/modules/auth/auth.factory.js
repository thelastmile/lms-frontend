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
        .factory('UserService', ['$http', '$state', 'registerService', 'customUrl', '$window','toasty', 'UserService_','$rootScope', 'AccessLogService', function($http, $state, registerService, customUrl, $window, toasty, UserService_, $rootScope, AccessLogService ){
            var factory = {};
            factory.login = function(username, password){
                $http.post(customUrl.url + "/api-token-auth/", {username: username, password: password})
                .success(function(data){
                    if (data['token']) {
                        $window.sessionStorage.setItem("authenticated", true);
                        $window.sessionStorage.setItem("user", JSON.stringify(data['user']));
                        $window.sessionStorage.setItem("token", data['token']);
                        $window.sessionStorage.setItem("id", data.id);
                        $rootScope.user = angular.fromJson((data['user']));
                        factory.getAndRoute();
                    }
                    else {
                        $window.sessionStorage.setItem("authenticated", false);
                        $window.sessionStorage.setItem("user", null);
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
                        $window.sessionStorage.setItem("user", null);
                        $window.sessionStorage.setItem("token", "");
                        if (status===-1){
                          toasty.error({
                            title: 'Connection Problem',
                            msg: 'Looks like we can\'t communicate with the backend.',
                            sound: false,
                            clickToClose: true,
                          });
                        }

                        if (status===400) {
                          toasty.error({
                            title: 'Invalid login',
                            msg: 'Please check your username and password and try again.',
                            sound: false,
                            clickToClose: true,
                          });
                        }

                        if (status===500) {
                          toasty.error({
                            title: 'User Setup Error',
                            msg: 'Please ensure that this user is assigned to a group for access.',
                            sound: false,
                            clickToClose: true,
                          });
                        }
                })
            };

            factory.getAndRoute = function(){
                var user = $rootScope.user;
                for (var group in user.groups){
                        if (user.groups[group].name==='Super Admin'){
                          $window.sessionStorage.setItem("userPermissions","superAdmin");
                          $state.go("app.viewstudents");
                          break;
                        } else if (user.groups[group].name==='Faculty') {
                          $window.sessionStorage.setItem("userPermissions","faculty");
                          $state.go("app.viewstudents");
                        } else if (user.groups[group].name==='Student' || user.groups[group].name==='Inmate') {
                          $window.sessionStorage.setItem("userPermissions","student");

                          AccessLogService.get($rootScope.user.id).success(function(data){
                            var keys = data[0];
                            if (typeof(keys) != "undefined")  {
                              $window.location = "#"+data[0].path;
                            } else {
                              $state.go("app.home");
                            }
                            
                          }).error(function (error){
                            $state.go("app.home");
                          });
                        }
                      } 

                      if (!user.groups.length) {
                        toasty.error({
                            title: 'Login valid but you don\'t belong to any groups.',
                            msg: 'Contact your admin for group assignment.',
                            sound: false,
                            clickToClose: true
                        });
                      }
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

          return registerMethods;
      }])

})();