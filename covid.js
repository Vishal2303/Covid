async function getData() {
    let res = await fetch(
        "https://covid-api.mmediagroup.fr/v1/cases?country=India"
        //console.log(res);
    );
    let data = await res.json();
    //console.log(data);
    let arr = Object.entries(data);
    //console.log(arr);
    foo(arr);
}
getData();

function foo(arr) {
    let overall = arr[0];
    ///let over = arr[0]
    //console.log(overall[1].confirmed);
    var cases = document.getElementById('cases');
    cases.innerHTML = `TOTAL COVID CASES IN INDIA: ${overall[1].confirmed}
    </br>
    TOTAL DEATHS: ${overall[1].deaths}</br>TOTAL RECOVERED: ${overall[1].recovered}`

    for (let i = 1; i < arr.length; i++) {
        var state = document.getElementById('states')
        let a = arr[i];
        state.innerHTML += `<div class="col-sm-3">
        <div class="box-part text-center" id="container">
        <div class="title" id="card">
        <div class="st-name"><h4>${a[0]}</h4></div>
        <div class="content">
        <span> Confirmed Cases: ${a[1].confirmed}</span>
                    <p><span>Total Death: </span>${a[1].deaths}</p>
                    <p><span>Total Recovered: </span>${a[1].recovered}</p>
                    <p><span>Last Updated: </span>${new Date(a[1].updated).toLocaleString()}</p>
        
        </div>
        </div>
        </div>
        </div>`
        

        // onsole.log(a);
    }

}
