export default class MUtil {
    constructor(){

    }

    createRequest(){
        var httpRequest = null;
        // Old compatibility code, no longer needed.
        if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 6 and older
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return httpRequest;
    }

    static async ajax(url, methodObj){

        Object.assign(methodObj, {
            method: 'POST',
            contentType: 'text/plain',
            beforeSend: function(xmlHttpRequest) {
                xmlHttpRequest.withCredentials = true;
            }});

        var xhr = this.createRequest();
        xhr.open(methodObj.method, url);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', methodObj.contentType);
        if(methodObj.data){
            xhr.send(methodObj.data);
        }else{
            xhr.send();
        }


        var httpRequest = this.createRequest();
        httpRequest.onreadystatechange = function(){
            // Process the server response here.
            return new Promise((resolve,reject)=> {
                resolve(data);
            })
        };

        httpRequest.open('GET', url, true);
        httpRequest.send();
    }

    static async post(url, data){

    }
}