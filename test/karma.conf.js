// Karma configuration
// Generated on 2016-05-14

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'bower_components/angular-file-upload/angular-file-upload.min.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/skycons/skycons.js',
      'bower_components/angular-skycons/angular-skycons.js',
      'bower_components/angular-smart-table/dist/smart-table.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      'bower_components/moment/moment.js',
      'bower_components/fullcalendar/dist/fullcalendar.js',
      'bower_components/angular-ui-calendar/src/calendar.js',
      'bower_components/angular-ui-grid/ui-grid.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-ui-select/dist/select.js',
      'bower_components/angular-ui-utils/ui-utils.js',
      'bower_components/angular-xeditable/dist/js/xeditable.js',
      'bower_components/angularjs-toaster/toaster.js',
      'bower_components/bootstrap-daterangepicker/daterangepicker.js',
      'bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js',
      'bower_components/bootstrap-slider/bootstrap-slider.js',
      'bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
      'bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
      'bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/flot/jquery.flot.js',
      'bower_components/flot-spline/js/jquery.flot.spline.js',
      'bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
      'bower_components/footable/js/footable.js',
      'bower_components/html5sortable/jquery.sortable.js',
      'bower_components/jquery_appear/jquery.appear.js',
      'bower_components/ng-grid/build/ng-grid.js',
      'bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/oclazyload/dist/ocLazyLoad.min.js',
      'bower_components/screenfull/dist/screenfull.js',
      'bower_components/textAngular/dist/textAngular.min.js',
      'bower_components/venturocket-angular-slider/build/angular-slider.js',
      'bower_components/videogular/videogular.js',
      'bower_components/videogular-buffering/buffering.js',
      'bower_components/videogular-controls/controls.js',
      'bower_components/videogular-ima-ads/ima-ads.js',
      'bower_components/videogular-overlay-play/overlay-play.js',
      'bower_components/videogular-poster/poster.js',
      'bower_components/waves/dist/waves.min.js',
      'bower_components/angular-ui-load/ui-load.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
