(function() {
    'use strict';
    app.controller('rolesCtrl', ['api', 'commonFactory', function(api, commonFactory) {
        var roles = this;
        commonFactory.getAdminRoles(function(response){
            roles.roles = response.data;
        });
    }]);
})();