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
var altoCard = 1;

const contDestacados = document.getElementById("cont-img-destacados");
let seccionDestacados = document.querySelectorAll(".card-destacados");
let sliderLastDestacados = seccionDestacados[seccionDestacados.length - 1];
const btnLeftDestacados = document.getElementById("left-destino");
const btnRightDestacados = document.getElementById("right-destino");


/*====================================
General
====================================*/
$(document).ready(function(){
	$(active).addClass('active');


	//scroll header
	$('.headerScroll1').css('transform', 'translateX(0)');
	$('.headerScroll1').css('opacity', '1');
	setTimeout( () => {
		$('.headerScroll2').css('transform', 'translateX(0)');
		$('.headerScroll2').css('opacity', '1');
	}, 600);
	setTimeout( () => {$('.headerScroll3').css('transform', 'scale(1)');}, 900);
	setTimeout( () => {$('.headerScroll4').css('transform', 'translateX(0)');}, 1200);
	setTimeout( () => {$('.headerScroll5').css('transform', 'scale(1)');}, 1500);

	//change image
	if(ancho < 650){
		$("#img-chance").attr('src', 'img/reserva(movil).jpg');
	}
	if(ancho < 600){
		$("#camImg-offer1").attr('src', 'img/imagen6(movil).jpg');
		$("#camImg-offer2").attr('src', 'img/imagen3(movil).jpg');
		$("#camImg-offer3").attr('src', 'img/imagen4(movil).jpg');
	}
	if(ancho < 500){funBloque1();}
});
//this is for the header's slider
contDestacados.insertAdjacentElement('afterbegin', sliderLastDestacados);

/*====================================
Functions
====================================*/
function funSliderLeft(clase, cont){
	if(turno == 1){
		let seccion = document.querySelectorAll(clase);
		let sliderLast = seccion[seccion.length -1];
		var contGeneral = document.querySelector(cont);
		if(cont == '#cont-img-destacados'){
			funAltoCard('left');
			contGeneral.style.marginLeft = '0';
		}else{
			contGeneral.style.marginLeft = '0';
		}
		contGeneral.style.transition = '.4s';
		turno=0;
		setTimeout(function(){
			contGeneral.style.transition = 'none';
			contGeneral.insertAdjacentElement('afterbegin', sliderLast);
			if(cont == '#cont-img-destacados'){
				contGeneral.style.marginLeft = '-280px';
			}else{
				contGeneral.style.marginLeft = '-100%';
			}
			turno=1;
		}, 400);
	}
}
function funSliderRight(clase, cont){
	if(turno == 1){
		let sliderFirst = document.querySelectorAll(clase)[0];
		var contGeneral = document.querySelector(cont);
		if(cont == '#cont-img-destacados'){
			funAltoCard('right');
			contGeneral.style.marginLeft = '-550px';
		}else{
			contGeneral.style.marginLeft = '-200%';
		}
		turno=0;
		contGeneral.style.transition = '.4s';
		setTimeout(function(){
			contGeneral.style.transition = 'none';
			contGeneral.insertAdjacentElement('beforeend', sliderFirst);
			if(cont == '#cont-img-destacados'){
				contGeneral.style.marginLeft = '-280px';
			}else{
				contGeneral.style.marginLeft = '-100%';
			}
			turno=1;
		}, 400);
	}
}
function funAltoCard(control){
	$(document).ready(function(){
		if(control == 'left'){
			var tituAnterior = '.topTituloDes'+altoCard;
			var efectoAnterior = '.bigCard'+altoCard;
			if(altoCard == 1){
				altoCard = 4;
			}else{
				altoCard--;
			}
			var efectoSiguiente = '.bigCard'+altoCard;
			var tituSiguiente = '.topTituloDes'+altoCard;

		}else if(control == 'right'){
			var tituAnterior = '.topTituloDes'+altoCard;
			var efectoAnterior = '.bigCard'+altoCard;
			if(altoCard == 4){
				altoCard = 1;
			}else{
				altoCard++;
			}
			var tituSiguiente = '.topTituloDes'+altoCard;
			var efectoSiguiente = '.bigCard'+altoCard;
		}
		$(tituAnterior).css('marginTop', '0');
		$(efectoAnterior).css('marginTop', '15px');
		$(efectoAnterior).css('height', '300px');
		$(tituSiguiente).css('marginTop', '17px');
		$(efectoSiguiente).css('marginTop', '0');
		$(efectoSiguiente).css('height', '330px');
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
//movimiento estrellas
function funMovimietoObjetos(){
	let scrollTop = document.documentElement.scrollTop;
	var alto = window.innerHeight/1.4;
	var comando = 'translateY('+ scrollTop * -0.5 +'px)';

	//estrella header
	for(var x=1; x<=9; x++){
		var nombre = 'estrella'+x;
		document.getElementById(nombre).style.transform = comando;
	}
}
function funBloque1(){
	$(document).ready(function(){
		/*
		codigo scroll

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
		*/
	})
	
}
/*====================================
DOM
====================================*/
btnLeftDestacados.addEventListener('click', () => {
	//funSliderLeft('nombre de la clase de todas las secciones', 'nombre del contenedor')
	funSliderLeft('.card-destacados', '#cont-img-destacados')
});
btnRightDestacados.addEventListener('click', () => {
	funSliderRight('.card-destacados', '#cont-img-destacados');
});
window.addEventListener('scroll', funMovimietoObjetos);
//rotacion del telefono
window.matchMedia('(orientation: portrait)').addListener(function(m) {
	$(document).ready(function(){
		if(ancho < 500){
			if(m.matches){
				//ventana movil
				//$("#camImg").attr('src', 'img/fondo(movil).jpg');
				//$("#cont-info-header").css('marginTop', '45vh');
				$(".rotationTitu").css('fontSize', '33px');
			}else{
				//ventana compu
				//$("#camImg").attr('src', 'img/fondo.jpg');
				//$("#cont-info-header").css('marginTop', '20vh');
				$(".rotationTitu").css('fontSize', '40px');
			}
		}
	});
});