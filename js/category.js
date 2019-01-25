window.onload = function () {
    // 左右轮播图初始化设置
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        freeMode : true,//抵抗反弹
        slidesPerView : 'auto',//让一页可以显示多个slides
      })   
      
    //   点击吸顶事件
    var liList = document.querySelectorAll('.left li');
    var left = document.querySelector('#main .left')
    var swiper_wrapper = left.querySelector('.swiper-wrapper');
    var swiper_slide = left.querySelector('.swiper-slide');
    var liH = liList[0].offsetHeight;
    var maxH = swiper_slide.offsetHeight-swiper_wrapper.offsetHeight;
    for (let i = 0; i < liList.length; i++) {
        event.tap(liList[i],function(e){
            swiper_wrapper.style.transition = "transform 1s";
            distance = liH*i;
            console.log(distance);
            console.log(maxH);
            if (distance > maxH) {
                distance = maxH;
            }
            swiper_wrapper.style.transform = `translateY(-${distance}px)`;
            // 移除掉每一个li的active类名
            for (var j = 0; j < liList.length; j++) {
                liList[j].classList.remove('active')
            }
            liList[i].classList.add("active");
            
        })
    }
}