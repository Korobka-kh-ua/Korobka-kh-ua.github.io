$(document).ready(function() {

	

//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/

 $(".slide-one").owlCarousel({

		items : 1,
		autoHeight : true,
		autoplay : true,
		loop:true,
    	autoplay:true, //Автозапуск слайдера
        smartSpeed:3000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
		
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
					items:1
				}
		}		

});

$(".slide-two").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:5
			}
		}
	});
$(".slide-three").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:5
			}
		}
	});	
	

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>


	



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
$("#leftside-navigation .sub-menu > a").click(function(e) {
  $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()

});
	$("a.gallery").fancybox();

		

