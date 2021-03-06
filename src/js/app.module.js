/*!
 * 
 * Naut - Bootstrap Admin Theme + AngularJS
 * 
 * Author: @geedmo
 * Website: http://geedmo.com
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

angular
  .module('naut', [
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'ui.tinymce',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'tmh.dynamicLocale',
    'pascalprecht.translate',
    'angular-toasty',
    'ngFileUpload',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster',
    'com.2fdevs.videogular.plugins.buffering',
    'ngBusy',                                   // Show messages when GET/POST/PUT etc
    'oitozero.ngSweetAlert',                    // Nice alerts
    'environment'                               // Set backend path and more based on url
]);
