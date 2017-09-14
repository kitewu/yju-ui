(function() {
    'use strict';

    angular
        .module('phoenix')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('index', {
                url: "/index",
                templateUrl: "app/module/common/common.html",
                controller: "commonCtrl"
            })
            .state('login', {
                url: "/login",
                templateUrl: "app/module/login/login.html",
                controller: "loginCtrl"
            })
            .state('index.main', {
                url: "/main",
                templateUrl: "app/module/main/main.html",
                data: { pageTitle: 'Example view' }
            })
            .state('index.about', {
                url: "/about",
                templateUrl: "app/module/about/about.html",
                controller: "aboutCtrl"
            })
            .state('index.courseList', {
                url: "/courseList",
                templateUrl: "app/module/courseList/courseList.html",
                // controller: "mainController"
            });

        $urlRouterProvider.otherwise('/index/main');
    }

})();