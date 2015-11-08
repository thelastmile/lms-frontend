(function () {
  'use strict';
  angular.module('naut')
  .factory('notes', notes);

  notes.$inject = ['$http', '$window', 'customUrl'];
  function notes($http, $window, customUrl) {

    var userId = Number($window.sessionStorage.getItem('id'));
    return {
      create: function (noteData) {
        return $http.post(customUrl.url + '/api/note/', {
          title: noteData.title,
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
      fetchAll: function () {
        return $http.get(customUrl.url + '/api/note/')
        .then(function (response) {
          // Ideally, this would be filtered on the Django side
          return response.data.filter(function (note) {
            return note.author === userId;
          });
        });
      }
    };
  }
})();