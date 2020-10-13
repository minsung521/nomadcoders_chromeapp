const body = document.querySelector("body");

const IMG_NUM = 3;

function handleImgLoad(){
    console.log("finish");
}

function paintImage(imgNumber){
    const image = new Image;
    image.src = `/images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);

}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}


init();