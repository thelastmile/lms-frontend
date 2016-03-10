/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentContentController', StudentContentController);
    
    StudentContentController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService', 'HomeContentService', '$sce', '$stateParams','AdminCustomContentType','customUrl'];
    function StudentContentController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, HomeContentService, $sce, $stateParams, AdminCustomContentType, customUrl) {
      var scc = this;

      AdminCustomContentType.get().success(function(data){
        $scope.customcontenttypes = data;
      });

      if (typeof $scope.content == 'undefined' && typeof $scope.lesson == 'undefined'){
        $rootScope.currentModule = 0;
        $rootScope.currentContentType = 0;
        $scope.content = 0;
        $scope.lesson = 0;
      }

      if (typeof $rootScope.currentContentType == 'undefined'){
        if ($stateParams.lesson){
          $rootScope.currentContentType = 9;
        } else {
          $rootScope.currentContentType=1;
        }
      }

      if (typeof $rootScope.currentModule == 'undefined'){
        if ($stateParams.content){
          $rootScope.currentModule=$stateParams.content; 
        } else {
          $rootScope.currentModule=0;
        }
      }

      scc.API = null;
      
      scc.getModule = function(){
        return $rootScope.currentModule;
      }

      HomeContentService.get().success(function(data){
        $rootScope.homeContent = data[0];
      });

      scc.viewModule = function(){
        vm.lesson = {};
        vm.selectedLesson = {}
        vm.LFILEediting = false;
      }

      scc.videos = [
        {
          sources: []
        }
      ];

      scc.config = {
        autoHide: false,
        autoHideTime: 3000,
        //sources: scc.videos[0].sources,
        theme: {
          url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
        },
        plugins: {
          poster: customUrl.url+"/app/img/1x1.png"
        }
      };


      scc.onPlayerReady = function(API) {
        scc.API = API;
      };

      scc.setVideo = function(current_video) {
        scc.current_video = current_video;
        scc.API.stop();
        scc.API.clearMedia();
        var tmp_source = [{src: $sce.trustAsResourceUrl(current_video.file_url), type: "video/mp4"}];
        var tmp_poster = {
          poster: "/app/img/1x1.png"
        };
        
        scc.config.plugins = tmp_poster;

        scc.config.sources = tmp_source;

        scc.API.play();
      };

      $rootScope.iframeActive = false;
      scc.getFullURL = function(){
        if (!scc.projUrl) {return "";}
        var custom_url = customUrl.backendStaticUrl+scc.projUrl;
        return $sce.getTrustedResourceUrl(custom_url);
      }

    }
})();
