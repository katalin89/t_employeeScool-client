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

