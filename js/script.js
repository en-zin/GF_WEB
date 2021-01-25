$(function () {
	$(".slide").slick({
		accessibility: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3500,
		fade: true,
		zIndex: 0,
		default: false,
	});
});


$(".header_burger_btn").on("click", function () {
	$(".header_burger_btn").toggleClass("close");
	$(".header_nav").fadeToggle(500);
	$("body").toggleClass("noscroll");
});



let windowWidth = $(window).width();
let windowSm = 1024;
let flg = true;


if (windowWidth <= windowSm) {
	$(function () {
		// #で始まるアンカーをクリックした場合に処理
			$('a[href^="#"]').click(function () {
			$(".header_burger_btn").removeClass("close");
			$(".header_nav").fadeOut(500);
			$("body").removeClass("noscroll");
			// 移動先を0px調整する。0を30にすると30px下にずらすことができる。
			let adjust = 48;
			// スクロールの速度
			let speed = 400; // ミリ秒
			// アンカーの値取得
			let href = $(this).attr("href");
			// 移動先を取得
			let target = $(href == "#" || href == "" ? "html" : href);
			// 移動先を調整
			let position = target.offset().top - adjust;
			// スムーススクロール
			$("body,html").animate({ scrollTop: position }, speed, "swing");
			return false;
		});
	});
} else {
	$(function () {
		// #で始まるアンカーをクリックした場合に処理
		$('a[href^="#"]').click(function () {
			// 移動先を0px調整する。0を30にすると30px下にずらすことができる。
			let adjust = 48;
			// スクロールの速度
			let speed = 400; // ミリ秒
			// アンカーの値取得
			let href = $(this).attr("href");
			// 移動先を取得
			let target = $(href == "#" || href == "" ? "html" : href);
			// 移動先を調整
			let position = target.offset().top - adjust;
			// スムーススクロール
			$("body,html").animate({ scrollTop: position }, speed, "swing");
			return false;
		});
	});
}


$(function () {
	setTimeout(function () {
		$(".start p").fadeIn(1600);
	}, 500); //0.5秒後にロゴをフェードイン!
	// setTimeout(function () {
	// 	$(".start").fadeOut(500);
	// }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
