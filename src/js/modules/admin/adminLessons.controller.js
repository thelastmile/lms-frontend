/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('AdminLessonsController', AdminLessonsController);
    
    AdminLessonsController.$inject = ['$rootScope', '$scope', 'colors', '$timeout' ,'$window','AdminLessonsService','AdminCoursesService', 'toasty', 'AdminCustomContentType','AdminLessonContents','Upload', 'SweetAlert', '$state'];
    function AdminLessonsController($rootScope, $scope, colors, $timeout, $window, AdminLessonsService, AdminCoursesService, toasty, AdminCustomContentType, AdminLessonContents, Upload, SweetAlert, $state) {
      var vm = this;
      $scope.lessoncontents = [];

      AdminLessonsService.get().success(function(data){
        $scope.lessons = data;
      });

      AdminCoursesService.get().success(function(data){
        $scope.courses = data;
      });

      AdminCustomContentType.get().success(function(data){
        $scope.customcontenttypes = data;
      });

      AdminLessonContents.get_ultralite().success(function(data){
        $scope.lessoncontents = data;
      });

      $scope.remove = function(item) {
        $state.go($state.current, {}, {reload: true});
      }

      vm.editMode = function(){
        vm.lesson = {};
        vm.selectedLesson = {}
        vm.LFILEediting = false;
      }

      vm.deriveData = function (data){
        data.name = data.file.name;
        var extension = data.name.split('.').pop();
        var ct = "Asset";
        if (extension.toUpperCase() === 'ZIP'){
          ct = 'Lesson';
        }

        if (extension.toUpperCase() === 'HTML'){
          ct = 'Lesson';
        }

        if (extension.toUpperCase() === 'PNG'){
          ct = 'Image';
        }

        if (extension.toUpperCase() === 'JPG'){
          ct = 'Image';
        }

        if (extension.toUpperCase() === 'JPEG'){
          ct = 'Image';
        }

        if (extension.toUpperCase() === 'MP4'){
          ct = 'Video';
        }

        data.content_type = $rootScope.val2key(ct,$scope.customcontenttypes);
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
        AdminLessonsService.delete_single(item.id).success(function (){
            toasty.success({
              title: 'Success',
              msg: 'Module Deleted',
              sound: false,
              clickToClose: true,
            });
          });
        $scope.lessons.splice(index, 1);
      }

      vm.removeCourse = function(item,index){
        AdminCoursesService.delete_single(item.id).success(function (){
            toasty.success({
              title: 'Success',
              msg: 'Course Deleted',
              sound: false,
              clickToClose: true,
            });
          });
        $scope.courses.splice(index, 1);
      }

      vm.removeLessonContent = function(item,index){
        AdminLessonContents.delete_single(item.id).success(function (){
            toasty.success({
              title: 'Success',
              msg: 'Lesson Content Deleted',
              sound: false,
              clickToClose: true,
            });
          });
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

      vm.selectIndex = function (index) {
        // do something if we select an index
      }

      vm.LFILEsave = function () {
        if (vm.lessonContents){        
          if (vm.lessonContents.module == 'g'){
            vm.lessonContents.is_global = true;
            var lc_module_copy = vm.lessonContents.module;
            delete vm.lessonContents.module;
          }

        } else {
          vm.lessonContents = {};
        }

        AdminLessonContents.post_file(vm.lessonContents)
        .then(function (resp) {
            vm.selectedLessonContent = resp.data;
            vm.lessonContents = resp.data;
            vm.LFILEediting = true;
            var html_text = "";
            var index_dropdown_options = [];
            var index_file_list = false;
            if (resp.data.index_file_list) {
              var index_file_list = JSON.parse(resp.data.index_file_list);
              for (var i in index_file_list){
                //html_text += "<a href='"+index_file_list[i]+"'>"+index_file_list[i]+"</a><br>";
                index_dropdown_options.push({value: index_file_list[i], text: index_file_list[i]});
              }
            }
            var index_dropdown = { class:'form-control', id: 'index_select', type: 'select', options: index_dropdown_options};
            if (Object.keys(index_file_list).length > 0) {
              swal.withForm({
                html: true,
                type: 'success',
                title: 'ZIP Archive Extracted',
                text: '<h3>Please select your default index file</h3>',
                showCancelButton: false,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Select Index and Close',
                closeOnConfirm: true,
                formFields: [
                   index_dropdown
                ]}, function(isConfirm) {
                // do whatever you want with the form data
                //vm.lessonContents.index_file = this.swalForm.index_select;
                vm.LFILEindexPath = this.swalForm.index_select;
                vm.LFILEselectIndexPath();
              });
            } else {
              SweetAlert.swal({
                title: "Data Uploaded",
                text: "All set",
                type: "success",
                showCancelButton: false,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Close",
                closeOnConfirm: true,
                html: true
              });
            }
            
            
        }, function (resp) {
            if (lc_module_copy) { vm.lessonContents.module = lc_module_copy; }
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
      }

      vm.LFILEindexPath = '';
      vm.LFILEselectIndexPath = function (){
        AdminLessonContents.patch(vm.selectedLessonContent.id,{index_file:vm.LFILEindexPath})
        .success(function(data){
          toasty.success({
              title: 'Index saved',
              msg: 'The new index linked to:<br><strong>'+data.index_file.replace(/^.*(\\|\/|\:)/, '')+'</strong>',
              sound: false,
              clickToClose: true,
              html: true,
            });
        })
        .error(function(info){
          toasty.error({
              title: 'Error',
              msg: 'We couldn\'t select this file as the index for some reason.  Please report the error along with the file you\'re trying to select',
              sound: false,
              clickToClose: true,
            });
        });
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
