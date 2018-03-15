angular.module('app').controller('app', app);
function app($scope, app) {
    'use strict';
    
    app.init($scope,function(){
        
        if(StatusBar)
        {
            StatusBar.hide();
        }
        if(screen&&screen.orientation)
        {
            screen.orientation.lock('portrait');
        }
        if(Keyboard)
        {
            Keyboard.hideKeyboardAccessoryBar(false);
            //Keyboard.disableScroll(true);
        }
    });
    
}

app.loginScreen = 'app.login';
app.loginModel = 'login';
app.loginAction = 'login';
app.loginErrorField = 'errorMessage';
app.loginIsAction = false;