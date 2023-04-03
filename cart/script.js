let data = JSON.parse(localStorage.getItem("cart1"));

let cart = document.getElementById("cart-item")
data.forEach((item) => {
    if(item.id)
    cart.innerHTML += `
    <tr class="tableContentRows">
        <td ><button onClick = "deleteRow(${item.id})" id="removeBtn"><i class="fa-solid fa-trash"></i></button></td>
        <td><img width=50px src=${item.img} alt=""></td>
        <td class="title">${item.title}</td>
        <td id="productPrice">${item.price}</td>
        <td><input class="cartInput" type="number" name="" id="" value=${item.qty}></td>
        <td id="totalPrice">$${item.qty*item.price}</td>
        <td ><button class="normal"> BUY</button></td>

    </tr>`
});
let removeBtn = document.querySelectorAll("#removeBtn")

let qtyInputs = document.querySelectorAll(".cartInput")
let priceList = document.querySelectorAll("#productPrice")
let totalPriceList = document.querySelectorAll("#totalPrice")
for(let i = 0;i<qtyInputs.length;i++){
    qtyInputs[i].addEventListener("input",()=>{
        totalPriceList[i].innerHTML = priceList[i].innerHTML*qtyInputs[i].value
    })
    
}
function deleteRow(idToDelete){
    let ContentRows = document.querySelectorAll(".tableContentRows")
    console.log(ContentRows);
    let dataArr = JSON.parse(localStorage.getItem("cart1"));
    
    dataArr.forEach((item,index)=>{
        if(item.id===idToDelete){
            dataArr.splice(index,1)
            ContentRows[index].remove()
        }
    })
    localStorage.setItem("cart1",JSON.stringify(dataArr))
}
