  window.onload = function() {
        var GTList = document.getElementsByClassName('gt_list');
        var tarMain = document.getElementsByClassName('cm_main');
        var oDiv = document.getElementById('no');
        var tDiv = document.getElementById('mudi');

        var colorArr = ['#1ca112', '#f85e3a', '#c45b1a'];
        var num = 0;

        tDiv.onmouseover = function(){
          oDiv.style.display = 'block';
        }
        tDiv.onmouseout = function(){
          oDiv.style.display = 'none';
        }




        for (var i = 0; i < GTList.length; i++) {
            if( i === 2 ) {
              hover(GTList[i], tarMain[i+1], i);
            }else {
              hover(GTList[i], tarMain[i], i);
            }
        }

        function hover(obj1, obj2, index) {
          var div = obj1.getElementsByTagName('li');

          var box = obj2.getElementsByClassName('cm_ds');


          for (var i = 0; i < div.length; i++) {
            div[i].index = i;
            div[i].onmouseover = function() {

              for (var i = 0; i < div.length; i++) {
                div[i].style.backgroundColor = 'transparent';
                div[i].style.color = '#000';
              }
              this.style.color = '#fff'
              this.style.backgroundColor = colorArr[index];
              if(this.index === div.length - 1 ) return;

              for (var i = 0; i < box.length; i++) {
                box[i].style.display = 'none';
              }

              box[this.index].style.display = 'block';

            }
          }
        }
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
    }
