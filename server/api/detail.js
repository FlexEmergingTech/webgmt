'use strict';

var logger = require('powwow-server-common').logger;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.detail = function(page) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskDetails?";
    var detail = [];
    var params = "TaskID=3368";
    xmlhttp.onreadystatechange = function() {
         console.log("hi");
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            for (var i = 0; i < response['results'].length; i++) {
                console.log("response" + response['results'][i].ProjectName);
                detail[i] = { 'name': response['results'][i].ProjectName,'taskid':response['results'][i].TaskID,'gatename' : response['results'][i].GateName,'taskname' : response['results'][i].TaskName,'status' : response['results'][i].TaskStatus };
            }
            console.log("response" + JSON.stringify(list));
        }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
    //xmlhttp.send(params);

    page.data(function(data) {
            data.detail = detail;
        })
        .screen("detail");
   
}

