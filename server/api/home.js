'use strict';

var logger = require('powwow-server-common').logger;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var statusTask;
var username;
/*
 *----Login Method , this method is used 
 *    to perform login process-----*
 *    
 */
exports.login = function(page,param){
	var xmlhttp = new XMLHttpRequest();	
    var url = "https://testmobile.flextronics.com/Hackathon/LDAPAuth.php";   
	var encoded = encodeURI(param.password);
	//console.log(encoded);
	var params ="username="+param.username+"&password="+param.password;   //params comming from front end....
    xmlhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText.split(",");   
				//console.log(this.responseText);
				if(response[0] == "loginsuccess"){
					username = param.username;
					
					//username = "gssvenra";
               listUpdate(page,username);  //home screen list refresh method....
				}else {
					 page.data(function(data) {               

               })
                .screen('login');
				}
			
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
}
/* -----Login Method end----- */

/*
 * ----Home Screen Method, 
 * this method shows the task list-----*
 */
exports.on_displayresult = function(page) {
    var xmlhttp = new XMLHttpRequest();
	
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskList";
    var list = [];
	
    var params = "ProjectId=28&FlexOwnerADLogin="+username;
    xmlhttp.onreadystatechange = function() {
      
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);			
			 page.data(function(data) {
				   for (var i = 0; i < response['results'].length; i++) {
					   if(response['results'][i].TaskStatus == 0){
						   statusTask = "OverDue";
					   }else if(response['results'][i].TaskStatus == 1){
						   statusTask = "Closed";
					   }else if(response['results'][i].TaskStatus == 2){
						    statusTask = "Open";
					   }
            /* list array to show the homescreen list*/
                list[i] = { 'name': response['results'][i].ProjectName, 'taskid': response['results'][i].TaskID, 'gatename': response['results'][i].GateName, 'taskname': response['results'][i].TaskName, 'status': statusTask };
            }
          
            data.list = list;
        })
        .screen("home");
			
        }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
   
}
/* ----Home Screen Method end----*/

/*
 * ----Home Screen list refresh method, this method is used in 
 *  login method,detail method and cancel method to refresh the 
 *  home screen list ---- *
 */
function listUpdate(page,username){
	 var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskList";
    var list = [];
	console.log("username : "+username);
    var params = "ProjectId=28&FlexOwnerADLogin="+username;
    xmlhttp.onreadystatechange = function() {
       
         if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
          
			
			 page.data(function(data) {
				   for (var i = 0; i < response['results'].length; i++) {
					   if(response['results'][i].TaskStatus == 0){
						   statusTask = "OverDue";
					   }else if(response['results'][i].TaskStatus == 1){
						   statusTask = "Closed";
					   }else if(response['results'][i].TaskStatus == 2){
						    statusTask = "Open";
					   }
            /* list array to show the homescreen list*/
                list[i] = { 'name': response['results'][i].ProjectName, 'taskid': response['results'][i].TaskID, 'gatename': response['results'][i].GateName, 'taskname': response['results'][i].TaskName, 'status': statusTask };
            }
           
            data.list = list;
        })
        .screen("home");
			
        }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
}
/* ----List update method end----*/

/*
 * ----Detail method,
 * this method shows the list details after clicking the list item-----*
 */
exports.detail = function(page, param) {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/getTaskDetails";
    console.log(param);
    var detail = [];
	var detailStatusTask;
    var params = "TaskID=" + param.taskid;
    xmlhttp.onreadystatechange = function() {
        console.log("hi");
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            page.data(function(data) {
				 if(response['results'][0].TaskStatus == 0){
						   data.status = "Current Status: OverDue";
					   }else if(response['results'][0].TaskStatus == 1){
						   data.status = "Current Status: Closed";
					   }else if(response['results'][0].TaskStatus == 2){
						    data.status = "Current Status: Open";
					   }
                    data.taskname = 'Task Name  : ' + response['results'][0].TaskName; //taskname to show in front end.....
                    data.gatename = "Gate Name :" + response['results'][0].GateName; //gatename to show in front end....
                    data.dueDate = "Due Date :" + response['results'][0].duedate; //due date to show in front end.....
					data.taskId = response['results'][0].GateTaskId; //taskid to get the task details in front end.....
					data.comments = response['results'][0].Comments; //comments to get the task details in front end.....
					//data.status = detailStatusTask;

                })
                .screen('detail');
        }

    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
}
/*------Detail method End-----*/

/*
 * ----Update detail method,
 * this method will update the list details like task status, comments etc...-----*
 */
exports.updateDetail = function(page,param){
	var xmlhttp = new XMLHttpRequest();
    var url = "https://pulsenavigationtest.flextronics.com/node/webGMT/UpdateGatetask";
	var detail = "testing";
    var params = "Details="+detail+"&Status="+param.status+"&Comments="+param.comment+"&GateTaskId="+param.taskId;
	console.log(params);
    xmlhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {        
                   listUpdate(page,username);  //redirect to home screen after successful update and home screen list also get refreshed.......           
        }
    };
    xmlhttp.open("GET", url + "?" + params, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();    
}
/*----Update Detail method end-----*/

/*
 * ----Cancel method, Perform cancel action in detail screen----*
 */
exports.cancelDetail = function(page){
	 listUpdate(page,username);
}
/*----Cancel method end----*/
exports.loginRedirect = function(page){
	 page.data(function(data) {                   

               })
                .screen('login');
}