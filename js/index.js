 var index=0;
 		$('.bgpge1 .pg1box').addClass('sty1');
 		$('h1 span:eq(0)').css('animation','onerun .8s linear 1s 1 alternate forwards');
 		$('h1 span:eq(1)').css('animation','onerun .8s linear 1.5s 1 alternate forwards');
 		$('h1 span:eq(2)').css('animation','onerun .8s linear 1.8s 1 alternate forwards');
 		// $('h1 span:eq(0)').css('-moz-animation','onerun .8s linear 1s 1 alternate forwards');
 		// $('h1 span:eq(1)').css('-moz-animation','onerun .8s linear 1.5s 1 alternate forwards');
 		// $('h1 span:eq(2)').css('-moz-animation','onerun .8s linear 1.8s 1 alternate forwards');

	$('.fixed ul li').click(function(){
	var index = $(this).index();
	// if (index==0) {
	// 	$('.pg1box span:eq(0)').attr('class','animated bounceInDown faster')
	// 	$('.pg1box span:eq(1)').attr('class','animated bounceInDown delay-1s')
	// 	$('.pg1box span:eq(2)').attr('class','animated bounceInDown fast')
	// }else{
	// 	$('.pg1box span:eq(0)').attr('calss',' ')
	// 	$('.pg1box span:eq(1)').attr('calss',' ')
	// 	$('.pg1box span:eq(2)').attr('calss',' ')
	// }
	if (index==0) {
		$('.bgpge1 .pg1box').addClass('sty1');
		$('h1 span:eq(0)').css('animation','onerun .8s linear 1.2s 1 alternate forwards');
		$('h1 span:eq(1)').css('animation','onerun .8s linear 1.5s 1 alternate forwards');
		$('h1 span:eq(2)').css('animation','onerun .8s linear 1.8s 1 alternate forwards');
		// $('.box').css('animation','page1 3s linear 0s 1 alternate forwards')
	}else{
		$('.bgpge1 .pg1box').removeClass('sty1');
		$('h1 span:eq(0)').css('animation','onerun2 .8s linear 0s 1 alternate forwards');
		$('h1 span:eq(1)').css('animation','onerun2 .8s linear 0s 1 alternate forwards');
		$('h1 span:eq(2)').css('animation','onerun2 .8s linear 0s 1 alternate forwards');
	}
	if (index==1) {
		$('.bgpge2').addClass('sty1');
		// $('.box').css('animation','page1 3s linear 0s 1 alternate forwards')
	}else{
		$('.bgpge2').removeClass('sty1');
	}
	if (index==3) {
		$('.bgpge4').addClass('sty1');
		$('.circlehide').addClass('sty1')
		// $('.box').css('animation','page1 3s linear 0s 1 alternate forwards')
	}else{
		$('.bgpge4').removeClass('sty1');
		$('.circlehide').removeClass('sty1')
	}
	// $(this).css('background','#FF0066').siblings().css('background','black')
	if (index==0) {
		// $('.box').css('animation','page1 3s linear 0s 1 alternate forwards')
		$('.box').css('transform',"rotateX(0deg)")
	}else if (index==1) {
		// $('.box').css('animation','page2 3s linear 0s 1 alternate forwards')
		$('.box').css('transform',"rotateX(90deg)")
	}else if (index==2) {
		// $('.box').css('animation','page3 3s linear 0s 1 alternate forwards')
		$('.box').css('transform',"rotateX(180deg)")
	}else if (index==3) {
		// $('.box').css('animation','page4 3s linear 0s 1 alternate forwards')
		$('.box').css('transform',"rotateX(270deg)")
	}
})
// $('.bg2boxrt').hover(function(){
// 	$('.bg2boxlf .introduce').animate({'right':'20%'},1000)
// },function(){
// 	$('.bg2boxlf .introduce').animate({'right':'30%'},1000)
// })
var timer = null;
var timer2 = null;
var a;
$('.bg3txt1 li').click(function(){
	a=0;
	$('.bG').css('display','block').addClass('sty1');
	$('.bg4show').css('display','block')
	$('.bg4show li:eq('+$(this).index()+')').css('zIndex','2').siblings().css('zIndex','1');
    timer = setInterval(function(){
		a++;
		if (a==2) {
			$('.bG').css('display','none').removeClass('sty1');
			a=0;
			clearInterval(timer)
		}
	},500)
	
})
$('.clos').click(function(){
	a=0;
	$('.bG').css('display','block').addClass('sty2');
	$('.bg4show').css('display','none')
	$('.bg4show li:eq('+$(this).index()+')').css('zIndex','2').siblings().css('zIndex','1');
    timer2 = setInterval(function(){
		a++;
		if (a==2) {
			$('.bG').css('display','none').removeClass('sty2');
			a=0;
			clearInterval(timer2)
		}
	},500)
})