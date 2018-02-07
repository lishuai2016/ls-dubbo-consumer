var str="";
// 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
               option = {
				    tooltip : {
				        trigger: 'item',
				        formatter: '{b}'
				    },
				    series : [
				        {
				            name: '中国',
				            type: 'map',
				            mapType: 'china',
				            selectedMode : 'single',
				           /* itemStyle:{
				                normal:{label:{show:true}},
				                emphasis:{label:{show:true}}
				            },*/
				            data:[
				                {name:'全国',selected:true}
				            ],
				            itemStyle: {
				                normal: {
				                    borderWidth: .2,//区域边框宽度
				                    borderColor: '#FFF',//区域边框颜色
				                    areaColor:"#518ac4",//区域颜色
				                    color:'#518ac4',
				                    label:{
				                    	show:true,
				                    	textStyle: {
										//fontWeight:'bold',
									  		color: "#FFF"
										}
									}
				                },
				                emphasis: {
				                    borderWidth: .2, //选中区域边框宽度
				                    borderColor: '#FFF', //选中区域边框颜色
				                    areaColor:"#e5cd4a",//选中区域颜色
				                    color:'#e5cd4a',
				                    label:{
				                    	show:true,
				                    	textStyle: {
											fontWeight:'bold',
									  		color: "#f36123"
										}
									}
				                }
				            },
				        }
				    ],

				};
				var ecConfig = require('echarts/config');
				
				//这是点击事件
				myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
					//console.log(param) 你自己去看函数原型，你需要什么就param.函数原型就可以拿到值
					//console.log(param);
					//alert("2222222222222111111111111");
					$("#wrong-message").siblings("span").html("当前省份：");
				    var selected = param.selected;
				    //var str = '';
				    for (var p in selected) {
				        if (selected[p]) {
				            str = p + ' ';
				           //alert(str);
				            //
				            $(".chakanxiangqing_index").click(function(){
				            	//alert(str);
				            	tosousuoprovince(str);
				            })
				         //   decodeURI("/web/tousousuo?province="+name); 
				            $.ajax({
					             type: "POST",
					             url: "/web/countByProvince",
					             data: {province:p},
					             dataType: "json",
					             success: function(data){
					            	 document.getElementById('wrong-message').innerHTML = str;
					            	 document.getElementById('institutions').innerHTML = data[0].orgSize;
					            	 document.getElementById('jiandingren').innerHTML = data[0].userSize;
					             }
					         });
				            
				        }
//				        function tosousuo(key){
//				        	 $("#neirong").val(key);
//				        	 $("#soufuoForm").submit();
//				        };
				    }
				});
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
       $(".chakanxiangqing_index").click(function(){
        	if(str==""){
        		tosousuoprovince("");
        		//window.localStorage.map_ss = "北京"
        	};
        	window.localStorage.map_ss = str
        })
$(function(){
	$("#footer .right .right_1 a:last").css({
		"border": 0,
	});

	$(".jiandingzhuanye .jiandingzhuanye_box .blokc .blokc_box .blokc_box_s").mouseenter(function(){
		$(this).children('i').children('img').stop().animate({ 
			"left":-58
		}, 300)
	})//移入
	$(".jiandingzhuanye .jiandingzhuanye_box .blokc .blokc_box .blokc_box_s").mouseleave(function(){
		$(this).children('i').children('img').stop().animate({ 
			"left":0
		}, 300)
	})//移出
	
	
	 $.ajax({
         type: "POST",
         url: "/web/countByProvince",
         data: {province:""},
         dataType: "json",
         success: function(data){
        	 //console.log(data)
        	// document.getElementById('wrong-message').innerHTML = str;
        	 document.getElementById('institutions').innerHTML = data[0].orgSize;
        	 document.getElementById('jiandingren').innerHTML = data[0].userSize;
         }
     });
})