/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-10 18:01:51
 * @version $Id$
 */
 function checkForm(){	
 	if (document.getElementById("checkbox").checked==false) {
 		alert('请勾选协议');
 		return false;
 	}else {
 		if (checkName()&&checkId()&&checkBirth()&&checkEmail()&&checkPhone()) {
 			alert('注册成功');
 			return true;
 		}else{
 			alert("注册失败");
 			return false;
 		}
 	}

 }

 function checkName(){
 	var username=document.getElementById('username').value;
 	var checkname=document.getElementById('checkname');
 	var reg= /^[a-z][a-z0-9]{5}$/i;
 	if (reg.test(username)) {
 		checkname.innerHTML="正确".fontcolor("green");
 		return true;
 	}else{
 		checkname.innerHTML="错误".fontcolor("red");
 		return false;
 	}
 }

 function checkId(){
 	var studentid=document.getElementById('studentid').value;
 	var checkid=document.getElementById('checkid');
 	var reg=/^0+\d{7}$/
 	if (reg.test(studentid)) {
 		checkid.innerHTML="正确".fontcolor("green");
 		return true;
 	}else{
 		checkid.innerHTML="错误".fontcolor("red");
 		return false;
 	}
 }

 function checkBirth(){
 	var birthday=document.getElementById('birthday').value;
 	var checkbirth=document.getElementById('checkbirth');
 	var reg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/; 
 	if (reg.test(birthday)) {
 		checkbirth.innerHTML="正确".fontcolor("green");
 		return true;
 	}else{
 		checkbirth.innerHTML="错误".fontcolor("red");
 		return false;
 	}
 }

 function checkEmail(){
 	var email=document.getElementById('email').value;
 	var checkemail=document.getElementById('checkemail');
 	var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
 	if (reg.test(email)) {
 		checkemail.innerHTML="正确".fontcolor("green");
 		return true;
 	}else{
 		checkemail.innerHTML="错误".fontcolor("red");
 		return false;
 	}
 }

 function checkPhone(){
 	var phonenumber=document.getElementById('phonenumber').value;
 	var checkphone=document.getElementById('checkphone');
 	var reg=/^1+[0-9]{10}$/;
 	if (reg.test(phonenumber)) {
 		checkphone.innerHTML="正确".fontcolor("green");
 		return true;
 	}else{
 		checkphone.innerHTML="错误".fontcolor("red");
 		return false;
 	}
 }

