/**=========================================================
 * Module: CalendarController.js
 * This script handle the calendar demo and events creation
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('CalendarController', CalendarController);
    /* @ngInject */
    function CalendarController(colors, $http, $timeout, touchDrag) {
      var vm = this;
      vm.today = new Date();

      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      vm.calEventsPers = {
          id: 0,
          visible: true,
          className: ['fc-id-0'],
          events: [
            {id: 324, title: 'All Day Event',    start: new Date(y, m, 1) },
            {         title: 'Long Event',       start: new Date(y, m, d - 5),        end: new Date(y, m, d - 2)},
            {id: 999, title: 'Repeating Event',  start: new Date(y, m, d - 3, 16, 0),                                     allDay: false},
            {id: 999, title: 'Repeating Event',  start: new Date(y, m, d + 4, 16, 0),                                     allDay: false},
            {         title: 'Birthday Party',   start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false},
            {         title: 'Click for Google', start: new Date(y, m, 28),           end: new Date(y, m, 29),            url: 'http://google.com/'}
          ]
        };

      // event source that pulls from google.com 
      vm.eventSources = [ vm.calEventsPers];


      $http.get('http://127.0.0.1:3000/server/calendar/external-calendar.json').success(function(data) {
      
        var calEventsExt = {
          id:        2,
          visible:   true,
          color:     colors.byName('purple'),
          textColor: '#fff',
          className: ['fc-id-2'],
          events:    []
        };
      
        // -----------
        // override dates just for demo
        for(var i = 0; i < data.length; i++) {
            data[i].start = new Date(y, m, d+i, 12, 0);
            data[i].end   = new Date(y, m, d+i, 14, 0);
        }
        // -----------

        calEventsExt.events = angular.copy(data);

        vm.eventSources.push(calEventsExt);

      });

      
      /* alert on eventClick */
      vm.alertOnEventClick = function( event, allDay, jsEvent, view ){
          console.log(event.title + ' was clicked ');
      };
      /* alert on Drop */
      vm.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
         console.log('Event Droped to make dayDelta ' + dayDelta);
      };
      
      /* Change View */
      vm.renderCalendar = function() {
        //console.log('rendering');
        //vm.myCalendar.fullCalendar('render');
        //$timeout(function(){
        //calendar.fullCalendar('render');
        //calendar.fullCalendar('rerenderEvents');
        //}, 0);
        $('#my-calendar').fullCalendar('render');
        $('#my-calendar').fullCalendar('rerenderEvents');
      };

      // $scope.renderCalendar = function() {
      //  $timeout(function(){
      //       $('#calendar').fullCalendar('render');
      //       $('#calendar').fullCalendar('rerenderEvents');
      //   }, 0);
      // };

      /* config object */
      vm.uiConfig = {
        calendar:{
          height: 450,
          editable: true,
          header:{
            center: 'title',
          },
          eventClick:  vm.alertOnEventClick,
          eventDrop:   vm.alertOnDrop,
          eventResize: vm.alertOnResize,
          // Select options
          selectable: true,
          selectHelper: true,
          unselectAuto: true,
          select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
              eventData = {
                title: title,
                start: start.format(),
                end: end.format()
              };
              vm.addEvent(eventData);
            }
            // vm.myCalendar.fullCalendar( 'unselect' );
          },
          viewRender: function( view, element ) {
            touchDrag.addTo(element[0]);
          }
        }
      };

      // Language support
      // ----------------------------------- 
      vm.changeTo = 'Español';
      vm.changeLang = function() {
        if(vm.changeTo === 'Español'){
          vm.uiConfig.calendar.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
          vm.uiConfig.calendar.dayNamesShort = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
          vm.changeTo= 'English';
        } else {
          vm.uiConfig.calendar.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          vm.uiConfig.calendar.dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          vm.changeTo = 'Español';
        }
      };

    }
    CalendarController.$inject = ['colors', '$http', '$timeout', 'touchDrag'];

})();
