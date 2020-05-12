// $("#myBlock").vide(
// 	{
// 		mp4: video / 2,
// 		// webm: path/to/video2,
// 		// ogv: path/to/video3,
// 		poster: video / 60
// 	},
// 	{
// 		resizing: false,
// 		position: 0 % 50 %
//    }
// );

var btn = document.getElementById("btn");
var menu = document.getElementById("menu");

btn.addEventListener("click", function () {
	btn.classList.toggle("active");
	menu.classList.toggle("activeMenu");
});

jQuery(function ($) {
	$(document).mouseup(function (e) {
		// событие клика по веб-документу
		if (btn.classList.contains("active")) {
			var div = $("#ul"); // тут указываем ID элемента
			if (
				!div.is(e.target) && // если клик был не по нашему блоку
				div.has(e.target).length === 0
			) {
				// и не по его дочерним элементам
				// div.hide(); // скрываем его
				btn.classList.toggle("active");
				menu.classList.toggle("activeMenu");
			}
		}
	});
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		center: true,
		// dots: true,


		navText: ['<img src="img/btn_left1.svg">', '<img src="img/btn_right1.svg">'],
		// slideTransition: linear,
		// loop: true,
		// margin: 10
		responsive: {
			0: {
				dots: true,
			},
			550: {

			},
			800: {
				nav: true,
				dots: false,
			},
		}
	});
});


let $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 400);
	return false;
});