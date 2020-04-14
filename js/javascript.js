$(function() {

	// 导航部分
	var pc_num = $('.pc-ul>li.pc-active').index()
	$('.pc-ul>li').mouseenter(function(){
		$(this).addClass('pc-active').siblings().removeClass('pc-active')
		$(this).find('.liBox').stop().slideDown()
		// $('.liBox').stop().slideDown()
	})
	$('.pc-ul>li').mouseleave(function(){
		$('.pc-ul>li').removeClass('pc-active').eq(pc_num).addClass('pc-active')
		$(this).find('.liBox').stop().slideUp()
		// $('.liBox').stop().slideUp()
	})
	// $('.pc-ul>li').hover(function() {
	// 	$(this).addClass('pc-active').siblings().removeClass('pc-active')
	// 	$('.liBox').slideDown()
	// }, function() {
	// 	$('.pc-ul>li').removeClass('pc-active').eq(pc_num).addClass('pc-active')
	// 	$('.liBox').slideUp()
	// })
	// 手机端导航栏
	//mob nav
	$('.mob-nav .mob-btn').click(function() {
		$('.mob-nnav').slideDown();
	})
	$('.mob-top  .close').click(function() {
		$('.mob-nnav').slideUp();
	})

	$('.mob-nnav>ul>li').click(function() {
		if ($(this).find('ul').is(':visible')) {
			$(this).find('ul').stop().slideUp()
		} else {
			$(this).find('ul').stop().slideDown()
		}
	});
	/* 搜索 */
	(function() {
		$(".search a").click(function() {
			$(this).hide()
			$(".search form").show()
			$(".search form").animate({"width":208}, 500)
		})
		$(".searchClose").click(function() {
			$(".search form").animate({"width":0}, 500, function() {
				$(".search form").hide()
				$(".search a").show()
			})
			
		})
	})();

	// 公司简介公共侧边栏
	var common_num = $('.common-part2-ul>li.common-active').index()
	$('.common-part2-ul>li').click(function() {
		$(this).addClass('common-active').siblings().removeClass('common-active')
	})
	$('.common-part2-ul>li').hover(function() {
		$(this).addClass('common-active').siblings().removeClass('common-active')
	}, function() {
		$('.common-part2-ul>li').removeClass('common-active').eq(common_num).addClass('common_active')
	})

	//公司招聘部分开始
	$('.application_box .more').click(function() {
		if ($(this).parent().siblings('.application_info').is(':visible')) {
			$(this).find('span').css('display', 'block')
			$(this).find('img').css('display', 'none')
			$(this).parent().parent().css('box-shadow', 'none')
			$(this).parent().siblings('.application_info').css('display', 'none')
			$(this).siblings().children('.tit').find('.addr').css('display', 'none')
		} else {
			$(this).find('span').css('display', 'none')
			$(this).find('img').css('display', 'block')
			$(this).parent().parent().css('box-shadow', '1px 1px 6px 3px rgba(0,0,0,.2)')

			$(this).parent().siblings('.application_info').css('display', 'block')
			$(this).siblings().children('.tit').find('.addr').css('display', 'block')
		}
	})

	// 公司资质证书
	$('.certificate_ul>li .li_img').click(function() {
		var cerImg = $(this).find('img').attr('src')
		$('.certificate_alert>.img').find('img').attr('src', cerImg)
		$('.certificate_alert').css('display', 'block')
	})
	$('.certificate_alert>.img .close').click(function() {
		$('.certificate_alert').css('display', 'none')
	})
	$('.certificate_alert').click(function() {
		$('.certificate_alert').css('display', 'none')
	})
	$('.certificate_alert>.img img').click(function(el) {
		el.stopPropagation()
	})


	// 页码
	$('.pages>a').click(function() {
		$(this).addClass('.current').siblings().removeClass('.current')
	})

	// 技术服务页面2
	$('.teld2_ul>li .li_img').click(function() {
		var cerImg = $(this).find('img').attr('src')
		$('.teld2_alert>.img').find('img').attr('src', cerImg)
		$('.teld2_alert').css('display', 'block')
	})
	$('.teld2_alert>.img .close').click(function() {
		$('.teld2_alert').css('display', 'none')
	})
	$('.teld2_alert').click(function() {
		$('.teld2_alert').css('display', 'none')
	})
	$('.teld2_alert>.img img').click(function(el) {
		el.stopPropagation()
	})

	// 产品页面开始
	// var pro_num = $('.product_nav>ul>li.active').index()
	$('.product_nav>ul>li').click(function() {
		$(this).addClass('active').siblings().removeClass('active')
	})


	// 产品内页
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		direction: 'vertical',
		spaceBetween: 10,
		slidesPerView: 4,
		// loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		// loop: true,
		effect: 'fade',
		loopedSlides: 4, //looped slides should be the same
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
})
