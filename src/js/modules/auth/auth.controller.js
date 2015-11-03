//=================================================
    // LOGIN
    //=================================================

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('loginCtrl', ['UserService', 'resetService', function(UserService, resetService){

            //Status

            this.login = 1;
            this.register = 0;
            this.forgot = 0;

            this.logMeIn = function(){
                UserService.login(this.user, this.secret)
            };

            this.reset = function(){
                var data = {"username": this.forget_user};
                resetService.password_reset(data);
            };
        }])
})();