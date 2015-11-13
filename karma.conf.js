// Karma configuration
// Generated on Tue Nov 03 2015 11:29:56 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'src/js/app.module.js',
        'tests/*.js',//new
        'vendor/modernizr/modernizr.js',
        'vendor/jquery/dist/jquery.js',
        'vendor/angular-route/angular-route.js',
        'vendor/angular-cookies/angular-cookies.js',
        'vendor/angular-animate/angular-animate.js',
        'vendor/angular-touch/angular-touch.js',
        'vendor/angular-sanitize/angular-sanitize.js',
        'vendor/angular-resource/angular-resource.js',
        'vendor/angular-translate/angular-translate.js',
        'vendor/ngstorage/ngStorage.js',
        'vendor/angular-ui-router/release/angular-ui-router.js',
        'vendor/angular-ui-utils/ui-utils.js',
        'vendor/angular-translate-loader-url/angular-translate-loader-url.js',
        'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'vendor/angular-translate-storage-local/angular-translate-storage-local.js',
        'vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
        'vendor/angular-dynamic-locale/dist/tmhDynamicLocale.js',
        'vendor/oclazyload/dist/ocLazyLoad.js',
        'vendor/angular-loading-bar/build/loading-bar.js',                                                               
        'src/js/app.module.js',
        'src/js/modules/auth/auth.controller.js',
        'src/js/modules/auth/auth.factory.js',
        'src/js/modules/apps/calendar.controller.js',
        'src/js/modules/apps/chat.controller.js',
        'src/js/modules/apps/mailbox.controller.js',
        'src/js/modules/apps/tasks.controller.js',
        'src/js/modules/cards/cards.controller.js',
        'src/js/modules/charts/flot-chart-options.services.js',
        'src/js/modules/charts/flot-chart.controller.js',
        'src/js/modules/charts/flot-chart.directive.js',
        'src/js/modules/charts/pie-charts.controller.js',
        'src/js/modules/charts/sparklines.directive.js',
        'src/js/modules/colors/colors.constant.js',
        'src/js/modules/colors/colors.run.js',
        'src/js/modules/colors/colors.service.js',
        'src/js/modules/common/directives/animate-enabled.directive.js',
        'src/js/modules/common/directives/chained-animation.directive.js',
        'src/js/modules/common/directives/check-all-table.directive.js',
        'src/js/modules/common/directives/fullscreen.directive.js',
        'src/js/modules/common/directives/reset-key.directive.js',
        'src/js/modules/common/filters/title-case.filter.js',
        'src/js/modules/common/services/browser-detection.service.js',
        'src/js/modules/common/services/support.service.js',
        'src/js/modules/common/services/touch-drag.service.js',
        'src/js/modules/core/config.js',
        'src/js/modules/core/constants.js',
        'src/js/modules/core/core.controller.js',
        'src/js/modules/core/core.run.js',
        'src/js/modules/dashboard/dashboard.controller.js',
        'src/js/modules/forms/file-style.directive.js',
        'src/js/modules/forms/file-upload.controller.js',
        'src/js/modules/forms/form-input.controller.js',
        'src/js/modules/forms/form-validation.controller.js',
        'src/js/modules/forms/form-xeditable.controller.js',
        'src/js/modules/forms/image-crop.controller.js',
        'src/js/modules/forms/slider.controller.js',
        'src/js/modules/forms/ui-select.controller.js',
        'src/js/modules/icons/climacon.directive.js',
        'src/js/modules/layermorph/layer-morph.directive.js',
        'src/js/modules/layermorph/layer-morph.service.js',
        'src/js/modules/layout/header-nav.controller.js',
        'src/js/modules/layout/ui-sidebar.directive.js',
        'src/js/modules/loadingbar/loadingbar.config.js',
        'src/js/modules/loadingbar/loadingbar.run.js',
        'src/js/modules/maps/google-map.controller.js',
        'src/js/modules/maps/vector-map.controller.js',
        'src/js/modules/maps/vector-map.directive.js',
        'src/js/modules/ripple/ripple.directive.js',
        'src/js/modules/routes/routes.config.js',
        'src/js/modules/routes/routes.provider.js',
        'src/js/modules/routes/routes.run.js',
        'src/js/modules/routes/vendor.constants.js',
        'src/js/modules/settings/settings.controller.js',
        'src/js/modules/settings/settings.service.js',
        'src/js/modules/tables/angular-table.controller.js',
        'src/js/modules/tables/datatables.controller.js',
        'src/js/modules/tables/responsive-table.controller.js',
        'src/js/modules/tables/table-xeditable.controller.js',
        'src/js/modules/translator/localization.config.js',
        'src/js/modules/translator/localization.controller.js',
        'src/js/modules/translator/translator.config.js',
        'src/js/modules/translator/translator.service.js',
        'src/js/modules/ui/alerts.controller.js',
        'src/js/modules/ui/buttons.controller.js',
        'src/js/modules/ui/carousel.controller.js',
        'src/js/modules/ui/datepicker.controller.js',
        'src/js/modules/ui/modal.controller.js',
        'src/js/modules/ui/nav-tree.controller.js',
        'src/js/modules/ui/nestable.controller.js',
        'src/js/modules/ui/nestable.directive.js',
        'src/js/modules/ui/notification.controller.js',
        'src/js/modules/ui/pagination.controller.js',
        'src/js/modules/ui/popover.controller.js',
        'src/js/modules/ui/portlets.directive.js',
        'src/js/modules/ui/progress.controller.js',
        'src/js/modules/ui/rating.controller.js',
        'src/js/modules/ui/scrollable.directive.js',
        'src/js/modules/ui/sortable.controller.js',
        'src/js/modules/ui/sweetalert.controller.js',
        'src/js/modules/ui/timepicker.controller.js',
        'src/js/modules/ui/toaster.controller.js',
        'src/js/modules/ui/tooltip.config.js',
        'src/js/modules/ui/tooltip.controller.js',
        'src/js/modules/ui/typeahead.controller.js',
        'app/js/templates.js',
        'src/js/modules/viewStudents/viewStudents.controller.js',
        'src/js/modules/viewStudents/viewStudents.services.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
