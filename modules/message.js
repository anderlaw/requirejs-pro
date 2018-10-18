//
define(function(){
    
    return {
        error:function(message){
            let ele = document.createElement('div')
            ele.className = "msg error";
            ele.innerHTML = message;
            document.body.appendChild(ele);
            setTimeout(function(){
                document.body.removeChild(ele)
            },1500)
        },
        success:function(message){
            let ele = document.createElement('div')
            ele.className = "msg";
            ele.innerHTML = message;
            document.body.appendChild(ele);
            setTimeout(function(){
                document.body.removeChild(ele)
            },1500)
        }

    }
})