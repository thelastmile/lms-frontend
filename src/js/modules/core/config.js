/**=========================================================
 * Module: CoreConfig
 =========================================================*/
(function () {
  'use strict';

  angular
    .module('naut')
    .config(commonConfig)
    .config(lazyLoadConfig)
    .config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://127.0.0.1:8000/**',
   'https://s3-us-west-2.amazonaws.com/**',
   'https://lms-backend-static-dev.s3.amazonaws.com/**',
   'http://lms-backend-dev.elasticbeanstalk.com/**',
   'http://tlm-lms-backend.elasticbeanstalk.com/**',
   'http://tlmlmsbackend-prod.us-west-2.elasticbeanstalk.com/**',
   'http://tlmlmsbackend-staging.us-west-2.elasticbeanstalk.com/**',
   'http://interchange-dev.thelastmile.org/**']);
 })
    .run(function($templateCache,$http, $rootScope, $state, UserService){
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
                  if (toState.authenticate && ( (UserService.isAuthenticated() === "false") || (UserService.isAuthenticated() === null) ) ){
                    // User isn’t authenticated
                    event.preventDefault();
                    $state.transitionTo("page.login");
                  }
            });
    })

    .factory('customUrl', function(){

        var deployments = [{
                      "name":"localdev",
                      "url": "http://127.0.0.1:8000",
                      "staticUrl":"localhost,127.0.0.1",
                      "backendStaticUrl":"http://127.0.0.1:8000",
                      "mediaUrl":"http://127.0.0.1:8000/media"
                    
                    },
                    {
                      "name":"legacy-dev",
                      "url": "http://tlm-lms-backend.elasticbeanstalk.com",
                      "staticUrl":"lms-frontent-static-dev"
                    },
                    {
                      "name":"cloud-master",
                      "url": "http://tlmlmsbackend-prod.us-west-2.elasticbeanstalk.com",
                      "staticUrl":"interchange.thelastmile.org,tlm-lms-master-production.s3-website-us-west-2.amazonaws.com",
                      "backendStaticUrl":"https://s3-us-west-2.amazonaws.com/storage-dev-thelastmile-org"
                    },
                    {
                      "name":"cloud-dev",
                      "url": "http://tlmlmsbackend-staging.us-west-2.elasticbeanstalk.com",
                      "staticUrl":"interchange-dev.thelastmile.org,tlm-lms-master.s3-website-us-west-2.amazonaws.com",
                      "backendStaticUrl":"https://s3-us-west-2.amazonaws.com/storage-dev-thelastmile-org"
                    }]

        for (var i in deployments){
          if (deployments[i].staticUrl.indexOf(document.location.hostname) > -1){
            // RETURNS OUR DEPLOYMENT INFO BASED ON FRONTEND BEING ACCESSED
            return deployments[i];
          };
        }
    })

    //==============================================
    // RESET PASSWORD SERVICE
    //==============================================
    .service('resetService', ['$http', 'registerService', '$state', 'customUrl', function($http, registerService, $state, customUrl){
        var resetMethods = {};
        // var url = registerService.backend_url();

        resetMethods.password_update = function(data){
            $http.post(customUrl.url + '/api/user_profile/password_update/', data)
            .success(function(data){
                $state.go('confirmation');
            })
            .error(function(data){
                $state.go('error')
            })
        };

        resetMethods.password_reset = function(data){
            $http.post(customUrl.url + '/api/user_profile/password_reset/', data)
            .success(function(data){
                $state.go('reset-success');
            })
//            .error(function(data){
//                $state.go('error')
//            })
        };
        return resetMethods;
    }])

    .factory('sessionInjector', ['$injector', function($injector) {
        
        var sessionInjector = {
            request: function(config) {
                var user = $injector.get('UserService');
                var state = $injector.get('$state');
                if (user.isAuthenticated() && state !== 'page.login' && state !== '') {
                  var token = user.token();
                  if (token.bearer) {
                      config.headers['Authorization'] = 'Bearer ' + token.bearer;
                  } else if (token.token) {
                      config.headers['Authorization'] = 'Token ' + token.token;
                  } else if (token) {
                      config.headers['Authorization'] = 'Token ' + token;
                  }
                }
                return config;
            }
        };
      return sessionInjector;
  }])

  .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('sessionInjector');
  }]);

  // Common object accessibility
  commonConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
  function commonConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

    var app = angular.module('naut');
    app.controller = $controllerProvider.register;
    app.directive  = $compileProvider.directive;
    app.filter     = $filterProvider.register;
    app.factory    = $provide.factory;
    app.service    = $provide.service;
    app.constant   = $provide.constant;
    app.value      = $provide.value;

  }

  // Lazy load configuration
  lazyLoadConfig.$inject = ['$ocLazyLoadProvider', 'VENDOR_ASSETS'];
  function lazyLoadConfig($ocLazyLoadProvider, VENDOR_ASSETS) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: VENDOR_ASSETS.modules
    });

  }

})();


