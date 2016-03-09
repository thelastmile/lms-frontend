(function () {
  'use strict';
  angular.module('naut')
  .factory('notes', notes);

  notes.$inject = ['$rootScope', '$http', '$window', 'customUrl','$stateParams'];
  function notes($rootScope, $http, $window, customUrl, $stateParams) {

    var userId = $rootScope.user.id;

    return {
      create: function (noteData) {
        if (noteData === undefined) {
            var noteData = [];
            noteData.body = '';
        }
        return $http.post(customUrl.url + '/api/note/', {
          title: '',
          body: noteData.body,
          object_id: 2, // ID of current module
          author: userId,
          content_type: 16 // module table
        });
      },
      create_via_instructor: function (note,student) {
        if (note === undefined) {
            var note = '';
        }
        return $http.post(customUrl.url + '/api/note/', {
          title: '',
          body: note,
          author: student.id,
          instructor_author: userId

        });
      },
      save: function (noteData) {
        return $http.put(customUrl.url + '/api/note/' + noteData.id + '/', {
          title: noteData.title,
          body: noteData.body,
          pk: noteData.id,
          object_id: 2, // ID of current module
          author: userId,
          content_type: 16 // module table
        });
      },
      fetchAll: function (byUser) {
        if ($stateParams.selectedStudent) {
          var userId = $stateParams.selectedStudent;
        }
        if (userId) {
          return $http.get(customUrl.url + '/api/note/?student='+userId);
        } else {
          return $http.get(customUrl.url + '/api/note/');
        }
      }
    };
  }
})();