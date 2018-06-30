/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-11 23:28:21
 * @version $Id$
 */
 $(function(){
 	/*文字*/
 	window.setTimeout("word1()",500);
 	window.setTimeout("word2()",600);
 	window.setTimeout("word3()",700);
 	window.setTimeout("word4()",800);
 	window.setTimeout("word5()",900);
 	window.setTimeout("word6()",1000);

 	/*导航控制*/
 	$(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $("#content").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 100) {
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $("#menu").find(".current").attr("href")) {
            $("#menu").find(".current").removeClass("current");
            $("#menu").find("[href=" + currentItem + "]").addClass("current");
        }
    });

 	/*个人资料*/
    $("p[name='p[]']").hide();	
    $("#btn1").toggle(function(){  
              $("#p1").fadeIn(500); 
              $("#p2").fadeIn(1000);
              $("#p3").fadeIn(1500); 
              $("#p4").fadeIn(2000);
              $("#p5").fadeIn(2500);
              $("#btn1").val("隐藏");   
             // $("p").show(2000);
            },function(){               
                  $("#p5").fadeOut(500);  
                  $("#p4").fadeOut(1000);
                  $("#p3").fadeOut(1500);
                  $("#p2").fadeOut(2000);
                  $("#p1").fadeOut(2500);
                  $("#btn1").val("资料展示");
                  //$("p").hide(2000);
        });  

    /*图片旋转*/
var angle = 0;
setInterval(function(){
      angle+=3;
     $("#touxiang").rotate(angle);
},50);



        /*图片展示*/
        update();
        $("#right img").mousemove(fun1);


      /*客服*/
      $(window).scroll(function(){
      		var height=$(window).scrollTop()+100;
      		$("#piao").stop().animate({top:height});
              //$("#piao").animate({top:height});
      });

      


      /*课程介绍*/
      $("div[name='a[]']").hide();
      $("#a1").show();
      $("#a11").mouseover(function(){
      	$("div[name='a[]']").hide();
      	$("#a1").show();	
      });
      $("#a22").mousemove(function(){
      	$("div[name='a[]']").hide();
      	$("#a2").show();
      });
      $("#a33").mousemove(function(){
      	$("div[name='a[]']").hide();
      	$("#a3").show();
      });
      $("#a44").mousemove(function(){
      	$("div[name='a[]']").hide();
      	$("#a4").show();
      });

      /*兴趣爱好图片*/
     $("#aihao1 img").addClass('alpha');
     $("#aihao1 img:eq(0)").removeClass('alpha');
     $("#aihao1 img").mouseover(function(){
     		var path=$(this).attr("src");
     		$("#aihao0").attr("src",path);
     		$(this).removeClass('alpha').siblings().addClass('alpha');
     });

     /*留言*/
     $("textarea").bind('keyup',function(){
     	var count=80-$(this).val().length;
     	//alert($(this).val().length);
     	if (count>0) {
     		$(".span").html("你还可以输入<span style='color:red'>"+count+"</span>字符");
     	}else{
     		$(".span").html("不可以再输入");
     		$("textarea").attr('disabled',"true");
     	}
     });

     $("#tijiao").click(function(){
     	var message=$("textarea").val();
     	var $li=$("<li><p>"+message+"</p></li>");
     	$("#ul").append($li);
     });
     $(this).blur(function(){
     	if (this.value="") {
     		this.value=defaultVal;
     	}
     });
     

/*消除鼠标点击默认事件*/
      $("#touxiang").click(function(event){
      	event.preventDefault();
      });
      $("#item2").click(function(event){
      	event.preventDefault();
      });
      $("#item3").click(function(event){
      	event.preventDefault();
      });




});
 /*图片展示*/
 var arr1=["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg"];
  //var arr1=["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg"];
 var index=0;
 var time=null;
function update(){
	$("#left img").hide();
	$("#left img").attr("src",arr1[index]);
	$("#left img").fadeIn("fast");
	index++;
	if (index==arr1.length) {
		index=0;
	}
	time=window.setTimeout("update()",2000);
}

function fun1(){
	window.clearTimeout(time);
	index=Number($(this).attr("name"));
	update();
}


 /*文字动画*/
 function word1(){
 	$("#word1").animate({left:"100px"},400);
 }

  function word2(){
 	$("#word2").animate({left:"150px"},800);
 }
  function word3(){
 	$("#word3").animate({left:"200px"},1200);
 }
  function word4(){
 	$("#word4").animate({left:"250px"},1600);
 }
  function word5(){
 	$("#word5").animate({top:"0px"},2000);
 }
  function word6(){
 	$("#word6").animate({top:"3px"},2800);
 }


 /*兴趣爱好文字*/
function show(){
	var show=document.getElementById("hidden");
	//show.style.display="block";
	if (show.style.display=='none') {
		show.style.display='block';
		document.getElementById("text").innerHTML='隐藏';
	}else{
		show.style.display='none';
		document.getElementById("text").innerHTML='显示全部';
	}
}
/*关闭客服*/
function closekf(){
        $("#piao").remove();
      }

 

