$(function() {
	var k=$(window).height();//获取当前屏幕的高度
	//点击“继续向下”,页面自动向下一页滚动
	$("#next").click(function(event) {
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({//接收json对象格式
		navigation:true,//是否显示项目导航（小圆点）
		// navigationPosition:'left', //导航靠左/右显示，默认右
		// loopBottom:true， //滚回底部后是否滚回顶部，默认false
		scrollingSpeed:700,//滚到下一屏所需时间，默认700
		//滚动到第二屏之后的回调函数
		afterLoad: function(anchorLink,index) {
			if(index==2) {
				//先让next隐藏，动画执行完毕之后再让其出现
				$("#next").fadeOut();
				$(".search").show().animate({"right":"370px"},1500,function() {
					$(".search-words").animate({"opacity":1},500,function() {
						$(".search").hide();
						$(".search-02-1").show().animate({"height":"30px","right":"250px","bottom":"452px"},500);
						$(".sofa-goods").show().animate({"height":"218px"},500);
						$(".words-02").animate({"opacity":1},500,function() {
							$("#next").fadeIn();
						});
					});
				});
			}
		},
		//离开第二屏到第三屏之后的回调函数
		onLeave:function(index,nextIdex,direction) {
			$("#next").fadeOut();
			if(index==2&&nextIdex==3) {
				$(".sofa-2").show().animate({"bottom":-(k-250),"width":207,"left":260},1500,function() {
					$(".img-a").animate({"opacity":1},500,function() {
						$(".btn-a").animate({"opacity":1},500,function() {
							$("#next").fadeIn();
						});
					});				
				});
				$(".cover").show();		
			}
			//离开第三屏向第四屏滚动
			if(index==3&&nextIdex==4) {
				$(".sofa-2").hide();
				$(".sofa-3-2").show().animate({"bottom":-(k-250+50)},1000,function() {
					$(this).hide();
					$(".car-sofa").show();
					//引入easing插件即可使用的动画效果，加在时间参数的后面
					$(".car").animate({"left":"120%"},2000,function() {
						$(".note").animate({"opacity":1},500);
						$(".word-4").animate({"opacity":1},500,function() {
							$("#next").fadeIn();
						});
					});
				});
			}
			//离开第四屏向第五屏滚动
			if(index==4&&nextIdex==5) {
				$(".hand-5").show().animate({"bottom":0},2000,function() {
					$(".mouse-2").show();
					$(".sofa-5").show().animate({"bottom":70},1000,function() {
						$(".order-5").animate({"bottom":390},500);
						$("#next").fadeIn();
					});
				});
			}
			//离开第五屏向第六屏滚动
			if(index==5&&nextIdex==6) {
				$(".sofa-5").animate({"bottom":-(k-500),"left":"40%","width":65},1000,function() {
					$(".sofa-5").hide();
				});
				$(".box-6").animate({"left":"40%"},1000,function() {
					$(".box-6").animate({"bottom":40},1000,function() {
						$(".box-6").hide();
						$(".pop-6").show();
						$(".word-6").show().animate({"left":"30%"},1000,"easeInOutElastic");
						//jquery中背景移动的写法，移动X坐标
						$(".section6").animate({"backgroundPositionX":"100%"},2000,function() {
							$(".man-6").animate({"height":305,"bottom":116},500,function() {
								$(this).animate({"right":500},500,function() {
									$(".women-6").show().animate({"height":300,"right":400},1000,function() {
										$(".please-6").show();
										$("#next").fadeIn();
									});
								});
							});
						});
					});
				});
			}
			//离开第六屏向第七屏滚动
			if(index==6&&nextIdex==7) {
				setTimeout(function() {
					$(".star-7").animate({"width":120},1000,function() {
						$(".word-7").show();
					});},500);
				$("#next").fadeIn();
			}
			//第八屏动画
			// 法1：
			$(".shopping-8").mouseenter(function(event) {
				$(".btn-8-2").show();
			}).mouseleave(function() {
				$(".btn-8-2").hide();
			});
			// // 法2：
			// $("shopping-8").hovor(function() {
			// 	$(".btn-8-2").toggle();//toggle表示显示隐藏切换
			// });
			
			//鼠标随着手指移动
			$(document).mousemove(function(event) {
				var x = event.pageX-$(".hand-8").width()/2;
				var y = event.pageY+10;
				var miny = k-449;
				if(y<miny) {
					y=miny;
				}
				$(".hand-8").css({"left": x,"top": y});
			});
			//点击再来一次返回第一屏
			$(".again-8").click(function() {
				$.fn.fullpage.moveTo(1);//返回顶部第一屏
				$("img,.move").attr("style","");//复原回没做动画之前的样子（原理为做动画的元素清除行内样式）
			});
		},

	});
});