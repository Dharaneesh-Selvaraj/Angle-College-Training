const container = document.getElementById('container');
const mini = document.getElementsByClassName('minImg');
console.log(mini)
let img=['./Images/joel-the-last-of-us-7680x4320-21484.jpg','./Images/pubg-blindspot-7680x4320-21507.jpg','./Images/marvel-1943-rise-of-5120x2880-15904.jpg','./Images/mortal-kombat-2021-movies-scorpion-sub-zero-black-7680x4600-4712.jpg','./Images/the-batman-2022-movies-red-background-dark-background-dc-7840x4320-7414.jpg']

let i=0;
const next = () =>{

    mini[i].classList.remove('active');
    i++;
    
    if(i==img.length)
    {
        i=0;
    }
    mini[i].classList.add('active');
    
    container.style.backgroundImage='url("'+img[i]+'")';
}

const prev =()=>{

}