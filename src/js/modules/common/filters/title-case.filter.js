/**=========================================================
 * Module: TitleCaseFilter.js
 * Convert any case to title
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .filter('titlecase', titlecase)
        .filter('unsafe', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        });

        function titlecase() {
            return filterFilter;

            function filterFilter(params) {
              params = ( params === undefined || params === null ) ? '' : params;
              return params.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
                  return ch.toUpperCase();
              });
            }
        }

})();
