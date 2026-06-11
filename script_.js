$(function() {
    // 1. ローディング画面の制御
    setTimeout(function(){
        $('#loading_overlay').fadeOut(400);
        $('body').css('overflow','scroll');
    }, 2000);

    // 2. スクロール時のフェードインアニメーション (inview)
    $(window).load(function() {
        $('.fade-in-up').bind('inview', function(event, visible) {
            if (visible) {
                $(this).addClass('fade-in-up-done');
            }
        });
    });

    // 3. スムーススクロール用のイージング設定
    jQuery.easing.quart = function(e,f,a,h,g){
        if((f/=g/2)<1){
            return h/2*f*f+a
        }
        return -h/2*((--f)*(f-2)-1)+a
    };
    jQuery.easing.easeInOutQuart = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    };

    // 4. TOPへ戻るボタンの動作
    $('#button_gotop').click(function(){
        $("#container,body").animate({scrollTop:0}, 700, 'quart');
    });

// 5. メインビジュアルのランダム表示（絶対パス版）
var pathPrefix = "https://feature-tool.like-s.com/assets/uploads/202601/5d08995d-a7b4-4580-b85c-3b7babc9ec68/asset/images/";
    var images = [];

    if (window.matchMedia("(max-width: 768px)").matches) {
        // スマートフォン用（max-width: 768px）
        images = [
            pathPrefix + "main01_sp.jpg",
            pathPrefix + "main02_sp.jpg",
            pathPrefix + "main03_sp.jpg",
            pathPrefix + "main04_sp.jpg",
            pathPrefix + "main05_sp.jpg",
            pathPrefix + "main06_sp.jpg",
        ];
    } else {
        // PC用
        images = [
            pathPrefix + "main01.jpg",
            pathPrefix + "main02.jpg",
            pathPrefix + "main03.jpg",
            pathPrefix + "main04.jpg",
            pathPrefix + "main05.jpg",
            pathPrefix + "main06.jpg",
        ];
    }

    // ランダムに1枚選定して背景に設定
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImg = images[randomIndex];
    $(".feature_contents .contents_inner .main_visual").css('background-image', 'url("' + selectedImg + '")');

    // 6. Typekit (Adobe Fonts) の読み込み設定
    (function(d) {
        var config = {
            kitId: 'xxm0sld',
            scriptTimeout: 3000,
            async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
});