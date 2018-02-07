$(function(){
	//网址宽度赋值
	//var wangzhi=$(".content .content_blokc .right .content_blokc_right_top .you h4 p").width();
	/*if($(".gg_wz").html()==''){
		$(".content .content_blokc .right .content_blokc_right_top .you h4 p").css({
			"width": 200,
		});
	}*/
	$(".gg_wz").each(function(index,el){
		if($(this).html()==""){
			$(this).parent().css({
				"width": 200,
			});
		}
	})

	//点击高亮
	$(".content_title .right .content_title_right_bottom li a").click(function(event) {
		$(this).parent().addClass('active').siblings('li').removeClass('active');
		$(this).addClass('as').parent().siblings('li').children('a').removeClass('as');
		//alert($(this).siblings('input').val())
	});
	//判断是否显示
	$(".content_title .right .content_title_right_bottom li input").each(function(index, el) {
		if($(this).val()==1){
			$(this).parent().show();
		}else{
			$(this).parent().hide();
		}
	});
	if($(".jibenxinxi input").val()==1){
		$(".content_box_left .content_box_jbxx").show()
	}else{
		$(".content_box_left .content_box_jbxx").hide()
	}
	if($(".yewufanwei input").val()==1){
		$(".content_box_left .content_box_ywfw").show()
	}else{
		$(".content_box_left .content_box_ywfw").hide()
	}
	if($(".jiangliqingkuang input").val()==1){
		$(".content_box_left .content_box_jlqk").show()
	}else{
		$(".content_box_left .content_box_jlqk").hide()
	}
	if($(".renzhengxinxi input").val()==1){
		$(".content_box_left .content_box_rzrk").show()
	}else{
		$(".content_box_left .content_box_rzrk").hide()
	}
	if($(".jiandingren input").val()==1){
		$(".content_box_left .content_box_zyjdr").show()
	}else{
		$(".content_box_left .content_box_zyjdr").hide()
	}
	if($(".jianjie input").val()==1){
		$(".content_box_left .content_box_jgjj").show()
	}else{
		$(".content_box_left .content_box_jgjj").hide()
	}
	if($(".nengliyanzheng input").val()==1){
		$(".content_box_left .content_box_nlyz").show()
	}else{
		$(".content_box_left .content_box_nlyz").hide()
	}


	//弹出层
	var document_hh=$(document).height();
	var window_hh=$(window).height();
	var margin_top=((window_hh-(window_hh-100))/2)-20;
	var scrollTop=$(document).scrollTop();
	$(".zhezhaoceng").css({
		"height": document_hh,
	});
	$(".tupiandanchuceng").css({
		"top":scrollTop,
		"height": window_hh-100,
		"margin-top":margin_top
	});
	//隐藏
	$(".zhezhaoceng").click(function(event) {
		$(".zhezhaoceng").slideUp(400);
		$(".tupiandanchuceng").slideUp(300);
		$("body").css({
			"overflow": 'auto',
		});
	});
	$(".tupiandanchuceng_gb").click(function(event) {
		$(".zhezhaoceng").slideUp(400);
		$(".tupiandanchuceng").slideUp(300);
		$("body").css({
			"overflow": 'auto',
		});
	});
	//显示
	$(".chakandatu_a").click(function(event) {
		$(".zhezhaoceng").slideDown(300);
		$(".tupiandanchuceng").slideDown(400);
		$("body").css({
			"overflow": 'hidden',
		});
		var zhengshu_xiao_src = $(".zhengshu_xiao_a").attr('src'); 
		$(".tupiandanchuceng_img").attr('src',zhengshu_xiao_src); 
	});
	
	$(".chakandatu_a").click(function(event) {
		$(".zhezhaoceng").slideDown(300);
		$(".tupiandanchuceng").slideDown(400);
		$("body").css({
			"overflow": 'hidden',
		});
		var zhengshu_xiao_src = $(".zhengshu_xiao_a").attr('src'); 
		$(".tupiandanchuceng_img").attr('src',zhengshu_xiao_src); 
	});
	
	$(".chakandatu_c").click(function(event) {
		$(".zhezhaoceng").slideDown(300);
		$(".tupiandanchuceng").slideDown(400);
		$("body").css({
			"overflow": 'hidden',
		});
		var zhengshu_xiao_src = $(".zhengshu_xiao_c").attr('src'); 
		$(".tupiandanchuceng_img").attr('src',zhengshu_xiao_src); 
	});

	//表格查看大图显示
	$(".zhengshu_btn").click(function(event) {
		$(".zhezhaoceng").slideDown(300);
		$(".tupiandanchuceng").slideDown(400);
		$("body").css({
			"overflow": 'hidden',
		});
		var zhengshu_btn_imgs = $(this).children("input").val();
		$(".tupiandanchuceng_img").attr('src',zhengshu_btn_imgs); 
		console.log(zhengshu_btn_imgs);
	});
})


$(window).bind("scroll",function(){
	var scrollTop=$(document).scrollTop();
	$(".tupiandanchuceng").css({
		"top":scrollTop,
	});
});




/*Cookie 增删改查*/
/*function setCookie(name,value,iDate){ 
	var oDate=new Date()
	oDate.setDate(oDate.getDate()+iDate)
	document.cookie=name+"="+value+';path=/'+";expires="+oDate
}

function getCookie(name){ 
	var arr=document.cookie.replace(/\s/g,"").split(";")
	for(var i=0;i<arr.length;i++){ 
		var arr2=arr[i].split("=")
		if(arr2[0]==name){ 
			return arr2[1]
		}
	}
}*/