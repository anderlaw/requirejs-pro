require(['modules/event','modules/validation','modules/message','modules/ajax'],function(bind,validate,msg,http){
    //必须为数组。
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let speak = document.querySelector('#speak');
    let sure = document.querySelector('#sure')
    let reset = document.querySelector('#reset')
    function registerEvent(ele){
        bind(ele,'input',function(event){
            //绑定事件。
            var ele = event.target;
            //根据是否是空字符串 而得知 验证是否pass
            if(ele.timer){

                clearTimeout(ele.timer);//name
            }
            ele.timer = setTimeout(function(){
                let message = validate(ele);
                if(message !== ""){
                    msg.error(message)
                }
            },500)
        })
    }
    registerEvent(name);
    registerEvent(phone);
    registerEvent(email);
    registerEvent(speak);
    //
    function validatAll(){
        let errorMsgName = validate(name);
        let errorMsgPhone = validate(phone);
        let errorMsgEmail = validate(email);
        let errorMsgSpeak = validate(speak);
        if( errorMsgName !== ""){
            //name 没有验证通过
            msg.error(errorMsgName);
            return;
        }
        if(errorMsgPhone !== ""){
            //name 没有验证通过
            msg.error(errorMsgPhone);
            return;
        }
        if(errorMsgEmail !== ""){
            //name 没有验证通过
            msg.error(errorMsgEmail);
            return;
        }
        if(errorMsgSpeak !== ""){
            //name 没有验证通过
            msg.error(errorMsgSpeak);
            return;
        }
        return true;
    }
    bind(sure,'click',function(event){
        if(validatAll() === true){
            //验证通过
            //发送http请;
            http.setBaseUrl("https://www.easy-mock.com/mock/5b6a9b1691ff8e254d6204b4/solr_copy")
            http.ajax('/saveInfo',function(data){
                console.log(data);
                if(data.success === true){
                    msg.success(data.message);
                    //save infomation into localstorage
                    localStorage.setItem('home_data',JSON.stringify({
                        name:name.value,
                        phone:phone.value,
                        email:email.value,
                        speak:speak.value
                    }))
                }else{
                    msg.error(data.message);
                }
            })
        }
        validatAll();
    })
    bind(reset,'click',function(event){
        name.value = ""
        email.value = ""
        phone.value = ""
        speak.value = ""
    })
    function initHomeData(){
        let home_data = JSON.parse(localStorage.getItem('home_data'));
        name.value = home_data.name;
        phone.value = home_data.phone;
        email.value = home_data.email;
        speak.value = home_data.speak;
    }
    initHomeData();
})