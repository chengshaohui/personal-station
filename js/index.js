$(function(){
	// 自我介绍部分
	$('.intro .row').addClass('active')

	// 导航部分
	function navArea() {
		var sh = window.screen.height
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop()
			if (scrollTop > sh) {
				$('#nav').addClass('move');
			} else {
				$('#nav').removeClass('move');
			}
		})
	}
	navArea();

	//portfolio自动切换区域
	function portfolio() {
		var $container = $('.portfolio-items');
		$container.isotope({
		    filter: '*',
		    animationOptions: {
		        duration: 750,
		        easing: 'linear',
		        queue: false
		    }
		});
		$('.cat a').click(function() {
		    $('.cat .active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    $container.isotope({
		        filter: selector,
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });
		    return false;
		});
	}
	portfolio();

	// 技能展现


/*		let canvas = document.querySelectorAll('canvas')
		var paints = [];
		var $datavals = [];
		var i = []
		var circle = []
		canvas.forEach(function (value, index) {
			paints[index] = value.getContext('2d')
			$datavals[index] = Number($(value).attr('dataval'))
			i[index] = 0
			circle(i[index], paints[index], $datavals[index])
			function circle(i, paint, $dataval) {
				paint.clearRect(0,0,152,160)
				i++
				paint.beginPath()
				paint.lineWidth = 10
				paint.arc(76, 80, 70, 0, 2 * Math.PI * i / 100 )
				paint.strokeStyle = '#2c3e50'
				paint.stroke()
				paint.font = '26px 宋体'
				paint.textAlign = 'right'
				paint.textBaseline = 'bottom'
				paint.fillStyle = '#616e7c'
				paint.fillText(`${i}%`, 100, 100)
				let t = window.requestAnimationFrame(circle)
				if (i >= $dataval) {
					cancelAnimationFrame(t)
				}
			}
		})*/




		var canvas = document.querySelectorAll('canvas')[0]
		paint = canvas.getContext('2d')
		var i = 0
		var $dataval = $('canvas').attr('dataval')
		circle()
		function circle() {
			paint.clearRect(0,0,canvas.width,canvas.height)
			i++
			paint.beginPath()
			paint.lineWidth = 10
			paint.arc(76, 80, 70, 0, 2 * Math.PI * i / 100 )
			paint.strokeStyle = '#2c3e50'
			paint.stroke()
			paint.font = '26px 宋体'
			paint.textAlign = 'right'
			paint.textBaseline = 'bottom'
			paint.fillStyle = '#616e7c'
			paint.fillText(`${i}%`, 100, 100)
			var t = window.requestAnimationFrame(circle)
			if (i >= $dataval) {
				cancelAnimationFrame(t)
			}
		}

		var canvas2 = document.querySelectorAll('canvas')[1]
		paint2 = canvas2.getContext('2d')
		var j = 0
		var $dataval2 = Number($(canvas2).attr('dataval'))
		circle2()
		function circle2() {
			paint2.clearRect(0,0,canvas2.width,canvas2.height)
			j++
			paint2.beginPath()
			paint2.lineWidth = 10
			paint2.arc(76, 80, 70, 0, 2 * Math.PI * j / 100 )
			paint2.strokeStyle = '#2c3e50'
			paint2.stroke()
			paint2.font = '26px 宋体'
			paint2.textAlign = 'right'
			paint2.textBaseline = 'bottom'
			paint2.fillStyle = '#616e7c'
			paint2.fillText(`${j}%`, 100, 100)
			var t = window.requestAnimationFrame(circle2)
			console.log(canvas2, paint2, $dataval2, j)
			if (j >= $dataval2) {
				cancelAnimationFrame(t)
			}
		}

		var canvas3 = document.querySelectorAll('canvas')[2]
		paint3 = canvas3.getContext('2d')
		var k = 0
		var $dataval3 = Number($(canvas3).attr('dataval'))
		circle3()
		function circle3() {
			paint3.clearRect(0,0,canvas2.width,canvas2.height)
			k++
			paint3.beginPath()
			paint3.lineWidth = 10
			paint3.arc(76, 80, 70, 0, 2 * Math.PI * k / 100 )
			paint3.strokeStyle = '#2c3e50'
			paint3.stroke()
			paint3.font = '26px 宋体'
			paint3.textAlign = 'right'
			paint3.textBaseline = 'bottom'
			paint3.fillStyle = '#616e7c'
			paint3.fillText(`${k}%`, 100, 100)
			var t = window.requestAnimationFrame(circle3)
			if (k >= $dataval3) {
				cancelAnimationFrame(t)
			}
		}



		
});