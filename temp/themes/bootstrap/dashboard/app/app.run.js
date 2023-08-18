(function() {
    'use strict';
    var runBlock = ['$http', '$rootScope', '$state', 'localStorageService','$uibModalStack',
    function ($http, $rootScope, $state, localStorageService,$uibModalStack) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            if(toState.name!=='login'){
                if(!localStorageService.get('user')){
                    $state.go('login');
                }
            }
            $uibModalStack.dismissAll();
        });
    }];
    app.run(runBlock);
})();
