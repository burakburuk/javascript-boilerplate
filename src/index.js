import MUtil from "./utils";

var _host = 'http://my-json-server.typicode.com/burakburuk/javascript-test/';

window.addEventListener('load', function () {

    document.getElementById("btnTest").addEventListener("click", function (e) {
        testApi();
    });

}, false);

async function testApi() {
    try {
        let result = await MUtil.ajax(_host + 'person/1', {
            method: 'GET'
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

