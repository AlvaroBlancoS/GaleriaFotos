var current = 0;

//var namePrefix = "img", nameExt = ".png";

var folder = './imgs/';
var folderImages = ['img0.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
var nImages = folderImages.length - 1;

function onload()
{
    updateButtons();
    updateImage();
}

function updateButtons() 
{
    if (current > nImages - 1) document.querySelector("#nextBtn").disabled = true; 
    else document.querySelector("#nextBtn").disabled = false;
    if (current <= 0) document.querySelector("#prevBtn").disabled = true;
    else document.querySelector("#prevBtn").disabled = false;
}

function updateImage() 
{
    document.querySelector("#img").src = folder + folderImages[current];
    console.log (document.querySelector("#img").img)
}

function next()
{
    if (current >= nImages) return;
    current++;
    updateButtons();
    updateImage();
}

function prev() 
{
    if (current <= 0) return;
    current--;
    updateButtons();
    updateImage();
}