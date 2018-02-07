/*基本信息*/
if($(".mingzi").html()==""){
	$(".jibenxinxi a").siblings('input').val("0")
}
/*业务范围*/
if($(".content_box_ywfw_box span").html()==""){
	$(".yewufanwei a").siblings('input').val("0")
}
/*简历情况*/
if($(".content_box_jlqk_box p").html()==""){
	$(".jiangliqingkuang a").siblings('input').val("0")
}
/*执业鉴定人*/
if($(".content_box_zyjdr_box span").html()==""){
	$(".jiandingren a").siblings('input').val("0")
}
/*简介*/
if($(".content_box_jgjj_box div").html()==""){
	$(".jianjie a").siblings('input').val("0")
}
/*能力验证*/
if($(".xiangmu").html()==""){
	$(".nengliyanzheng a").siblings('input').val("0")
}