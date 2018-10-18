define(function(){
    var regexp = {
            name:{
                reg:/^[a-zA-Z\u4e00-\u9fa5]+$/,
                msg:'请输入合法姓名'
            } ,//中英文
            phone:{
                reg:/^\d+$/,
                msg:'请输入合法电话'
            } ,//中英文
            email:{
                reg:/^[\w\d]+@[\w\1]+\.[\w]+$/,
                msg:'请输入合法email'
            } ,//中英文
            string:{
                reg:/^[\w\d\u4e00-\u9fa5\,\.\?\，\。\？\s]+$/,
                msg:'请输入合法宣言'
            }
    };
    return function(ele){
        let value = ele.value;
        let type = ele.dataset.type;
        let currentItem = regexp[type];
        if( !currentItem.reg.test(value) === true ){
            //没通过
            return currentItem.msg;
        }
        return '';
    }
})