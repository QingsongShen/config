$(function (){
    // 定义页面点击特效
    var a_idx = 0;
    $body = $("body");
    $body.click(function(e) {
        var a = ["❤开心❤","❤快乐❤","❤高兴❤","❤开心❤","❤快乐❤","❤麻瓜❤","❤开心❤","❤开心❤","❤开心❤","❤开心❤","❤开心❤","❤开心❤"];
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": 12,
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    })
})
