console.log('jquery');
        var btn_content = $('#btn_content'),                    
            content = $('#content');          
                
        btn_content.on('click',function(){  
            
            if (content.hasClass('reveal')){
                
                content.removeClass('reveal').addClass('unreveal');
            }
            
            else{                
                content.removeClass('unreveal').addClass('reveal');
            }
        });
        
        /**/
        
        var btn_pulse = $('.pulse_active');        
            pulse= $('.pulse');
            p = $('.pulse').length;
        var i=0;
        
        btn_pulse.on('click',function(){
            
            if((pulse).hasClass('pulsing')){
                
                pulse.removeClass('pulsing');
            }
            
            else{                
                setInterval(function(){               
                    pulse.addClass('pulsing'); i++;},200);        
                if(i>p){clearInterval()};                
            }           
            pulse.removeClass('pulsing')
                    
        });  
        
        var btnEffect = $('.effect'),
            info = $('.information'),
            infoTitle=('.information_title'),
            i=0;

            
            btnEffect.on('click',function(){              
              
                if((info).hasClass('magictime spaceInLeft')){
                    
                    info.removeClass('magictime spaceInLeft').addClass('unspace');
                }
                else{
                    
                    info.remove('unspace').addClass('magictime spaceInLeft');
                    
                    setTimeout(function(){
                        $('.cookie').addClass('magictime swap');
                            }, 500);
                }                
                $('.cookie').removeClass('magictime swap');
                
            });



        var link = $('.element');            

            link.on('click',function(){
                
               if($(this).hasClass('slideLeft')){
                   
                   $(this).removeClass('slideLeft').addClass('unslideLeft');
               }
                else{
                    
                    $(this).removeClass('unslideLeft').addClass('slideLeft');              
                    
                }              
                
            });


var s = Snap('#svg');

    Snap.load("./img/beer.svg", function (loadedSvg) {

    // ici on sélectione le polyline qui est ton symbole V
    var check = loadedSvg.select("polyline");

//on définit la division tu trait http://tutorials.jenkov.com/svg/stroke.html#stroke-dasharray-stroke-dashoffset
        check.attr({
			 "stroke-dasharray": 40,
                "stroke-dashoffset": 40
			 });

//je sélectionne la bière qui est le seul groupe ( j'ai modifié ton beer.svg pour que je puisse le faire ) 
			 var beer = loadedSvg.select("g");
			 //j'agrandit ici la bière elle, elle était trop petite
			 beer.attr({transform:"scale(3)"});

			 //ici j'écoute le click
			 beer.click(function(){	
			    	//j'anime le dashoffset
			     check.animate({"stroke-dashoffset":"0"}, 800);
			 })

s.append(beer);
});





  