import MUtil from "./utils";

window.addEventListener('load', function () {

    document.getElementById("btnTest").addEventListener("click", function (e) {
        testApi();
    });

}, false );

async function testApi(){
    let result = await MUtil.ajax('http://my-json-server.typicode.com/burakburuk/testApi/posts/1', {
        method: 'GET'});

    console.log(result);
}

