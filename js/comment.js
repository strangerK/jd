// tap事件的封装,由于在移动端鼠标单击事件会有延迟,所以移动端一般使用touch事件进行判断单击事件
// 在移动端页面中,tap事件经常需要使用,所以对其进行封装
var event = {
    tap:function (dom,callback) {
        var stX,stY,startTime;
        dom.addEventListener('touchstart',function (e) {
            if (e.targetTouches.length > 1 ) {
                return;
            }
            startTime = Date.now();
            stX = e.targetTouches.clientX;
            stY = e.targetTouches.clientY;
        })
        dom.addEventListener('touchend',function (e) {
        //    判断按键的时间是否有超过200毫秒
            if (Date.now()-startTime >200) {
                //时间超过200毫秒,不做反应
                return;
            }
        //    判断按键移动距离有没有超过一定的距离
            var endX = e.targetTouches.clientX;
            var endY = e.targetTouches.clientY;
            if (Math.abs(stX-endX)>6 || Math.abs(stY-endY)>6) {
                return;
            }
            //执行回调函数
            callback && (typeof callback == 'function') && callback(e);
        })

    }
}