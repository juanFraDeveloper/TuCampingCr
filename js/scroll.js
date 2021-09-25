/*====================================
javascript code
autor: juan francisco lopez morales
====================================*/

/*====================================
Variables
====================================*/
var ancho = window.innerWidth;


/*====================================
DOM
====================================*/
window.addEventListener('scroll', () => {
	var alto = window.innerHeight/1.4;
	//var ancho2 = window.innerWidth;
	//console.log(ancho2);
	if(ancho < 600){

		//resolver esto
		var block1= document.getElementById("navShow");
		//$("#camImg").attr('src', 'img/fondo(movil).jpg');
	}else{
		var block1= document.getElementById("block1");
		//$("#camImg").attr('src', 'img/fondo4.jpg');
	}
	var altblock1 = block1.getBoundingClientRect().top;
	$(document).ready(function(){
		if(altblock1 <= alto){
			if(nav == 0){
				$("#posi-nav").css('top', '-70px');
				nav=1;
				setTimeout(function(){
					$("#posi-nav").css('top', '0');
					$("#posi-nav").css('borderBottom', '1px solid #ECCC8C');
					$("#posi-nav").css('position', 'fixed');
					$("#posi-nav").css('transition', '0.4s');
					$("#posi-nav").css('backgroundColor', '#fff');	
					$(".colorNav").css('color', '#686766');
					$("#posi-nav").css('boxShadow', '0 2px 5px rgba(0, 0, 0, .3)');
					$(".line-nav").css('backgroundColor', ' #846A36');
					if(ancho > 1100){
						$("#redes").css('display', 'block');
						$("#redes").css('opacity', '1');
					}
				},200)
			}
			//block1
			if(ancho > 500){funBloque1();}
		}else{
			$("#posi-nav").css('borderBottom', 'none');
			$("#posi-nav").css('position', 'absolute');
			$("#posi-nav").css('transition', '0');
			$("#posi-nav").css('backgroundColor', 'rgba(255,255,255,0)');
			$("#posi-nav").css('boxShadow', 'none');
			$(".colorNav").css('color', '#fff');
			$("#redes").css('display', 'none');
			$(".line-nav").css('backgroundColor', ' #fff');
			nav=0;
		}

		//block2
		var block2 = document.getElementById("block2");
		var altoBlock2 = block2.getBoundingClientRect().top;
		if(altoBlock2 <= alto){
			if( ancho < 500 ){
				$(".cam2-titu-1").css('fontSize', '33px');
			}else{
				$(".cam2-titu-1").css('fontSize', '40px');
			}
			$(".cam2-titu-1").css('opacity', '1');
			$(".cam-l1").css('transform', 'scaleX(1)');
			setTimeout(function(){$(".cont-card").css('transform','scaleX(1)');},1000);
			setTimeout(function(){
				$(".cam2-subparra").css('opacity', '1');
				$("#right").css('opacity', '1');
				$("#left").css('opacity', '1');
			},1500);
			setTimeout(function(){
				$("#camImg-offer1").css('transform', 'scale(1)');
			}, 1600)
		}

		//block3
		var block3 = document.getElementById("block4");
		var altoBlock3 = block3.getBoundingClientRect().top;
		if(altoBlock3 <= alto){
			if(ancho < 500){
				$(".cam3-titu-1").css('fontSize', '33px');
			}else{
				$(".cam3-titu-1").css('fontSize', '40px');
			}
			$(".cam3-titu-1").css('opacity', '1');
			$(".cam-l2").css('transform', 'scaleX(1)');
			setTimeout(function(){
				$(".cam-serv1").css('transform', 'scale(1)');
				$(".cam-serv1").css('opacity', '1');
			},500)	
			setTimeout(function(){
				$(".cam-serv2").css('transform', 'scale(1)');
				$(".cam-serv2").css('opacity', '1');
			},900)
			setTimeout(function(){
				$(".cam-serv3").css('transform', 'scale(1)');
				$(".cam-serv3").css('opacity', '1');
			},1400)
			setTimeout(function(){
				$(".service").css('transition', '0s');
			},2800);
		}
		//block4
		var block4 = document.getElementById("block5");
		var altoBlock4 = block4.getBoundingClientRect().top;
		if(altoBlock4 <= alto){
			if(ancho < 500){
				$(".cam4-titu-1").css('fontSize', '33px');
			}else{
				$(".cam4-titu-1").css('fontSize', '40px');
			}
			$(".cam4-titu-1").css('opacity', '1');
			$(".cam-l3").css('transform', 'scaleX(1)');
			setTimeout(function(){
				$(".cam-offer1").css('transform', 'translateY(0)');
				$(".cam-offer1").css('opacity', '1');
				setTimeout(function(){$('.sub-cam1').css('transform', 'scaleX(1)')},800)
				setTimeout(function(){
					$(".cam-Offer-parra1").css('transform', 'scaleX(1)');
					$(".cam-Offer-parra1").css('opacity', '1');
					setTimeout(function(){$('.btn-cam1').css('transform', 'scale(1)')},400)
				},1000)
			},800)
			setTimeout(function(){
				$(".cam-offer2").css('transform', 'translateY(0)');
				$(".cam-offer2").css('opacity', '1');
				setTimeout(function(){$('.sub-cam2').css('transform', 'scaleX(1)')},800)
				setTimeout(function(){
					$(".cam-Offer-parra2").css('transform', 'scaleX(1)');
					$(".cam-Offer-parra2").css('opacity', '1');
					setTimeout(function(){$('.btn-cam2').css('transform', 'scale(1)')},400)
				},1000)
			},1400)
			setTimeout(function(){
				$(".cam-offer3").css('transform', 'translateY(0)');
				$(".cam-offer3").css('opacity', '1');
				setTimeout(function(){$('.sub-cam3').css('transform', 'scaleX(1)')},800)
				setTimeout(function(){
					$(".cam-Offer-parra3").css('transform', 'scaleX(1)');
					$(".cam-Offer-parra3").css('opacity', '1');
					setTimeout(function(){$('.btn-cam3').css('transform', 'scale(1)')},400)
				},1000)
			},2000)
		}
		//contact
		var block5 = document.getElementById("contact");
		var altoBlock5 = block5.getBoundingClientRect().top;
		if(altoBlock5 <= alto){
			if(ancho < 500){
				$(".cam5-titu-1").css('fontSize', '33px');
			}else{
				$(".cam5-titu-1").css('fontSize', '40px');
			}
			$(".cam5-titu-1").css('opacity', '1');
			$(".cam-l4").css('transform', 'scaleX(1)');
			setTimeout( () => {$("#imagen-contacto").css('transform', 'scale(1)');}, 400)
			setTimeout(function(){
				$(".cam-contact1").css('transform', 'scaleX(1)');
				$(".cam-contact1").css('opacity', '1');
			},800)
			setTimeout(function(){
				$(".cam-contact2").css('transform', 'scaleX(1)');
				$(".cam-contact2").css('opacity', '1');
			},1200)
			setTimeout(function(){
				$(".cam-contact3").css('transform', 'scaleX(1)');
				$(".cam-contact3").css('opacity', '1');
			},1600)
			setTimeout(function(){
				$(".cam-contact4").css('transform', 'scaleX(1)');
				$(".cam-contact4").css('opacity', '1');
				$("#boton").css('transform', 'scaleX(1)');
				$("#boton").css('opacity', '1');
			},2000)
			setTimeout(function(){$("#boton").css('transition', '0s');},2800)
		}
		var footer = document.getElementById("boton");
		var altofooter = footer.getBoundingClientRect().top;

		if(altofooter <= alto){
			$("footer").css('opacity', '1');
		}
	});//end ready
});