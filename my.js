function getGS () {

const url = 'https://script.google.com/macros/s/AKfycbxOE1YkaP1O-mbx0thJtk4OBVnD_XHU8Q94rOsr7_z4yTKo5pd9/exec'
    fetch(url)
        .then(d=> d.json())
        .then( d=>{
        document.getElementById('app').textContent = d[0].status;
        });
}

document.getElementById('btn').addEventListener('click',getGS);


function addGS () {
    const url = 'https://script.google.com/macros/s/AKfycbxOE1YkaP1O-mbx0thJtk4OBVnD_XHU8Q94rOsr7_z4yTKo5pd9/exec'
    let data = {name:'Olivia'};   
        fetch(url, {
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache:'no-cache', // *default, no-cache, reload, force-cache,only-if-cached
            credentials:'omit', // includ, *same-origin , omit
            headers: {
                'Content-Type':'application/json'
                //'Content-Type':'application/x-www-form-urlencoded'
            },
            redirect:'follow', //manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referre-when-downgrade, orig
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
           
     
    }
    
    document.getElementById('btn2').addEventListener('click',addGS);