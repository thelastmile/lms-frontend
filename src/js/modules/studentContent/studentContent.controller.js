/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentContentController', StudentContentController);
    
    StudentContentController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService', '$sce', '$stateParams'];
    function StudentContentController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, $sce, $stateParams) {
      var scc = this;
      if (!$rootScope.currentContentType){
        if ($stateParams.lesson){
          $rootScope.currentContentType=$stateParams.lesson; 
        } else {
          $rootScope.currentContentType=0;
        }
      }

      if (!$rootScope.currentModule){
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
          poster: "http://127.0.0.1:3000/app/img/1x1.png"
        }
      };


      scc.onPlayerReady = function(API) {
        scc.API = API;
      };

      scc.setVideo = function(current_video) {
        scc.current_video = current_video;
        scc.API.stop();
        scc.API.clearMedia();
        var tmp_source = [{src: $sce.trustAsResourceUrl($rootScope.url+current_video.file_url), type: "video/mp4"}];
        var tmp_poster = {
          poster: "http://127.0.0.1:3000/app/img/1x1.png"
        };
        
        scc.config.plugins = tmp_poster;

        scc.config.sources = tmp_source;

        scc.API.play();

        //var result = scc.API.changeSource(tmp_source);
      };

    }
})();
