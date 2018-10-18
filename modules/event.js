define(function() {
    return function(ele,eventName,callback){
        //写东西不要捉急，慢慢来，容器出错！
        ele.addEventListener(eventName,callback);
    }
});