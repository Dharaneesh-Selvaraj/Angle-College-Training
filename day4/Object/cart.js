let mobile =JSON.parse( localStorage.getItem('CartItem'));

const container = document.getElementById('container');
for(let i=0;i<mobile.length;i++)
    {
        container.innerHTML+=`
        <div class="item">
        <img class="img" src=${mobile[i].image} >
        <h1>${mobile[i].name}</h1>
        <button > Buy Now </button>
        </div>
        `
    } 