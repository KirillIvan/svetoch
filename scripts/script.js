var openBigImage, image, back, next, parentImages, imgs = [], index, comments = [], indexComment = 0;
function loadDocument(){
    openBigImage = document.getElementById('openImage');
    image = document.getElementById("openImage_img");
    back = document.getElementById("back-image");
    next = document.getElementById("next-image");
    var marginTopBack = (document.documentElement.clientHeight - 40)/2 + 30 + "px";
    var marginTopNext = (document.documentElement.clientHeight - 100)/2 - 40 + "px";
    back.style.marginTop = marginTopBack;
    next.style.marginTop = marginTopNext;
    comments = document.getElementsByClassName("comment");
    console.log(comments);
}

function selectImage(event){
    var element = event.target;
    parentImages = element.parentElement;
    var pythSelectImg = element.style.backgroundImage.substring(5,element.style.backgroundImage.indexOf(")") - 1);
    image.src = pythSelectImg;
    if(document.documentElement.clientHeight < document.documentElement.clientWidth){
        image.style.height = (document.documentElement.clientHeight / 1.25) + "px";
    }
    else{
        image.style.width = (document.documentElement.clientWidth / 2) + "px";
        image.style.height = (document.documentElement.clientHeight / 2) + "px";
    }
    image.style.marginTop = (document.documentElement.clientHeight - image.clientHeight)/2 + "px";
    openBigImage.style.visibility = "visible";
    console.log(parentImages.childElementCount);
    var j = 0;
    for (let i = 1; i <= parentImages.childNodes.length - 1; i +=2) {
        var tempObj = parentImages.childNodes[i];
        imgs[j] = tempObj.style.backgroundImage.substring(5,tempObj.style.backgroundImage.indexOf(")") - 1);
        j++;
    }
    for (let i = 0; i < imgs.length; i++) {
        if(imgs[i] == pythSelectImg){
            index = i;
            break;
        }
    }
}

function closeImage(){
    openBigImage.style.visibility = "hidden";
}

function nextImage(){
    if(index < imgs.length - 1){
        index++;
    }
    else{
        index = 0;
    }
    image.src = imgs[index];
    if(document.documentElement.clientHeight < document.documentElement.clientWidth){
        image.style.height = (document.documentElement.clientHeight / 1.25) + "px";
    }
    else{
        var img = new Image();
        img.src = imgs[index];
        var heightImage = img.height / img.width;
        console.log(heightImage);
        image.style.width = (document.documentElement.clientWidth / 2) + "px";
        image.style.height = ((document.documentElement.clientWidth / 2) * heightImage) + "px";
        console.log("w: " + image.style.width);
        console.log("h: " + image.style.height);
    }
    image.style.marginTop = (document.documentElement.clientHeight - image.clientHeight)/2 + "px";
    openBigImage.style.visibility = "visible";
}

function backImage(){
    if(index > 0){
        index--;
    }
    else{
        index = 6;
    }
    image.src = imgs[index];
    image.style.height = (document.documentElement.clientHeight / 1.25) + "px";
    image.style.marginTop = (document.documentElement.clientHeight - image.clientHeight)/2 + "px";
    openBigImage.style.visibility = "visible";
}

function nextComment(){
    comments[indexComment].style.display = 'none';
    if(indexComment < comments.length - 1){
        indexComment++;
    }
    else{
        indexComment = 0;
    }
    comments[indexComment].style.display = "block";
}

function backComment(){
    comments[indexComment].style.display = 'none';
    if(indexComment > 0){
        indexComment--;
    }
    else{
        indexComment = comments.length - 1;
    }
    comments[indexComment].style.display = "block";
}

window.onload = loadDocument;
//window.onresize = 