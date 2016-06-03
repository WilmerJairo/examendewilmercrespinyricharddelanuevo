// JavaScript Document
 (function() {

    var isCanvasSupported = function () {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    };

    if( isCanvasSupported() ) {

      var canvas = document.getElementById('broken-glass'),
          context = canvas.getContext('2d'),
          width = canvas.width = Math.min(800, window.innerWidth),
          height = canvas.height,  
          numTriangles = 100,
          rand = function(min, max){
            return Math.floor( (Math.random() * (max - min + 1) ) + min);
          };
          
      window.drawTriangles = function(){
        context.clearRect(0, 0, width, height);
        var hue = rand(0,360);
        var increment = 80 / numTriangles;
        for(var i = 0; i < numTriangles; i++) { 
            context.beginPath();      
            context.moveTo(rand(0,width), rand(0,height) );  
            context.lineTo(rand(0,width), rand(0,height) );
            context.lineTo(rand(0,width), rand(0,height) );
            context.globalAlpha = 0.5;
            context.fillStyle = 'hsl('+Math.round(hue)+', '+rand(15,60)+'%, '+ rand(10, 60) +'%)';      
            context.closePath();    
            context.fill();

            hue+=increment;
            if(hue > 360) hue = 0;
        }
        canvas.style.cssText = '-webkit-filter: contrast(115%);';
      };

      document.getElementById('logo-title').style.color = 'rgba(250, 250, 250, 0.95)';
      drawTriangles();

      var el = document.getElementById('logo');
      el.onclick = function() {
        drawTriangles();
      };
    }

  })();

      $(document).ready(function() {

        $('.image-popup-vertical-fit').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
          
        });

        $('.image-popup-fit-width').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          image: {
            verticalFit: false
          }
        });

        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

      });
   