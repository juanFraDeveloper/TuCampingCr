/*====================================
javascript code
autor: Juan Francisco Lopez Morales
====================================*/

/*====================================
Variables
====================================*/
var guardar = 0;
var nav = 0;
var showNav = 0;
var ancho = window.innerWidth;
var active = '#active2';
var turno = 1;

const contSlider = document.querySelector("#cont-slider");
let seccion = document.querySelectorAll(".seccion-slider");
let sliderLast = seccion[seccion.length -1];
const btnLeft = document.getElementById("btn-slider-left");
const btnRight = document.getElementById("btn-slider-right");

const contSlider2 = document.querySelector("#cont-slider2");
let seccion2 = document.querySelectorAll(".card");
let sliderLast2 = seccion2[seccion2.length -1];
const btnLeft2 = document.querySelector("#left");
const btnRight2 = document.querySelector("#right");

/*====================================
General
====================================*/
$(document).ready(function(){
	if(ancho < 800){$("#camImg").attr('src', 'img/fondo(movil).jpg');}
	setTimeout(function(){
		$(".titu-top").css('transform','scaleX(1)');
		$(".titu-top").css('opacity','1');
	},1000)	
	setTimeout(function(){
		$(".btn-header").css('opacity','1');
	},1400)	
	setTimeout(function(){
		$(".parra-top").css('transform','scaleX(1)');
		$(".parra-top").css('opacity','1');
	},1600)	
	setTimeout(function(){
		//$("#icon2").css('transform','translateY(0)');
		$(".btn-slider").css('transform','scale(1)');
		$(".btn-slider").css('opacity','1');
	},1800)	
	$(active).addClass('active');

	//change image
	if(ancho < 600){
		$("#camImg-offer1").attr('src', 'img/imagen6(movil).jpg');
		$("#camImg-offer2").attr('src', 'img/imagen3(movil).jpg');
		$("#camImg-offer3").attr('src', 'img/imagen4(movil).jpg');
	}
	if(ancho < 500){funBloque1();}
});
//this is for the header's slider
contSlider.insertAdjacentElement('afterbegin', sliderLast);
contSlider2.insertAdjacentElement('afterbegin', sliderLast2);

/*====================================
Functions
====================================*/
function funSliderLeft(clase, cont){
	if(turno == 1){
		let seccion = document.querySelectorAll(clase);
		let sliderLast = seccion[seccion.length -1];
		var contGeneral = document.querySelector(cont);
		if(cont == '#cont-slider2'){
			funOpacity();
			contGeneral.style.marginLeft = '0';
		}else{
			contGeneral.style.marginLeft = '0';
		}
		contGeneral.style.transition = '.4s';
		turno=0;
		setTimeout(function(){
			contGeneral.style.transition = 'none';
			contGeneral.insertAdjacentElement('afterbegin', sliderLast);
			contGeneral.style.marginLeft = '-100%';
			turno=1;
		}, 400);
	}
}
function funSliderRight(clase, cont){
	if(turno == 1){
		let sliderFirst = document.querySelectorAll(clase)[0];
		var contGeneral = document.querySelector(cont);
		if(cont == '#cont-slider2'){
			funOpacity();
			contGeneral.style.marginLeft = '-200%';
		}else{
			contGeneral.style.marginLeft = '-200%';
		}
		turno=0;
		contGeneral.style.transition = '.4s';
		setTimeout(function(){
			contGeneral.style.transition = 'none';
			contGeneral.insertAdjacentElement('beforeend', sliderFirst);
			contGeneral.style.marginLeft = '-100%';
			turno=1;
		}, 400);
	}
}
function funLeft(){
	funSliderLeft('.card', '#cont-slider2');
}
function funRight(){
	funSliderRight('.card', '#cont-slider2');
}
function funOpacity(){
	$(document).ready(function(){
		$(".card").css('opacity', '0');
		setTimeout(function(){
			$(".card").css('opacity', '1');
		},400);
	});
}
function funActive(navDate){
	$(document).ready(function(){
		$(active).removeClass('active');
		active = '#acti'+navDate;
		$(active).addClass('active');
	})
	//document.getElementById(navDate).classList.add = 'active';
}
function funShowNav(){
	$(document).ready(function(){
		if(showNav == 0){
			document.getElementById("cont-nav2").style.display = 'block';
			setTimeout( () => {
				$("#cont-nav2").css('backgroundColor', '#846A36');
				setTimeout(function(){
					$("#close").css('opacity', '1');
				},100)
				setTimeout(function(){
					$(".cam-nav1").css('transform', 'scaleX(1)');
					$(".cam-nav1").css('opacity', '1');
				},200)
				setTimeout(function(){
					$(".cam-nav2").css('transform', 'scaleX(1)');
					$(".cam-nav2").css('opacity', '1');
				},300)
				setTimeout(function(){
					$(".cam-nav3").css('transform', 'scaleX(1)');
					$(".cam-nav3").css('opacity', '1');
				},400)
				setTimeout(function(){
					$(".cam-nav4").css('transform', 'scaleX(1)');
					$(".cam-nav4").css('opacity', '1');
				},500)
				setTimeout(function(){
					$(".cam-nav5").css('transform', 'scaleX(1)');
					$(".cam-nav5").css('opacity', '1');
				},600)
			},100);
			showNav=1;
		}else if(showNav == 1){
			setTimeout(function(){
				$(".cam-nav5").css('transform', 'scaleX(0)');
				$(".cam-nav5").css('opacity', '0');
			},100)
			setTimeout(function(){
				$(".cam-nav4").css('transform', 'scaleX(0)');
				$(".cam-nav4").css('opacity', '0');
			},200)
			setTimeout(function(){
				$(".cam-nav3").css('transform', 'scaleX(0)');
				$(".cam-nav3").css('opacity', '0');
			},300)
			setTimeout(function(){
				$(".cam-nav2").css('transform', 'scaleX(0)');
				$(".cam-nav2").css('opacity', '0');
			},400)
			setTimeout(function(){
				$(".cam-nav1").css('transform', 'scaleX(0)');
				$(".cam-nav1").css('opacity', '0');
			},500)
			setTimeout(function(){
				$("#close").css('opacity', '0');
			},600)
			setTimeout(function(){
				$("#cont-nav2").css('backgroundColor', 'rgba(0,0,0,0)');
				setTimeout(function(){$("#cont-nav2").css('display', 'none');}, 400)	
			},800)
			//setTimeout(function(){document.getElementById("cont-nav2").style.display = 'none';},800)
			showNav=0;
		}
	});
}
function funHideNav(){
	document.getElementById("cont-nav2").style.display = 'none';
	$("#close").css('opacity', '0');
	$(".navCamb").css('transform', 'scaleX(0)');
	showNav=0;
}
function funBloque1(){
	$(document).ready(function(){
		$("#cam-img-1").css('opacity', '1');
		$("#cam-img-1").css('transform', 'translateX(0%)');
		$("#word1").css('transform', 'translateX(0%)');
		$("#word1").css('opacity', '1');
		$("h1").css('transform', 'scaleY(1)');
		$("h1").css('transform', 'scaleX(1)');
		setTimeout(function(){
			$(".cam-parra-1").css('transform', 'translateX(0%)');
			$(".cam-parra-1").css('opacity', '1');
		},500);
			setTimeout(function(){
			$(".cam-titu-1").css('transform', 'scaleY(1)');
			$(".cam-titu-1").css('transform', 'scaleX(1)');
		},1000);
		setTimeout(function(){
			$(".cam-parra-2").css('transform', 'translateX(0%)');
			$(".cam-parra-2").css('opacity', '1');
		},1100);
	})
}
/*====================================
DOM
====================================*/
btnLeft.addEventListener('click', () => {
	funSliderLeft('.seccion-slider', '#cont-slider');
});
btnRight.addEventListener('click', () => {
	funSliderRight('.seccion-slider', '#cont-slider');
});