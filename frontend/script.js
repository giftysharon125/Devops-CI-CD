function checkStatus(){

fetch("http://localhost:3000")

.then(response=>response.text())

.then(data=>{

document.getElementById("status").innerHTML=data;

})

.catch(()=>{

document.getElementById("status").innerHTML=
"❌ Server Not Running";

});

}