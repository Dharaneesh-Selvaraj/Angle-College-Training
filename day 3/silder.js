const container = document.getElementById('container');
const mini = document.getElementsByClassName('minImg');
console.log(mini)
let img=['./Images/joel-the-last-of-us-7680x4320-21484.jpg','./Images/pubg-blindspot-7680x4320-21507.jpg','./Images/marvel-1943-rise-of-5120x2880-15904.jpg','./Images/wonder-woman-batman-7680x4320-21668.jpg','./Images/the-batman-2022-movies-red-background-dark-background-dc-7840x4320-7414.jpg']

let i=0;

setInterval(() => {
    mini[i].classList.remove('active');
    i++;
    
    if(i==img.length)
    {
        i=0;
    }
    mini[i].classList.add('active');
    container.style.transitionDuration='1s';
    container.style.backgroundImage='url("'+img[i]+'")';
},1000);
// const next = () =>{

    
// }

const prev =()=>{

    mini[i].classList.remove('active');
    i--;
    
    if(i==-1)
    {
        i=img.length-1;
    }
    mini[i].classList.add('active');
    container.style.transitionDuration='1s';
    container.style.backgroundImage='url("'+img[i]+'")';

}