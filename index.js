//Init Random
numberRandom1 = Math.floor(Math.random() * 9) + 1;
numberRandom2 = Math.floor(Math.random() * 9) + 1;
numberRandom3 = Math.floor(Math.random() * 9) + 1;
numberRandom4 = Math.floor(Math.random() * 9) + 1;
numberRandom5 = Math.floor(Math.random() * 9) + 1;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('title').style.color = getRandomColor();

document.body.style.backgroundColor = getRandomColor();

document.getElementById('image1').src = `assets/images/Tête/img${numberRandom1}.png`;

while(numberRandom2 === numberRandom1){
    numberRandom2 = Math.floor(Math.random() * 9) + 1;
}
document.getElementById('image2').src = `assets/images/Yeux/img${numberRandom2}.png`;

while(numberRandom3 === numberRandom1 ||numberRandom3 === numberRandom2){
    numberRandom3 = Math.floor(Math.random() * 9) + 1;
}
document.getElementById('image3').src = `assets/images/Bouche/img${numberRandom3}.png`;

while(numberRandom4 === numberRandom1 ||numberRandom4 === numberRandom2 || numberRandom4 === numberRandom3){
    numberRandom4 = Math.floor(Math.random() * 9) + 1;
}
document.getElementById('image4').src = `assets/images/Bras/img${numberRandom4}.png`;

while(numberRandom5 === numberRandom1 ||numberRandom5 === numberRandom2 || numberRandom5 === numberRandom3 || numberRandom5 === numberRandom4){
    numberRandom5 = Math.floor(Math.random() * 9) + 1;
}
document.getElementById('image5').src = `assets/images/Torse/img${numberRandom5}.png`;




//Click random
document.getElementById("click").onclick = function() {

    numberRandom1 = Math.floor(Math.random() * 9) + 1;
    numberRandom2 = Math.floor(Math.random() * 9) + 1;
    numberRandom3 = Math.floor(Math.random() * 9) + 1;
    numberRandom4 = Math.floor(Math.random() * 9) + 1;
    numberRandom5 = Math.floor(Math.random() * 9) + 1;

    document.getElementById('title').style.color = getRandomColor();
    
    document.getElementById('image1').src = `assets/images/Tête/img${numberRandom1}.png`;
    
    while(numberRandom2 === numberRandom1){
        numberRandom2 = Math.floor(Math.random() * 9) + 1;
    }
    document.getElementById('image2').src = `assets/images/Yeux/img${numberRandom2}.png`;
    
    while(numberRandom3 === numberRandom1 ||numberRandom3 === numberRandom2){
        numberRandom3 = Math.floor(Math.random() * 9) + 1;
    }
    document.getElementById('image3').src = `assets/images/Bouche/img${numberRandom3}.png`;
    
    while(numberRandom4 === numberRandom1 ||numberRandom4 === numberRandom2 || numberRandom4 === numberRandom3){
        numberRandom4 = Math.floor(Math.random() * 9) + 1;
    }
    document.getElementById('image4').src = `assets/images/Bras/img${numberRandom4}.png`;
    
    while(numberRandom5 === numberRandom1 ||numberRandom5 === numberRandom2 || numberRandom5 === numberRandom3 || numberRandom5 === numberRandom4){
        numberRandom5 = Math.floor(Math.random() * 9) + 1;
    }
    document.getElementById('image5').src = `assets/images/Torse/img${numberRandom5}.png`;
    document.body.style.backgroundColor = getRandomColor();
};
