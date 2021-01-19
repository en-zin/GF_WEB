$(function () {
	$(".slide").slick({
		accessibility: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,
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

$(".header_nav_item").on("click", function () {
	$(".header_burger_btn").toggleClass("close");
	$(".header_nav").fadeToggle(500);
	$("body").toggleClass("noscroll");
});

$(function(){
  // #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function () {
	$(".header_burger_btn").toggleClass("close");
	$(".header_nav").fadeToggle(500);
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
	var position = target.offset().top + adjust;
	// スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
  });

});
