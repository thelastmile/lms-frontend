/**=========================================================
 * Module: RoutesConfig.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .config(routesConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'RouteProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider, Route) {

      // use the HTML5 History API
      $locationProvider.html5Mode(false);

      // Default route
      $urlRouterProvider.otherwise('/page/login');

      // Application Routes States
      $stateProvider
        .state('app', {
          url: '/app?module',
          abstract: true,
          templateUrl: Route.base('app.html'),
          resolve: {
            _assets: Route.require('icons', 'screenfull', 'sparklines', 'slimscroll', 'toaster', 'animate')
          }
        })

        .state('app.dashboard', {
          url: '/dashboard',
          authenticate: true,
          templateUrl: Route.base('dashboard.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.home', {
          url: '/home',
          authenticate: true,
          templateUrl: Route.base('studentContent/home.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          },
          controller: function($stateParams, $scope) {
                $scope.content = $stateParams.content;
                $scope.lesson = $stateParams.lesson;
          }
        })

        .state('app.lesson', {
          url: '/lesson',
          ReloadOnSearch: false,
          authenticate: true,
          templateUrl: Route.base('studentContent/lessons.html'),
        })

        .state('app.code', {
          url: '/code',
          authenticate: true,
          templateUrl: Route.base('studentContent/code.html'),
        })

        .state('app.code2', {
          url: '/code2',
          authenticate: true,
          templateUrl: Route.base('studentContent/code2.html'),
        })

        .state('app.video', {
          url: '/video',
          authenticate: true,
          templateUrl: Route.base('studentContent/video.html'),
        })

        .state('app.resources', {
          url: '/resources',
          authenticate: true,
          templateUrl: Route.base('studentContent/resources.html'),
        })

        .state('app.adminLessons', {
          url: '/admin/lessons',
          authenticate: true,
          templateUrl: Route.base('adminLessons.html'),
        })

        .state('app.adminCourses', {
          url: '/admin/courses',
          authenticate: true,
          templateUrl: Route.base('adminCourses.html'),
        })

        .state('app.adminModuleContent', {
          url: '/admin/modulecontent',
          authenticate: true,
          templateUrl: Route.base('adminModuleContentList.html'),
        })

        .state('app.adminModuleContentAdd', {
          url: '/admin/modulecontent/add/',
          authenticate: true,
          templateUrl: Route.base('adminModuleContentEdit.html'),
        })

        .state('app.adminModuleContentEdit', {
          url: '/admin/modulecontent/edit/',
          authenticate: true,
          templateUrl: Route.base('adminModuleContentEdit.html'),
        })

        .state('app.adminModuleContentList', {
          url: '/admin/modulecontent/list/',
          authenticate: true,
          templateUrl: Route.base('adminModuleContentList.html'),
        })

        .state('app.viewstudents', {
          url: '/viewstudents',
          authenticate: true,
          templateUrl: Route.base('adminViewStudents.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart', 'blueimp-gallery')
          }
        })

        .state('app.edithomepage', {
          url: '/edithomepage',
          authenticate: true,
          templateUrl: Route.base('adminEditHomePage.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart', 'blueimp-gallery')
          }
        })

        .state('app.notes', {
          url: '/notes',
          authenticate: true,
          templateUrl: Route.base('adminnotes.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.studentvideo', {
          url: '/studentvideo',
          authenticate: true,
          templateUrl: Route.base('studentvideo.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.studentreadme', {
          url: '/studentreadme',
          authenticate: true,
          templateUrl: Route.base('studentreadme.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.studentcode', {
          url: '/studentcode',
          authenticate: true,
          templateUrl: Route.base('studentcode.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.studentnotes', {
          url: '/studentnotes',
          authenticate: true,
          templateUrl: Route.base('studentnotes.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.studentextras', {
          url: '/studentvideo',
          authenticate: true,
          templateUrl: Route.base('studentextras.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })

        .state('app.classoverview', {
          url: '/overview',
          authenticate: true,
          templateUrl: Route.base('classOverview.html'),
          resolve: {
            assets: Route.require('flot-chart', 'flot-chart-plugins', 'easypiechart')
          }
        })
    }

})();

