(function () {
  'use strict';
  angular.module('naut')
  .factory('notes', notes);

  notes.$inject = ['$rootScope', '$http', '$window', 'customUrl'];
  function notes($rootScope, $http, $window, customUrl) {

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
        if ($rootScope.selectedStudent) {
          userId = $rootScope.selectedStudent.id;
        }
        console.log(byUser);
        return $http.get(customUrl.url + '/api/note/')
        .then(function (response) {
          if (byUser) {
            // Ideally, this would be filtered on the Django side
            return response.data.filter(function (note) {
              return note.author === userId;
            });
          } else {
            return response.data;
          }
        });
      }
    };
  }
})();