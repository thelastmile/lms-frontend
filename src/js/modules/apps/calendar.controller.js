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
      vm.y = y;

      vm.selectedYear = y;

      // vm.calEventsPers = {
      //     id: 0,
      //     visible: true,
      //     className: ['fc-id-0'],
      //     events: [
      //       {id: 324, title: 'All Day Event',    start: new Date(y, m, 1) },
      //       {         title: 'Long Event',       start: new Date(y, m, d - 5),        end: new Date(y, m, d - 2)},
      //       {id: 999, title: 'Repeating Event',  start: new Date(y, m, d - 3, 16, 0),                                     allDay: false},
      //       {id: 999, title: 'Repeating Event',  start: new Date(y, m, d + 4, 16, 0),                                     allDay: false},
      //       {         title: 'Birthday Party',   start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false},
      //       {         title: 'Click for Google', start: new Date(y, m, 28),           end: new Date(y, m, 29),            url: 'http://google.com/'}
      //     ]
      //   };

      // // event source that pulls from google.com 
      // vm.eventSources = [ vm.calEventsPers];


      // $http.get('http://127.0.0.1:3000/server/calendar/external-calendar.json').success(function(data) {
      
      //   var calEventsExt = {
      //     id:        2,
      //     visible:   true,
      //     color:     colors.byName('purple'),
      //     textColor: '#fff',
      //     className: ['fc-id-2'],
      //     events:    []
      //   };
      
      //   // -----------
      //   // override dates just for demo
      //   for(var i = 0; i < data.length; i++) {
      //       data[i].start = new Date(y, m, d+i, 12, 0);
      //       data[i].end   = new Date(y, m, d+i, 14, 0);
      //   }
      //   // -----------

      //   calEventsExt.events = angular.copy(data);

      //   vm.eventSources.push(calEventsExt);

      // });

      vm.eventSources = [];

      vm.changeYear = function(year) {
        vm.uiConfig.calendar_1.defaultDate = year+'-01-01';
        vm.uiConfig.calendar_2.defaultDate = year+'-02-01';
        vm.uiConfig.calendar_3.defaultDate = year+'-03-01';
        vm.uiConfig.calendar_4.defaultDate = year+'-04-01';
        vm.uiConfig.calendar_5.defaultDate = year+'-05-01';
        vm.uiConfig.calendar_6.defaultDate = year+'-06-01';
        vm.uiConfig.calendar_7.defaultDate = year+'-07-01';
        vm.uiConfig.calendar_8.defaultDate = year+'-08-01';
        vm.uiConfig.calendar_9.defaultDate = year+'-09-01';
        vm.uiConfig.calendar_10.defaultDate = year+'-10-01';
        vm.uiConfig.calendar_11.defaultDate = year+'-11-01';
        vm.uiConfig.calendar_12.defaultDate = year+'-12-01';
      };
      
      /* alert on eventClick */
      vm.alertOnEventClick = function( event, allDay, jsEvent, view ){
         //console.log(event.title + ' was clicked ');
      };
      /* alert on Drop */
      vm.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
         //console.log('Event Droped to make dayDelta ' + dayDelta);
      };
      
      /* Change View */
      vm.renderCalendar = function() {
        //console.log('rendering');
        //vm.myCalendar.fullCalendar('render');
        //$timeout(function(){
        //calendar.fullCalendar('render');
        //calendar.fullCalendar('rerenderEvents');
        //}, 0);
        $('.calendars').fullCalendar('render');
        //$('.calendars').fullCalendar('rerenderEvents');
      };

      // $scope.renderCalendar = function() {
      //  $timeout(function(){
      //       $('#calendar').fullCalendar('render');
      //       $('#calendar').fullCalendar('rerenderEvents');
      //   }, 0);
      // };

      /* config object */
      vm.uiConfig = {
        calendar_1:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-01-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_2:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-02-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_3:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-03-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_4:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-04-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_5:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-05-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_6:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-06-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_7:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-07-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_8:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-08-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_9:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-09-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_10:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-10-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_11:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-11-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        },
        calendar_12:{
          height: 230,
          editable: false,
          header:{
              left:   'false',
              center: 'title',
              right:  'false'
          },
          selectable: false,
          selectHelper: false,
          unselectAuto: true,
          fixedWeekCount: false,
          defaultDate: '2015-12-01',
          dayNames: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'],
          dayNamesShort: ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa']
        }
      };
    }
    CalendarController.$inject = ['colors', '$http', '$timeout', 'touchDrag'];

})();
