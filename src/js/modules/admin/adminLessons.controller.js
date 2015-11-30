/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('AdminLessonsController', AdminLessonsController);
    
    AdminLessonsController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'AdminCustomContentType','AdminLessonContents','Upload'];
    function AdminLessonsController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, AdminCustomContentType, AdminLessonContents, Upload) {
      var vm = this;
      AdminLessonsService.get().success(function(data){
        $scope.lessons = data;
      });

      AdminCoursesService.get().success(function(data){
        $scope.courses = data;
      });

      AdminCustomContentType.get().success(function(data){
        $scope.customcontenttypes = data;
      });

      AdminLessonContents.get().success(function(data){
        $scope.lessoncontents = data;
      });

      vm.getFilename = function (data){
        data.name = data.file.name;
      }

      vm.LSNsave = function () {
        AdminLessonsService.post(vm.lesson).success(function(data){
          vm.lesson = {};
          $scope.lessons.push(data);
          toasty.success({
            title: 'Saved',
            msg: 'New Lesson Added',
            sound: false,
            clickToClose: true,
          });
        }).error(function (error){
          toasty.error({
              title: 'Error',
              msg: 'Ensure you added all values',
              sound: false,
              clickToClose: true,
            });
        });
      }

      vm.LSNeditSave = function () {
        AdminLessonsService.put(vm.selectedLesson).success(function(data){
          vm.lesson = {};
          toasty.success({
            title: 'Saved',
            msg: 'Lesson Saved',
            sound: false,
            clickToClose: true,
          });
        }).error(function (error){
          toasty.error({
              title: 'Error',
              msg: 'Ensure you\'ve added all values',
              sound: false,
              clickToClose: true,
            });
        });
      }

      // If not editing, enables edit mote
      // If editing, saves and disables editing
      vm.LSNediting = false;
      vm.LSNedit = function () {
        if (vm.LSNediting == false) {
          vm.LSNediting = true;
        }
      }

      vm.removeLesson = function(item,index){
        AdminLessonsService.delete_single(item.id);
        $scope.lessons.splice(index, 1);
      }

      vm.removeCourse = function(item,index){
        AdminCoursesService.delete_single(item.id);
        $scope.courses.splice(index, 1);
      }

      vm.removeLessonContnet = function(item,index){
        AdminLessonContents.delete_single(item.id);
        $scope.lessoncontents.splice(index, 1);
      }

      vm.CRSediting = false;
      vm.CRSeditSave = function () {
        if (vm.CRSediting) {
          vm.course = {};
          AdminCoursesService.put(vm.selectedCourse).success(function (){
            toasty.success({
              title: 'Saved',
              msg: 'Course Updated',
              sound: false,
              clickToClose: true,
            });
          });
        } else {
          vm.CRSediting = true;
        }
      }

      // If not editing, enables edit mote
      // If editing, saves and disables editing
      vm.CRSedit = function () {
        if (vm.CRSediting == false) {
          vm.CRSediting = true;
        }
      }

      vm.CRSsave = function () {
        AdminCoursesService.post(vm.course).success(function(data){
          vm.course = {};
          $scope.courses.push(data);
          toasty.success({
            title: 'Saved',
            msg: 'New Course Added',
            sound: false,
            clickToClose: true,
          });
        }).error(function (error){
          toasty.error({
              title: 'Error',
              msg: 'Ensure you added all values',
              sound: false,
              clickToClose: true,
            });
        });

      }

      vm.LFILEsave = function () {
        AdminLessonContents.post_file(vm.lessonContents)
        .then(function (resp) {
            vm.selectedLessonContent = resp.data;
            vm.lessonContents = resp.data;
            vm.LFILEediting = true;
            $scope.lessoncontents.push(vm.lessonContents);
            toasty.success({
              title: 'Saved',
              msg: 'New Lesson Content Added',
              sound: false,
              clickToClose: true,
            });
        }, function (resp) {
            toasty.error({
              title: 'Error',
              msg: 'Please ensure you\'ve filled out all fields',
              sound: false,
              clickToClose: true,
            });
        }, function (evt) {
            // USE THIS TO SHOW PROGRESS IF INCLINED
            //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
      }

      vm.LFILEediting = false;
      vm.LFILEedit = function () {
        if (vm.LFILEediting == false) {
          vm.LFILEediting = true;
        }
        console.log(vm.selectedLessonContent);
      }

      vm.LFILEselectIndexPath = function (){
        console.log(this);
      }

      vm.LFILEeditSave = function () {
        AdminLessonContents.post_file(vm.lessonContents)
        .then(function (resp) {
            $scope.lessoncontents.push(vm.lessonContents);
            toasty.success({
              title: 'Saved',
              msg: 'New Lesson Content Added',
              sound: false,
              clickToClose: true,
            });
        }, function (resp) {
            toasty.error({
              title: 'Error',
              msg: 'Please ensure you\'ve filled out all fields',
              sound: false,
              clickToClose: true,
            });
        }, function (evt) {
            // USE THIS TO SHOW PROGRESS IF INCLINED
            //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
      }

    }
})();
