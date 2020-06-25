function testGS () {

let url = 'https://script.google.com/macros/s/AKfycbxOE1YkaP1O-mbx0thJtk4OBVnD_XHU8Q94rOsr7_z4yTKo5pd9/exec'
    fetch(url)
        .then(d=> d.json())
        .then( d=>{
        document.getElementById('app').textContent = d[0].status;
        });
}

document.getElementById('btn').addEventListener('click',testGS);