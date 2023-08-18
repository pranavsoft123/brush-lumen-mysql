(function() {
    'use strict';
    var routeConfig = ['$stateProvider', '$urlRouterProvider', '$httpProvider','localStorageServiceProvider',
        function($stateProvider, $urlRouterProvider,$httpProvider,localStorageServiceProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'ui/dashboard/partials/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: 'login'
                })
                .state('logout', {
                    url: '/logout',
                    controller: 'logoutCtrl',
                    controllerAs: 'logout'
                })
                .state('forgotPassword', {
                    url: '/forgotPassword',
                    templateUrl: 'ui/dashboard/partials/forgotpassword/forgotpassword.html',
                    controller: 'loginCtrl',
                    controllerAs: 'forgotPassword'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'ui/dashboard/partials/register/register.html',
                    controller: 'registerCtrl',
                    controllerAs: 'register'
                })
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'ui/dashboard/partials/dashboard/index.html',
                    controller: 'dashboardCtrl',
                    controllerAs: 'dashboard'
                })
                .state('dashboard.alerts', {
                    url: 'alerts',
                    templateUrl: 'ui/dashboard/partials/dashboard/alerts/alerts.html'
                })
                .state('dashboard.users', {
                    url: 'users',
                    controller: 'usersCtrl',
                    controllerAs: 'users',
                    templateUrl: 'ui/dashboard/partials/dashboard/users/users.html'
                })
                .state('dashboard.profile', {
                    url: 'profile',
                    templateUrl: 'ui/dashboard/partials/dashboard/profile/profile.html',
                    controller: 'profileCtrl',
                    controllerAs: 'profile'
                })
                .state('dashboard.resetPassword', {
                    url: 'resetPassword',
                    templateUrl: 'ui/dashboard/partials/dashboard/resetPassword/resetPassword.html',
                    controller: 'resetPasswordCtrl',
                    controllerAs: 'resetPassword'
                })
                .state('dashboard.api', {
                    url: 'api',
                    templateUrl: 'ui/dashboard/partials/dashboard/api/api.html'
                })
                .state('dashboard.config', {
                    url: 'config',
                    templateUrl: 'ui/dashboard/partials/dashboard/config/config.html',
                    controller: 'configCtrl',
                    controllerAs: 'config'
                })
                .state('dashboard.config.roles', {
                    url: '/roles',
                    templateUrl: 'ui/dashboard/partials/dashboard/config/roles/roles.html',
                    controller: 'rolesCtrl',
                    controllerAs: 'roles'
                })
                .state('dashboard.healthcheck', {
                    url: 'healthcheck',
                    templateUrl: 'ui/dashboard/partials/dashboard/healthcheck/healthcheck.html',
                    controller: 'healthCheckCtrl as vm'
                });
            $urlRouterProvider.otherwise('/login');
            localStorageServiceProvider.setPrefix('brush');
            $httpProvider.interceptors.push('tokenInjector');
        }];
        
    app.config(routeConfig);
})();