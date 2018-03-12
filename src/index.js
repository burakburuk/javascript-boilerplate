import MUtil from "./utils";

var _host = 'http://my-json-server.typicode.com/burakburuk/javascript-test/';

window.addEventListener('load', function () {
    window.resultBox = document.getElementsByTagName('textarea')[0]
    getAllPersonList();
    document.getElementById("btnTest").addEventListener("click", function (e) {
        testApi();
    });

}, false);

function populateSelectBox(personList) {
    let select = document.getElementsByTagName('select')[0];
    personList.forEach(function (item) {
        let option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name + " " + item.surname;
        select.appendChild(option);
    });
}

async function getAllPersonList() {
    try {
        let personList = await MUtil.ajax(_host + 'person');
        personList = JSON.parse(personList);
        populateSelectBox(personList);
    } catch (error) {
        resultBox.innerText = "Person list could not be fetched!";
    }
}

async function testApi() {
    try {
        let select = document.getElementsByTagName('select')[0];
        if (select && select.value) {
            let person = await MUtil.ajax(_host + 'person/' + select.value);
            person = JSON.parse(person);

            let address = await MUtil.ajax(_host + 'address/' + person.id);
            address = JSON.parse(address);

            resultBox.innerText = "Person : " + person.name + " " + person.surname + ", City : " + address.city;
        } else {
            resultBox.innerText = "Please Select Person!";
        }
    } catch (err) {
        resultBox.innerText = err.statusText;
    }
}

