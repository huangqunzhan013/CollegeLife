/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-09 23:30:31
 * @version $Id$
 */
 function login(){
 	var username=document.getElementById('username').value;
 	var studentid=document.getElementById('studentid').value;
 	if (username=='黄群展'&&studentid=='07160713') {
 		alert('登录成功');
 		return true;
 	}else if (username==''||studentid==''){
 		alert('账号或密码不能为空');
 		return false;
 	}else{
 		alert("账号密码错误");
 		return false;
 	}
 }



