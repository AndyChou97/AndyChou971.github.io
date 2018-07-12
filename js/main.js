window.onload = function(){
	var banner = document.getElementById("banner")
  	var list = document.getElementById("ul_list")
  	var li = list.getElementsByTagName('li');
	var oPrev = document.getElementById("prev");
	var oNext = document.getElementById("next");
	var oDiv = document.getElementById('point');
	var oSpan = oDiv.getElementsByTagName('span');
	var aDiv = document.getElementsByClassName('Thumb_a');



	var num = 0;
	var timer = null;
  var timeout = null;
	var oldSpan = null;
	var numa = 0;


	oldSpan = oSpan[num];
	function Point(){
		oldSpan.className = '';
		oldSpan = oSpan[num];
		oSpan[num].className = 'on';
	}

	Point();

	for (var i = 0; i < oSpan.length; i++) {
		oSpan[i].index = i;
		oSpan[i].onclick = function (){
			num = this.index;
			clearTimeout(timeout);
			clearInterval(timer);
			Point();
			Tab();
			play();
		}
		oSpan[i].onmouseover = function(){
			for (var i = 0; i < aDiv.length; i++) {
				aDiv[i].style.display = 'none';
			}
			numa = this.index;
			aDiv[numa].style.display = 'block';

			}
			oSpan[i].onmouseout = function(){
				for (var i = 0; i < aDiv.length; i++) {
					aDiv[i].style.display = 'none';
				}

				}

		}



	function Tab(){
    if( num === li.length ) num = 0;
    list.style.left = -num * 100 + '%';
	}
  	play();

	  function play() {
	    timer = setInterval(function() {
	      num ++;
	      Tab();
				Point();
	    }, 3000);
	  }







	oNext.onclick = function(){
    clearTimeout(timeout);
		clearInterval(timer);
    num ++;
    if( num === li.length ) num = 0;
		Tab();
		Point();
    timeout = setTimeout(play, 2000);

	};
	oPrev.onclick = function(){
    clearTimeout(timeout);
		clearInterval(timer);
    num --;
    if( num === -1 ) num = li.length - 1;
		Tab();
		Point();
    timeout = setTimeout(play, 2000);

	};

  (function() {

      var chuList = document.getElementsByClassName('chuList');
      var chuRight = document.getElementsByClassName('chu_right');

      var colorArr = ['#f85e3a', '#3a8aeb', '#1ca112', '#c45b1a'];


      for (var i = 0; i < chuList.length; i++) {
          if( i === 3 ) {
            hover(chuList[i], chuRight[i+1], i);
          }else {
            hover(chuList[i], chuRight[i], i);
          }
      }

      function hover(obj1, obj2, index) {
        var div = obj1.getElementsByTagName('li');

        var box = obj2.getElementsByClassName('ds');


        for (var i = 0; i < div.length; i++) {
          div[i].index = i;
          div[i].onmouseover = function() {

            for (var i = 0; i < div.length; i++) {
              div[i].style.backgroundColor = 'transparent';
              div[i].style.color = '#000';
            }
            this.style.color = '#fff';
            this.style.backgroundColor = colorArr[index];

            for (var i = 0; i < box.length; i++) {
              box[i].style.display = 'none';
            }

            box[this.index].style.display = 'block';

          }
        }

      }

  })();
	(function(){
		var hul = document.getElementsByClassName('h_ul');
		var hbt = document.getElementsByClassName('h_bottom');
		for (var i = 0; i < hul.length; i++) {
			hv(hul[i],hbt[i],i);
		}
		function hv(ob1,ob2,nu) {
			var ht = ob1.getElementsByTagName('li');
			var hb = ob2.getElementsByClassName('hb')

			for (var i = 0; i < ht.length; i++) {
				ht[i].nu = i;
				ht[i].onmouseover = function(){
					for (var i = 0; i < ht.length; i++) {
						ht[i].style.backgroundColor = 'transparent';
						ht[i].style.color = '#000';
						ht[i].style.fontWeight = 'normal';
					}
					this.style.color = '#1e9f00';
					this.style.fontWeight = '600';

					for (var i = 0; i < hb.length; i++) {
						hb[i].style.display = 'none';
					}
					hb[this.nu].style.display = 'block';
				}
			}
		}
	})();


}
$(function(){
	var timer = null;

	$('.wx').mouseover(function(){
		clearInterval(timer);
		$('.weixin_img').show("slow");
		$('.lb_bt').hide("slow");
	});

	$('.wx').mouseout(function(){
		clearInterval(timer);
		timer = setTimeout(function(){
		$('.weixin_img').hide("slow");
	},0);
	});

	$('.lb').mouseover(function(){
		clearInterval(timer);
		$('.lb_bt').show("slow");
		$('.weixin_img').hide("slow");
	});

	$('.lb').mouseout(function(){
		clearInterval(timer);
		timer = setTimeout(function(){
		$('.lb_bt').hide("slow");
	},0);
	});


	$(".item:eq(0)").mouseover(function(){
		clearInterval(timer);
		$(".m_main:eq(0)").show("slow");
	});

	$(".item:eq(0)").mouseout(function(){
		clearInterval(timer);
		timer = setTimeout(function () {
			$(".m_main:eq(0)").hide("slow");
			$(".m_main:eq(1)").hide("slow");
		},0);
	});


	$(".item:eq(2)").mouseover(function(){
		clearInterval(timer);
		$(".m_main:eq(1)").show("slow");
	});

	$(".item:eq(2)").mouseout(function(){
		clearInterval(timer);
		timer = setTimeout(function () {
			$(".m_main:eq(1)").hide("slow");
			$(".m_main:eq(0)").hide("slow");
		},0);
	});
});
