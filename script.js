

let data = JSON.parse(localStorage.getItem("user"))
console.log(data)



let btn = document.getElementById("cartbtn");
console.log(btn)
btn.addEventListener("click" , cart)

function cart(){
    console.log("hii")
    if(data===null){
        window.location.href = "../profile/index.html"
   }
   else{
       window.location.href ="../cart/index.html"
   }
}

function loginbtn(){
    // e.preventDefault()
    console.log("hello")
    if(data===null){
         window.location.href = "profile/index.html"
    }
    else{
        window.location.href ="shop/index.html"
    }
}