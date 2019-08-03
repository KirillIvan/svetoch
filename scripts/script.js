var openBigImage, image, back, next, parentImages, imgs = [], index , comments = [], indexComment = 0, commentsParent;
let intervalCommentChange;
function loadDocument(){
    openBigImage = document.getElementById('openImage');
    image = document.getElementById("openImage_img");
    comments = document.getElementsByClassName("comment");
    commentsParent = document.getElementById("comments_article");
    intervalCommentChange = setInterval(nextComment, 7000);
    var maxHeightComments = 400;
    console.log(commentsParent.childNodes[3].height);
    for(let i = 0; i <= comments.length; i++){
        if(maxHeightComments < comments[i].style.height.substring(0, comments[i].style.height.indexOf("px") - 1)){
            console.log("фурычит");
            maxHeightComments = comments[i].innerHeight;
        }
    }
}

function selectImage(event){
    var element = event.target;
    parentImages = element.parentElement;
    var j = 0;
    for (let i = 1; i <= parentImages.childNodes.length - 1; i +=2) {
        var tempObj = parentImages.childNodes[i];
        imgs[j] = tempObj.style.backgroundImage.substring(5,tempObj.style.backgroundImage.indexOf(")") - 1);
        if(imgs[j] == element.style.backgroundImage.substring(5,element.style.backgroundImage.indexOf(")") - 1)){
            index = j;
        }
        j++;
    }
    imageBigOpen();
}

function closeImage(){
    openBigImage.style.visibility = "hidden";
    imgs = [];
}

function nextImage(){
    if(index < imgs.length - 1){
        index++;
    }
    else{
        index = 0;
    }
    imageBigOpen();
}

function imageBigOpen(){
    back = document.getElementById("back-image");
    next = document.getElementById("next-image");
    var marginTopBack = (document.documentElement.clientHeight - 40)/2 + 30 + "px";
    var marginTopNext = (document.documentElement.clientHeight - 100)/2 - 40 + "px";
    back.style.marginTop = marginTopBack;
    next.style.marginTop = marginTopNext;
    var img = new Image();
    img.src = imgs[index];
    image.src = imgs[index];
    if(window.innerHeight < window.innerWidth){
        console.log("if");
        var heightImage = img.width / img.height;
        image.style.height = (window.innerHeight / 1.25) + "px";
        image.style.width = (window.innerHeight / 1.25) * heightImage + "px";
    }
    else{
        var heightImage = img.height / img.width;
        image.style.width = (window.innerWidth / 2) + "px";
        image.style.height = ((window.innerWidth / 2) * heightImage) + "px";
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
    imageBigOpen();
}
function nextCommentClick(){
    nextComment();
    clearInterval(intervalCommentChange);
    setTimeout(intervalCommentChange = setInterval(nextComment, 7000), 10000);
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
    clearInterval(intervalCommentChange);
    setTimeout(intervalCommentChange = setInterval(nextComment, 7000), 10000);
}

function resizeModeWindow(){
    if(openBigImage.style.visibility == "visible"){
        imageBigOpen();
    }
}

function animationMargin(objPrev, objNext){

}

window.onload = loadDocument;
window.onresize = resizeModeWindow;