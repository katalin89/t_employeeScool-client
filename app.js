fetch("http://localhost:8080/api/v1/employee").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data);
})

fetch("http://localhost:8080/api/v1/employee/names").then (data=>{
    return data.json();
}).then(data=>{
    console.log(data);
    createOptions(data);
})

function createOptions(names){
    let namesEmployee=document.querySelector(".allEmployee");
    for(let i=0;i<returnNames.length;i++){
      let option=document.createElement('option')

      option.value=names[i];
      option.textContent=names[i];
      namesEmployee.appendChild(option);
    }
  }

// function createOptions(names){
//     let namesEmployee=document.querySelector(".allEmployee");
//     for(let i=0;i<names.length;i++){
//         let option=document.createElement('option');
//         option.value=names[i];
//         option.textContent=names[i];
//         namesEmployee.appendChild(option);
//     }
// }

let name=document.querySelector("names");
names.addEventListener("change",(e)=>{
    console.log(marca.value);

    fetch(`http://localhost:8080/api/v1/employee/${names.value}`)
    .then(data=>{
        return data.json();
    }).then(data=>{
        attachRows(data);
    })
})


/*   


  let marca= document.querySelector(".marci");
  marca.addEventListener("change",(e)=>{
    console.log(marca.value);  

    fetch(`http://localhost:8080/api/v1/masini/${marca.value}`)
    .then(data=>{
      return data.json();
    }).then(data=>{
      
      console.log(data);
  
      attachRows(data);
      
      
    })
  })
  






*/

