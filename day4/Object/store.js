//JS OBJECT
let mobile = [
    {
        id:1,
        name:"Samsung",
        model:"S25 Ultra",
        price:100000,
        image:'https://m.media-amazon.com/images/I/71OS3r1hfIL._AC_UY327_FMwebp_QL65_.jpg',
        desc:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI"
    },
    {
        id:2,
        name:"Apple",
        model:"iPhone 16",
        price:100000,
        image:'https://m.media-amazon.com/images/I/61lLjrvDEkL._AC_UY327_FMwebp_QL65_.jpg',
        desc:"Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI"
    }
]
const container = document.getElementById('container');

for(let i=0;i<mobile.length;i++)
{
    container.innerHTML+=`
    <div>
    <h1>${mobile[i].name}</h1>
    <img src=${mobile[i].image} >
    <button onclick="cart(${mobile[i].id})"> Add To Cart </button>
    </div>
    `
} 
let arr=[];

function cart(id)
{
    arr.push(mobile[id-1]);
   localStorage.setItem("CartItem",JSON.stringify(arr))
}