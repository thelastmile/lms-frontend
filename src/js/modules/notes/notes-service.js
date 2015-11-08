(function () {
  'use strict';
  angular.module('naut')
  .factory('notes', notes);

  notes.$inject = ['$http', '$window', 'customUrl'];
  function notes($http, $window, customUrl) {
    var id = Number($window.sessionStorage.getItem('id'));
    return {
      create: function (noteData) {
        return $http.post(customUrl.url + '/api/note/', {
          title: noteData.title,
          body: noteData.body,
          object_id: 2,
          author: id,
          content_type: 16 // module
        });
      },
      fetchAll: function () {
        return $http.get(customUrl.url + '/api/note/')
        .then(function (response) {
          return response.data.filter(function (note) {
            return note.author === id;
          });
        });
      }
    };
  }
})();