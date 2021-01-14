// $(".slider").slick({
// 	arrows: false,
// 	fade: true,
// 	dots: false,
// 	accessibility: true,
// 	autoplay: true,
// 	autoplaySpeed: 3000,
// 	fade: true,
// });


$(".burger_btn").on("click", function () {
	$(".burger_btn").toggleClass("close");
	$(".header_nav_container").fadeToggle(500);
	$("body").toggleClass("noscroll");
});
