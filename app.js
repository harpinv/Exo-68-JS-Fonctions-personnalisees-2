let para = document.getElementsByTagName('p');

function aleatoire() {
    let pique = Math.random() * 100;
    pique = Math.ceil(pique);
    console.log(pique);
    return pique;
}

for(let i = 0; i <= para.length; i++) {
     para[i].innerText = aleatoire();
}