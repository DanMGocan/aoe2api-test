// Information to reach API
const url = 'https://aoe2api-test.herokuapp.com/units/';
const unitToCheck = "huskarl";
const endpoint = `${url}${unitToCheck}`;
let newUnit = {};

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
        setTimeout(() => {
            newUnit = xhr.response;
            console.log(newUnit.name);
        }, 300); 
        }

        
    }

xhr.open('GET', endpoint);
xhr.send();

