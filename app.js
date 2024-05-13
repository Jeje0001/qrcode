const button=document.querySelector(".button")
const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const search=document.querySelector(".input")
let data=search.value
async function dat(data){
    data=search.value
    const response = await fetch(url + data);
    console.log(response)



}
button.addEventListener("click",()=>{

    console.log(dat(data))


})


