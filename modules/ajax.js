define(function(){
    let baseUrl = "";
    return {
        setBaseUrl:function(url){
            baseUrl = url;
        },
        ajax:function(url,callback){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                callback(JSON.parse(xhr.responseText))
            }
            xhr.open('get',baseUrl+url);
            xhr.send();
        }   
    }
})