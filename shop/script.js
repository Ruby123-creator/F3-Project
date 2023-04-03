
All();
let container= document.querySelector(".items")

let filterCategory = document.querySelectorAll(".filter");
// console.log(filterCategory)
for(let i=0;i<filterCategory.length;i++){
    filterCategory[i].addEventListener("click" ,searchCategory)
}

function searchCategory(e){
  filterCategory.forEach((item)=>{
    item.classList.remove('active')
  })
  e.target.classList.add('active')
  console.log(e.target)
  let category = document.getElementById("category-name")
  console.log(category)
  category.innerHTML  = `${e.target.innerHTML} Category`
  let search = e.target.innerHTML.toLowerCase();

  container.innerHTML = ""
  arr =[]
  if (search!=="all") {
      (async () => {
          // if (search) {
          const exercisesData = await fetch('https://fakestoreapi.com/products');
          const data = await exercisesData.json();
          // console.log(data);
          // let isSearchedDataFind = false
          arr = data.filter(
              (item) =>
      item.category.toLowerCase().startsWith(search)
          );
          console.log(arr)
          arr.forEach(item => {
              container.innerHTML += `<div class="item">
                  <img width=300 src=${item.image} alt="Item" />
                  <div class="info">
                    <div class="row">
                      <div class="price">$${item.price}</div>
                      <div class="sized">S,M,L</div>
                    </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                        <div class="circle" style="background-color: #000"></div>
                        <div class="circle" style="background-color: #4938af"></div>
                        <div class="circle" style="background-color: #203d3e"></div>
                      </div>
                    </div>
                    <div class="row">Rating:${item.rating.rate}</div>
                  </div>
                  <button id="addBtn" onclick="AddToCart(${item.id})">Add to Cart</button>
                </div>`
                let obj = new Object();
	obj.id = item.id;
	obj.price = item.price;
  obj.image = item.image;
  obj.title = item.title;
	array.push(obj);
          });
          //  console.log(searchedExercises);
      }
      )();
      // console.log(arr)
  } else {
      All();
  }

}

let array =[]
// console.log(container)
function All(){
fetch("https://fakestoreapi.com/products")
.then((response)=>response.json())
.then((data)=>{
  // console.log(data)

  data.forEach((item)=>{
    container.innerHTML += `<div class="item">
    <img width=300 src=${item.image} alt="Item" />
    <div class="info">
      <div class="row">
        <div class="price">$${item.price}</div>
        <div class="sized">S,M,L</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: #000"></div>
          <div class="circle" style="background-color: #4938af"></div>
          <div class="circle" style="background-color: #203d3e"></div>
        </div>
      </div>
      <div class="row">Rating:${item.rating.rate}</div>
    </div>
    <button class="addBtn" onclick="AddToCart(${item.id})" id="addtocart${item.id}">Add to Cart</button>
  </div>`
  let obj = new Object();
	obj.id = item.id;
	obj.price = item.price;
  obj.image = item.image;
  obj.title = item.title;
	array.push(obj);
  })
})

}
console.log(array)
//search section
{
let searchbar = document.getElementById("search-bar")

let arr;
container.innerHTML ="";

const category = () => {
  // modalWindowOverlay.style.display = 'flex';
  const search1 = searchbar.value;
  // console.log(search1)
  let search = search1.toLowerCase();
  container.innerHTML = ""
  arr =[]
  if (search) {
      (async () => {
          // if (search) {
          const exercisesData = await fetch('https://fakestoreapi.com/products');
          const data = await exercisesData.json();
          // console.log(data);
          // let isSearchedDataFind = false
          arr = data.filter(
              (item) =>
              item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)
              ||item.category.toLowerCase().includes(search)

          );
          console.log(arr)
          arr.forEach(item => {
              container.innerHTML += `<div class="item">
                  <img width=300 src=${item.image} alt="Item" />
                  <div class="info">
                    <div class="row">
                      <div class="price">$${item.price}</div>
                      <div class="sized">S,M,L</div>
                    </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                        <div class="circle" style="background-color: #000"></div>
                        <div class="circle" style="background-color: #4938af"></div>
                        <div class="circle" style="background-color: #203d3e"></div>
                      </div>
                    </div>
                    <div class="row">Rating:${item.rating.rate}</div>
                  </div>
                  <button id="addBtn" onclick="AddToCart(${item.id})">Add to Cart</button>
                </div>`
                let obj = new Object();
	obj.id = item.id;
	obj.price = item.price;
  obj.image = item.image;
	array.push(obj);
  obj.title = item.title;
          });
          //  console.log(searchedExercises);
      }
      )();
      // console.log(arr)
  } else {
      container.innerHTML = ""
  }

}




searchbar.addEventListener("input" ,category)



}



let brr;
if (localStorage.getItem('cart1') == null) {
	brr = []
} else {
	brr = [...JSON.parse(localStorage.getItem('cart1'))]

}

function AddToCart(id) {
  console.log("hii")
	// let p = e.target.id;
	//   console.log(
	// cart_arr[p[p.length-1]-1].innerHTML = `<i class="fa-solid fa-check"></i>`
	// cart_arr[p[p.length-1]-1].disabled = true
	let obj = {};
	let isFind = false
	brr.forEach(item => {

		if (item.id == id) {
			obj.qty = item.qty++
			isFind = true
		}
	})
	if (isFind == false) {
		for (let x of array) {
			// console.log(x);

			if (id== x.id) {
				console.log("hii")
				obj.price = x.price;
				obj.qty = 1
				obj.id = x.id;
        obj.img = x.image
        obj.title = x.title;
				brr.push(obj);
			}
		}
	}
	localStorage.setItem("cart1", JSON.stringify(brr))
}


let rating = document.getElementById("range")


rating.addEventListener("input" , ()=>{
  let choice = rating.value;
  // console.log(choice)
  container.innerHTML = ""
  arr =[]
  if (choice) {
      (async () => {
          // if (search) {
          const exercisesData = await fetch('https://fakestoreapi.com/products');
          const data = await exercisesData.json();
          // console.log(data);
          // let isSearchedDataFind = false
          arr = data.filter(
              (item) =>
                // console.log(parseInt(item.rating.rate));
                parseInt(item.rating.rate)===Number(choice)
                  // console.log(typeof choice)
                
              
          );
          // console.log(arr)
          arr.forEach(item => {
              container.innerHTML += `<div class="item">
                  <img width=300 src=${item.image} alt="Item" />
                  <div class="info">
                    <div class="row">
                      <div class="price">$${item.price}</div>
                      <div class="sized">S,M,L</div>
                    </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                        <div class="circle" style="background-color: #000"></div>
                        <div class="circle" style="background-color: #4938af"></div>
                        <div class="circle" style="background-color: #203d3e"></div>
                      </div>
                    </div>
                    <div class="row">Rating:${item.rating.rate}</div>
                  </div>
                  <button id="addBtn" onclick="${item.id}">Add to Cart</button>
                </div>`
                let obj = new Object();
	obj.id = item.id;
	obj.price = item.price;
  obj.image = item.image;
	array.push(obj);
  obj.title = item.title;
          });
          //  console.log(searchedExercises);
      }
      )();
      // console.log(arr)
  } else {
      container.innerHTML = "No result found"
  }
})