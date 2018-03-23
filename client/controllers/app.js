angular.module('app').controller('app', app);
function app($scope, app) {
    'use strict';
    
        if (window.isPlatform && window.isPlatform.powWow() && window.isPlatform.iOS() && window.cordova && window.cordova.plugins) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }
        
        if (window.StatusBar) {
            StatusBar.hide();
            document.body.classList.add('nostatusbar');
        }

        if (window.screen && window.screen.orientation) {
            screen.orientation.lock('portrait');
        }
    
    app.loginScreen = 'app.login';
    app.loginModel = 'login';
    app.loginAction = 'login';
    app.loginErrorField = 'errorMessage';
    app.loginIsAction = false;
    
    
    
}

