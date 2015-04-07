/*
 * Main app file
 */
var app = angular.module('mainApp', [
    'firebase',
    'ui.router',
])
        .constant("config", {
            "pageTitle": "DjenChat - ",
            "firebaseAppUrl": "http://djenchat.firebase.com"
        })
        .config(['$stateProvider', '$urlRouterProvider',function(stateProvider, urlRouterProvider) {
                stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: app.config.viewPath + '/thread/index.html',
                            controller: 'threadListCtrl'
                        })
                        .state('list', {
                            url: '/thread/',
                            templateUrl: app.config.viewPath + '/thread/index.html',
                            controller: 'threadIndexCtrl'
                        })
                        .state('view', {
                            url: '/thread/:thread_id',
                            templateUrl: app.config.viewPath + '/thread/view.html',
                            controller: 'threadViewCtrl'
                        })
                        .state('create', {
                            url: '/create',
                            templateUrl: app.config.viewPath + '/thread/view.html',
                            controller: 'threadCreateCtrl'
                        })
                        ;
//                urlRouterProvider.otherwise('/home');
                urlRouterProvider.otherwise('/');
            }])
        .run(['$rootScope', '$state', '$stateParams', 'config', function(rootScope, state, stateParams, config) {
                rootScope.$state = state;
                rootScope.pageTitle = config.pageTitle;
                return rootScope.$stateParams = stateParams;
            }])
        .service('FbRef', ['config.firebaseAppUrl', Firebase]);
