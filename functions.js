function createRow(employee){
    let tr =document.createElement("tr");
    tr.innerHTML=`
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.varsta}</td>
        <td>${employee.adresa}</td
    `
    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
        console.log(arr[i]);
    }
}

function returnNames(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].name);
    }
    return arrNou;
}
function returnEmployee(data,name){
    for(let i=0;i<data.length;i++){
        if(data[i].name==name){
            return data[i].name
        }
    }

    return -1;
}



