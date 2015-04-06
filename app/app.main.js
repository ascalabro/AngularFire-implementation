/*
 * Main app file
 */
var app = angular.module('mainApp', [
    'firebase',
    'ui.router',
])
        .constant("config", {
            "pageTitle": "DjenChat - "
        })
        .config(['$stateProvider', '$urlRouterProvider',function(stateProvider, urlRouterProvider) {
                stateProvider
                        .state('home', {
                            url: '/home',
                            templateUrl: app.config.viewPath + '/threads/index.html',
                            controller: 'threadListCtrl'
                        })
                        .state('thread.list', {
                            url: '/thread/',
                            templateUrl: app.config.viewPath + '/thread/index.html',
                            controller: 'threadIndexCtrl'
                        })
                        .state('thread.view', {
                            url: '/thread/:thread_id',
                            templateUrl: app.config.viewPath + '/thread/view.html',
                            controller: 'threadViewCtrl'
                        })
                        ;
                urlRouterProvider.otherwise('/home');
            }])
        .run(['$rootScope', '$state', '$stateParams', 'config', function(rootScope, state, stateParams, config) {
                rootScope.$state = state;
                rootScope.pageTitle = config.pageTitle;
                return rootScope.$stateParams = stateParams;
            }]);
