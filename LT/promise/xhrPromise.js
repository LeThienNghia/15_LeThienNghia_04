// var fn = (resolve, reject) => {
//     resolve();
//     reject();
// }

// var promise = new Promise(fn);
// var cbfnsucc = () => {
//     console.log("success");
// }
// var cbfnfail = () => {
//     console.log("fail");
// }

// promise
//     .then(cbfnsucc)
//     .catch(cbfnfail)



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
// };

// xhttp.open("GET", "filename", true);
// xhttp.send();



// var fn = (resolve, reject) => {
//     resolve();
//     reject();
// }
// var promise = new Promise(fn);
// var cbfnsucc = () => { console.log('success'); }
// var cbfnfail = () => { console.log('fail'); }

// promise
//     .then(cbfnsucc)
//     .catch(cbfnfail);

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = xhttp.responseText;
//     }

// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

/////////////////////////////////


/////////////////////////////
const getData = () => {
    const promise = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });

    return promise.then((data) => {
        // Xử lý dữ liệu
        console.log(data);
    });
};
getData();