/*
 * Main app file
 */
var app = angular.module('mainApp', [
    'firebase',
    'ui.router',
    'firebaseService'
])
        .constant("config", {
            "pageTitle": "DjenChat - ",
            "firebaseAppUrl": "https://djenchat.firebaseio.com"
        })
        .config(['$stateProvider', '$urlRouterProvider',function(stateProvider, urlRouterProvider) {
                stateProvider
//                        .state('home', {
//                            url: '/',
//                            templateUrl: app.config.viewPath + '/thread/index.html',
//                            controller: 'threadCtrl'
//                        })
                        .state('list', {
                            url: '/thread/list',
                            templateUrl: app.config.viewPath + '/thread/index.html',
                            controller: 'threadCtrl'
                        })
                        .state('view', {
                            url: '/thread/:thread_id',
                            templateUrl: app.config.viewPath + '/thread/index.html',
                            controller: 'threadCtrl'
                        })
                        .state('create', {
                            url: '/thread/create',
                            templateUrl: app.config.viewPath + '/thread/create.html',
                            controller: 'threadCtrl'
                        });
                urlRouterProvider.otherwise('thread/list');
//                urlRouterProvider.otherwise('/');
            }])
        .run(['$rootScope', '$state', '$stateParams', 'config', function(rootScope, state, stateParams, config) {
                rootScope.$state = state;
                rootScope.pageTitle = config.pageTitle;
                return rootScope.$stateParams = stateParams;
            }])
//        .service('FbRef', ['app.config.firebaseAppUrl', Firebase]);
