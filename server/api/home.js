'use strict';

var logger = require('powwow-server-common').logger;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.on_displayresult = function(page) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskList";
    var list = [];
    var params = "ProjectId=28&FlexOwnerADLogin=GDJGSern";
    xmlhttp.onreadystatechange = function() {
        console.log("hi");
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            for (var i = 0; i < response['results'].length; i++) {
                console.log("response" + response['results'][i].ProjectName);
                list[i] = { 'name': response['results'][i].ProjectName, 'taskid': response['results'][i].TaskID, 'gatename': response['results'][i].GateName, 'taskname': response['results'][i].TaskName, 'status': response['results'][i].TaskStatus };
            }
            console.log("response" + JSON.stringify(list));
        }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
    //xmlhttp.send(params);

    page.data(function(data) {
            data.list = list;
        })
        .screen("home");
    /* xmlhttp.open("POST", url, false);
     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xmlhttp.send(params);*/
}

exports.detail = function(page, param) {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskDetails";
    console.log(param);
    var detail = [];
    var params = "TaskID=3368";
    xmlhttp.onreadystatechange = function() {
        console.log("hi");
        // if (this.readyState == 4 && this.status == 200) {
        var response = JSON.stringify(this.response);
        //var responseValue = JSON.parse(response);

        // for (var i = 0; i < response['results'].length; i++) {
        //console.log("response" + response['results'][i].ProjectName);
        // detail = { 'name': response['results'].ProjectName, 'taskid': response['results'].TaskID, 'gatename': response['results'].GateName, 'taskname': response['results'].TaskName, 'status': response['results'].TaskStatus };
        // }
        console.log("response" + this.responseText);
        // }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    //xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
    //xmlhttp.send(params);



    page.data(function(data) {
            // data.taskname = 'task Name  : ' + this.responseText['results'].ProjectName;
            /*data.username = 'Username : ' + param.username;
            data.email = 'Email : ' + param.email;
            data.phone = 'Phone : ' + param.phone;
            data.website = 'Website :' + param.website;*/
        })
        .screen('detail');
}