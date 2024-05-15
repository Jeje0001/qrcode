const button=document.querySelector(".button")
const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const searchbox=document.querySelector(".input")
let imgbox=document.querySelector("#imgbox")
let qrimage=document.querySelector(".qrimage")
let data=searchbox.value
async function dat(data){

    data=searchbox.value
    if( data.length > 0){
        const response = await fetch(url + data);
        qrimage.src= url + data
        imgbox.classList.add("show-img")
    }else{
        // alert("please enter a word in the search box")
        searchbox.classList.add("error")
        setTimeout(()=>{
            searchbox.classList.remove("error")


        },1000)
        qrimage.src=""
        
    }
    console.log(response)
    



}

button.addEventListener("click",()=>{

    console.log(dat(data))


})


