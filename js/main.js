let Amount=document.getElementById('amount')
let Name=document.getElementById("name")
let info=[]
let data=[]
let result=[]
 async function getApi() {
 let data= await fetch(`http://localhost:3000/client`)
 let api = await data.json()
  info=api.customers
  data=api.transactions  
for( let i=0;i<info.length;i++){
   let id =info[i].id;


for(let g=0;g<data.length;g++){
   if (info[i].id==data[g].customer_id) {

      result.push({...info[i],...data[g]})
     
}


}

}

// console.log(result);

// console.log(data);
//   console.log(info);
 display(result) 
}

function display(api) {
    temp=''
   if (Name.value==''&& Amount.value==false){
     
for(let i=0; i<result.length;i++){
   temp+=`     <tr>
          
          
   <td>
               ${result[i].customer_id}
            </td>
            <td>${result[i].name}</td>
            
            <td>${result[i].date}</td>
            <td>${result[i].amount}</td>
             </tr>`
   }


}
document.getElementById("myData").innerHTML=temp;
   console.log(api);
   

}




function name(params) {
   
}

getApi()


Name.addEventListener("keyup",searchName)
   function searchName  () {
   
      let val=this.value.toLowerCase()
      temp=''
for(let i=0; i<result.length;i++){
   if (result[i].name.toLowerCase().includes(val)==true) {
      temp+=`     <tr>
          
          
      <td>
                  ${result[i].customer_id}
               </td>
               <td>${result[i].name}</td>
               
               <td>${result[i].date}</td>
               <td>${result[i].amount}</td>
                </tr>`
   }
  

}
document.getElementById("myData").innerHTML=temp;

      
   }



Amount.addEventListener("keyup",function () {
  
   let total= Number(this.value);
   temp=''
for(let i=0; i<result.length;i++){
   if (result[i].amount==total) {
      temp+=`<tr>
          
          
      <td>
                  ${result[i].customer_id}
               </td>
               <td>${result[i].name}</td>
               
               <td>${result[i].date}</td>
               <td>${result[i].amount}</td>
                </tr>`
   }
  

}
document.getElementById("myData").innerHTML=temp;
   
})



const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ahmed Ali', 'Aya Elsayed', 'Mina Adel', 'Sarah Reda', 'Mohamed Sayed'],
    datasets: [{
      label: '# of Votes',
      
      data: [1000,550,500,750,2500],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const cx = document.getElementById('Chart');

new Chart(cx, {
  type: 'bar',
  data: {
    labels: ['Ahmed Ali', 'Aya Elsayed', 'Mina Adel',  'Mohamed Sayed',],
    datasets: [{
      label: '# of Votes',
      backgroundcolor:'rgba(0,0,0,)',
      data: [2000,1300,1250,875],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});