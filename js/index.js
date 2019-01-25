//轮播图初始化
window.onload = function() {
    var header = document.getElementById('header');
    var slide = document.getElementById('slide');
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
    
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 自动轮播
        autoplay:true
    })
    // 设置顶部透明
        //获取当前滚动出屏幕的距离
        // document.body.scrollTop:有兼容性，一些浏览器不支持，如果不支持则返回0
    var scrollOut = document.documentElement.scrollTop + document.body.scrollTop;
    var opacity = scrollOut / slide.offsetHeight;
    if (opacity >= 1) {
        opacity = 1;
    }
    // 反引号可以解析特定格式的变量
    header.style.backgroundColor = `rgba(233,35,34,${opacity})`
    window.onscroll = function () {
        // if (window.pageYOffset >= slide.offsetHeight) {
        //     header.style.backgroundColor = "#de181b";
        // }else {
        //     header.style.backgroundColor = "";
        // }
        scrollOut = document.documentElement.scrollTop + document.body.scrollTop;
        opacity = scrollOut / slide.offsetHeight;
        if (opacity >= 1) {
            opacity = 1;
        }
        // 反引号可以解析特定格式的变量
        header.style.backgroundColor = `rgba(233,35,34,${opacity})`
    }

    // 倒计时
    var time = 3700;
    var timeId = setInterval(function () {
        time--;
        var hour = Math.floor(time/3600);
        var minute = Math.floor(time%3600/60);
        var secound = time%60;
        var timeBox = document.getElementsByClassName('time');
        timeBox[0].innerHTML = Math.floor(hour/10);
        timeBox[1].innerHTML = hour%10;
        timeBox[3].innerHTML = Math.floor(minute/10);
        timeBox[4].innerHTML = minute%10;
        timeBox[6].innerHTML = Math.floor(secound/10);
        timeBox[7].innerHTML = secound%10;
        // 时间为0时停止定时器
        if (time == 0) {
            clearInterval(timeId);
        }
    },1000)
  }