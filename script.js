$(function() {
	setTimeout(function(){
		$('#loading_overlay').fadeOut(400);
		$('body').css('overflow','scroll');
	},2000);
	$(window).load(function() {
		$('.fade-in-up').bind('inview', function(event, visible) {
		  	if (visible) {
			    $(this).addClass('fade-in-up-done');
			}
		});
	});
	jQuery.easing.quart = function(e,f,a,h,g){
		if((f/=g/2)<1){
			return h/2*f*f+a
		}
		return -h/2*((--f)*(f-2)-1)+a
	};
	jQuery.easing.easeInOutQuart = function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;a
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	};
	$('#button_gotop').click(function(){
		$("#container,body").animate({scrollTop:0},700,'quart');
	});

});

if (window.matchMedia( "(max-width: 768px)" ).matches) {
$(function() {
				var array = [
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main01_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main02_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main03_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main04_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main05_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main06_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main07_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main08_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main09_sp.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main10_sp.jpg",
				];
		
				var l = array.length;
				var r = Math.floor(Math.random()*l);
				var bgimgurl = array[r];
				$(".feature_contents .contents_inner .main_visual").css('background-image',('url("'+bgimgurl+'")'));
});
} else {
$(function() {
				var array = [
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main01.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main02.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main03.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main04.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main05.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main06.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main07.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main08.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main09.jpg",
				"https://feature-tool.bcg.staff-start.com/assets/uploads/202506/c189b0c3-04c4-43cb-ab16-f6888a14a427/asset/images/main10.jpg",
				];
		
				var l = array.length;
				var r = Math.floor(Math.random()*l);
				var bgimgurl = array[r];
				$(".feature_contents .contents_inner .main_visual").css('background-image',('url("'+bgimgurl+'")'));
});
}

  (function(d) {
    var config = {
      kitId: 'xxm0sld',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
