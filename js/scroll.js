/*====================================
javascript code
autor: juan francisco lopez morales
====================================*/

/*====================================
Variables
====================================*/
var ancho = window.innerWidth;

/*====================================
Funciones
====================================*/
function funBloque1(){
		//cambio sin scroll en block 1
		$('#word1').css('transform', 'translateY(0)');
		$('#word1').css('opacity', '1');
		$('.scroll1Block1').css('transform', 'scale(1)');
		$('.scroll2Block1').css('transform', 'translateY(0)');
		$('.scroll2Block1').css('opacity', '1');
		$('.scroll3Block1').css('opacity', '1');
		$('.scroll4Block1').css('opacity', '1');
}

/*====================================
DOM
====================================*/
window.addEventListener('scroll', () => {
	var alto = window.innerHeight/1.4;
	if(ancho < 600){
		var block1= document.getElementById("navShow");
	}else{
		var block1= document.getElementById("block1");
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
					$("#posi-nav").css('boxShadow', '0 2px 5px rgba(0, 0, 0, .3)');
					if(ancho > 1280){
						$(".headerScroll4").css('transform', 'translateX(-100%)');
						setTimeout( () => {
							$("#redes").css('display', 'block');
							$("#redes").css('opacity', '1');
						}, 800)
					}
				},200)
			}
			//block 1
			if(ancho < 500){
				funBloque1();
			}else{
				$('#word1').css('transform', 'translateY(0)');
				$('#word1').css('opacity', '1');
				setTimeout( () => {$('.scroll1Block1').css('transform', 'scale(1)');}, 600);
				setTimeout( () => {
					$('.scroll2Block1').css('transform', 'translateY(0)');
					$('.scroll2Block1').css('opacity', '1');
				}, 900);
				setTimeout( () => {$('.scroll3Block1').css('opacity', '1');}, 1200);
				setTimeout( () => {$('.scroll4Block1').css('opacity', '1');}, 1500);
			}

		}else{
			//Ocultar menu
			$("#posi-nav").css('borderBottom', 'none');
			$("#posi-nav").css('position', 'absolute');
			$("#posi-nav").css('transition', '0');
			$("#posi-nav").css('backgroundColor', 'rgba(255,255,255,0)');
			$("#posi-nav").css('boxShadow', 'none');
			if(ancho > 1280){
				$("#redes").css('display', 'none');
				$(".headerScroll4").css('transform', 'translateX(0)')
			}
			if(ancho < 980){
				$("#nav2").css('backgroundColor', 'rgba(0,0,0,0)');
			}
			nav=0;
		}
		//block2
		var block2 = document.getElementById("block2");
		var altoBlock2 = block2.getBoundingClientRect().top;
		if(altoBlock2 <= alto){
			$(".cam4-titu-1").css('transform', 'scale(1)');
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

		//Reserve
		var reserve = document.getElementById("box-reserve");
		var altoReserve = reserve.getBoundingClientRect().top;
		if(altoReserve <= alto){
			$('.scroll1Reseve').css('opacity', '1');
			setTimeout( () => {$('.scroll2Reseve').css('transform', 'scale(1)');}, 600);
			setTimeout( () => {
				$('.scroll3Reseve').css('transform', 'translateY(0)');
				$('.scroll3Reseve').css('opacity', '1');
			}, 900);
			setTimeout( () => {$('.scroll4Reseve').css('transform', 'scale(1)');}, 1200);
		}

		//block4
		var block4 = document.getElementById("block4");
		var altoBlock4 = block4.getBoundingClientRect().top;
		if(altoBlock4 <= alto){
			$(".cam3-titu-1").css('transform', 'scale(1)');
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
		//contact
		var block5 = document.getElementById("destinos");
		var altoBlock5 = block5.getBoundingClientRect().top;
		if(altoBlock5 <= alto){
			$(".cam5-titu-1").css('transform', 'scale(1)');
			$(".cam5-titu-1").css('opacity', '1');
			$(".cam-l4").css('transform', 'scaleX(1)');
			setTimeout( () => {
				$(".scrollparraDes").css('opacity', '1');
				$(".scrollparraDes").css('transform', 'translateX(0)');
			}, 700);
			setTimeout( () => {$(".bigCard1").css('opacity', '1');}, 900);
			setTimeout( () => {$(".bigCard2").css('opacity', '1');}, 1200);
			setTimeout( () => {$(".bigCard3").css('opacity', '1');}, 1500);
			setTimeout( () => {$(".scrollBtnDes").css('opacity', '1');}, 1700);
		}

		//footer
		var footer = document.getElementById("destinos");
		var altofooter = footer.getBoundingClientRect().top;

		if(altofooter <= alto){
			if(ancho > 1280){
				$("#redes").css('opacity', '0');
			}
			setTimeout( () => {$("#cont-footer").css('opacity', '1');}, 800);
			setTimeout( () => {$(".scroll2footer").css('opacity', '1');}, 1200);
			setTimeout( () => {$(".scroll3footer").css('opacity', '1');}, 1400);
			setTimeout( () => {$(".scroll4footer").css('opacity', '1');}, 1600);
			setTimeout( () => {$(".scroll5footer").css('opacity', '1');}, 1800);
		}else{
			if(ancho > 1280){
				$("#redes").css('opacity', '1');
			}
		}
	});//end ready
});