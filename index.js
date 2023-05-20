async function display(){
    let products = await axios.get("https://crudcrud.com/api/f7e8b047109f465ba0e0fe0fb6933dfd/products");
    products = products.data;
    const elect = document.getElementById("electronics");
    const food = document.getElementById("food");
    elect.innerHTML = '';
    food.innerHTML = '';
    //console.log(products);
    for(let i=0;i<products.length;i++){
        if(products[i]["category"] === 'electronics'){
            const prod = "."+products[i]["name"]+"."+products[i]["price"]+"."+products[i]["category"];
            const p = document.createElement("p");
            p.appendChild(document.createTextNode(prod));
            elect.appendChild(p);
        }
        if(products[i]["category"] === "food"){
            const prod = "."+products[i]["name"]+"."+products[i]["price"]+"."+products[i]["category"];
            const p = document.createElement("p");
            p.appendChild(document.createTextNode(prod));
            food.appendChild(p);
        }
    }
}
display();
const sub = document.getElementById("submit");
sub.addEventListener("click",async (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    await axios.post("https://crudcrud.com/api/f7e8b047109f465ba0e0fe0fb6933dfd/products",{name,price,category});
    display();
})