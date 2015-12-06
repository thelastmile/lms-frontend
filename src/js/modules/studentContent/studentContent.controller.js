/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('StudentContentController', StudentContentController);
    
    StudentContentController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'StudentMenuService', '$sce'];
    function StudentContentController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, StudentMenuService, $sce) {
      var scc = this;

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
          sources: [
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
          ]
        },
        {
          sources: [
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
          ]
        }
      ];
 
      scc.config = {
        autoHide: false,
        autoHideTime: 3000,
        autoPlay: false,
        sources: scc.videos[0].sources,
        theme: {
          url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
        },
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };


      scc.onPlayerReady = function(API) {
        scc.API = API;
      };

      scc.setVideo = function(index) {
        scc.API.stop();
        scc.config.sources = scc.videos[index].sources;
      };

    }
})();
