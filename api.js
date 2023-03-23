function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/employee"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            
        },
        mode:"cors"
    };

    if(body !==null){
    options.body=JSON.stringify(body);
    }

    return fetch(url,options);
}

async function getAllEmployee(){
    console.log("aici");

    let data=await api("/all",'GET');

    data=await data.json();

    return data;
}

async function addEmployee(employee){

    let data=await api("/add",'POST',employee);

    return data.json();
}

async function getAllNames(){
    let data=await api("employee/name",'GET');

    data=await data.json();

    return data;
}

async function getAllEmployeeByName(name){
    let data=await api(`/${name}`,'GET');

    data=await data.json();

    return data;
}

async function deleteEmployee(employeeId){
    let data=await api(`delete/${employeeId}`,'DELETE');
}
async function deleteEmployeeByName(name){
    let data=await api(`deleteByName/${name}`,'DELETE');
}

async function updateEmployee(employee){

    let data=await api(`/update`,'PUT',employee);

    return data;
}

async function sortByName(){

    let data=await api(`sortByName`,'GET');

    data =await data.json();

    return data;
}

async function sortByVarsta(){
    let data=await api(`sortByVarsta`,'GET');

    data=await data.json();

    return data;
}

async function sortByAdresa(){

    let data=await api(`sortByAdresa`,'GET');

    data=await data.json();

    return data;
}