export default class MUtil {
    constructor() {

    }

    static createRequest() {
        // Old compatibility code, no longer needed.
        if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 6 and older
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    static async ajax(url, methodObj) {
        return new Promise((resolve, reject) => {

            methodObj = Object.assign({
                method: 'POST',
                contentType: 'application/json',
                beforeSend: function (xmlHttpRequest) {
                    xmlHttpRequest.withCredentials = true;
                }
            }, methodObj);

            var xhr = this.createRequest();
            xhr.open(methodObj.method, url);
            xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', methodObj.contentType);

            if (methodObj.method == 'GET') {
                xhr.send();
            } else {
                xhr.send(methodObj.data);
            }

            xhr.onreadystatechange = function () {
                // Process the server response here.
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        debugger;
                        reject(xhr.error);
                    }
                }
            };
        });
    }
}