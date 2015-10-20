/**=========================================================
 * Module: ListViewController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('ListViewController', ListViewController);
    
    function ListViewController($resource) {

      var vm = this;
      vm.students = 
        [{name: 'john'},
         {name: 'bill'},
         {name: 'fred'},
         {name: 'bob'},
         {name: 'larry'}]


      // $resource('server/userlist.json').query()$promise.then(function(students) {
      // 	vm.students = students;
      // });

  }

  ListViewController.$inject = ['$resource'];

})();
// why did he isntantiate the call in datatables