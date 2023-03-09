async function attachHomePage(){
    
    let container=document.querySelector(".container");

    container.innerHTML=
   `
   <h1>Employee</h1>

   <p><a class="button new-employee">Cretate New Employee</a></p>

   <table>
        <thead>
            <tr>
                <th class="id">Id</th>
                <th class="name">Name</th>
                <th class="varsta">Varsta</th>
                <th class="adresa">Adresa</th>
            </tr>
        </thead>

        <tbody class="container-employee">

        </tbody>
    </table>
    `

container.addEventListener("click",async(e)=>{

    e.preventDefault;
    let data=e.target;

    if(data.classList.contains("varsta")){
        let vec=await sortByVarsta();

       

        attachRows(vec);
    } else if(data.classList.contains("name")){
        let vec=await sortByName();

    


        attachRows(vec);
    }else if(data.classList.contains("adresa")){
        let vec=await sortByAdresa();
        attachRows(vec);
    }
        

})
 
let data=await getAllEmployee();

attachRows(data);

let btnAddNewEmployee=document.querySelector(".new-employee");

btnAddNewEmployee.addEventListener("click",(e)=>{
    attachNewEmployeePage();
});

let rowsContainer=document.querySelector(".container-employee");
rowsContainer.addEventListener("click",(e)=>{
    let data=e.target.parentNode;

    let carProperties=data.children;

    const employee={
        employeeId:carProperties[0].innerHTML,
        name:carProperties[1].innerHTML,
        varsta:carProperties[2].innerHTML,
        adresa:carProperties[3].innerHTML
    }
    
    attachUpdatePage(employee);

});


}


 function update(){
    let inp1=document.getElementById('name');
    let inp2=document.getElementById('varsta');
    let inp3=document.getElementById('adresa');

    const employee={
        name:inp1.value,
        varsta:inp2.value,
        adresa:inp3.varsta,
    }
    updateEmployee(employee);
 }



 async function attachUpdatePage(employee){
    let container=document.querySelector(".container")

    container.innerHTML=`
        <h1>Update Employee</h1>
        <input name="employeeId" class="employeeId" type="hidden" value="${employee.employeeId}"/>

        <ul class="error">

        </ul>

        <p>
            <label for="name">name</label>
            <input name="name" type="text" class="name" id="name" value="${employee.name}" disabled>
        </p>

        <p>
            <label for="varsta">Varsta</label>
            <input name="varsta" type="text" class="varsta" id="varsta" value="${employee.varsta}" >
        </p>

        <p>
            <label for="adresa">Adresa</label>
            <input name="adresa" type="text" class="adresa" id="adresa" value="${employee.adresa}" >
        </p>

       <div>
            <button class="update" >Update Employee</button>
            <button class="delete">Delete Employee</button>
            <button class="cancel">Cancel</button>
        </div>
        

    `

    let btnCancel=document.querySelector(".cancel");

    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })


    


    let btnUpdate=document.querySelector(".update");
    btnUpdate.addEventListener("click",async()=>{

        let inp1=document.querySelector(".name");
        let inp2=document.querySelector(".varsta");
        let inp3=document.querySelector(".adresa");

        let employee={
            name:inp1.value,
            varsta:inp2.value,
            adresa:inp3.value
        }

        let erors=[];

        if(inp2.value==""){

            erors.push("Trebuie pusa varsta");

            inp2.style.borderColor="red";
        }

        if(inp3.value==""){
            erors.push("Trebuie pusa adresa");

            inp3.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");

            let h1=document.createElement("h1");

            h1.textContent="Ooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";


        }

        if(erors.length==0){
            let data=await updateEmployee(employee);
            attachHomePage();
        }
    })

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        let input=document.querySelector(".employeeId");

        let employeeId=input.value;

        let data=await deleteEmployee(employeeId);

        attachHomePage();
    })
 }
 function attachNewEmployeePage(){
    let container=document.querySelector(".container");
    container.innerHTML=`
    <h1>New Employee</h1>

    <ul class="error">

    </ul>

        <p>
            <label for="name">Name</label>
            <input name="name" type="text" id="name" class="name">
        </p>

        <p>
            <label for="varsta">Varsta</label>
            <input name="varsta" type="text" id="varsta" class="varsta">
        </p>

        <p>
            <label for="adresa">Adresa</label>
            <input name="adresa" type="text" id="adresa" class="adresa">
        </p>

        <div class="butoane">
            <button class="add">Add new Employee<//button>
            <button class="cancel">Cancel</button>
        </div>
    `

    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })

    let btnAddNewEmployee=document.querySelector(".add");
    let inp0=document.getElementById('employeeId');
    let inp1=document.getElementById('name');
    let inp2=document.getElementById('varsta');
    let inp3=document.getElementById('adresa');


    btnAddNewEmployee.addEventListener("click",async()=>{
        let inp1=document.querySelector(".name");
        let inp2=document.querySelector(".varsta");
        let inp3=document.querySelector(".adresa");

        let employee={
            name:inp1.value,
            varsta:inp2.value,
            adresa:inp3.value,
        }

        let erors=[];
        if(inp1.value == "" && inp2.value==0 &&inp3.value==""){
            erors.push("Nu ati completat campurile");
        }

        if(inp1.value==""){
            erors.push("Trebuie pusa numele");
            inp1.getElementsByClassName.borderColor="red";
        
        }

        if(inp2.value==0){
            erors.push("Trebuie pusa varsta");

            inp2.style.borderColor="red";

        }

        if(inp3.value==""){
            erors.push("Trebuie pusa adresa");
            inp3.style.borderColor="red";
        }

        if(erors.length>0){

            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";

            let h1=document.createElement("h1");

            h1.textContent="Ooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let data=await addEmployee(employee);
            attachHomePage();
        }
    })

 }
 
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
    let container=document.querySelector(".container-employee");

    container.innerHTML="";
    
        for(let i=0;i<arr.length;i++){
            container.appendChild(createRow(arr[i]));
        
    }
}





